#!/usr/bin/env bash
# Rebuild .env.local from environment variables.
#
# Cloud sessions run in an ephemeral container: .env.local is gitignored and
# does not survive the session. The stack's skills and agents read .env.local,
# not the process environment, so this bridges the two. Any key exported into
# the session environment is written to .env.local at session start.
#
# Values already present in .env.local win. This never overwrites a key the
# student pasted by hand, and never prints a secret value.

set -euo pipefail

cd "${CLAUDE_PROJECT_DIR:-$(dirname "$0")/..}"

ENV_FILE=".env.local"
KEYS=(
  ANTHROPIC_API_KEY
  APIFY_TOKEN
  SUPABASE_URL
  SUPABASE_ANON_KEY
  SUPABASE_SERVICE_ROLE_KEY
  ASSEMBLYAI_API_KEY
  GEMINI_API_KEY
)

[ -f "$ENV_FILE" ] || { [ -f .env.example ] && cp .env.example "$ENV_FILE"; }
touch "$ENV_FILE"
chmod 600 "$ENV_FILE"

filled=()
for key in "${KEYS[@]}"; do
  value="${!key:-}"
  [ -n "$value" ] || continue

  # Skip if .env.local already carries a non-empty value for this key.
  if grep -qE "^${key}=.+" "$ENV_FILE"; then
    continue
  fi

  if grep -qE "^${key}=" "$ENV_FILE"; then
    # Placeholder line exists and is empty. Replace it in place.
    tmp=$(mktemp)
    KEY="$key" VALUE="$value" awk '
      BEGIN { k = ENVIRON["KEY"]; v = ENVIRON["VALUE"] }
      $0 ~ "^" k "=" { print k "=" v; next }
      { print }
    ' "$ENV_FILE" > "$tmp"
    mv "$tmp" "$ENV_FILE"
  else
    printf '%s=%s\n' "$key" "$value" >> "$ENV_FILE"
  fi
  filled+=("$key")
done

chmod 600 "$ENV_FILE"

if [ ${#filled[@]} -gt 0 ]; then
  printf 'materialize-env: populated %s from the session environment\n' "${filled[*]}"
fi
