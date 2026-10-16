"""Convert the SA Psychics review export into src/reviews.json for the site.

Usage: python3 scripts/import_reviews.py [path/to/export.xlsx]

Keeps every review word for word, with three changes for the site:
emojis removed, dashes turned into commas, and surnames cut to an initial.
"""
import json
import re
import sys
from datetime import datetime
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
SOURCE = Path(sys.argv[1]) if len(sys.argv) > 1 else ROOT / 'data' / 'sa-psychics-reviews.xlsx'
OUT = ROOT / 'src' / 'reviews.json'

# Review numbers (the # column) left off the site, with the reason.
EXCLUDE = {}

# Review numbers shown first, in this order.
FEATURED = [31, 253, 33, 42, 243, 273]

EMOJI = re.compile('[\U0001F000-\U0001FFFF☀-➿⬀-⯿️‍⃣]')
SURNAME_PREFIXES = {'van', 'de', 'du', 'le', 'la', 'von'}


def clean_text(text):
    text = EMOJI.sub('', text)
    text = re.sub(r'\s*[\u2014\u2013]\s*', ', ', text)
    return re.sub(r'\s+', ' ', text).strip()


def short_name(name):
    name = str(name).strip()
    if name.isupper() and len(name) > 1:
        name = name.title()
    first, *rest = name.split()
    first = first[0].upper() + first[1:]
    if not rest:
        return first
    initials = ''.join(
        (p[0].lower() if p.lower() in SURNAME_PREFIXES else p[0].upper()) + '.' for p in rest
    )
    return f'{first} {initials}'


def nice_date(raw):
    return datetime.strptime(raw.strip(), '%d.%m.%y %H:%M').strftime('%-d %B %Y')


def main():
    sheet = openpyxl.load_workbook(SOURCE, read_only=True).worksheets[0]
    rows = list(sheet.iter_rows(values_only=True))[1:]
    reviews = []
    for num, name, date, stars, text in rows:
        if num in EXCLUDE or not (text or '').strip():
            continue
        reviews.append({
            'id': num,
            'name': short_name(name),
            'date': nice_date(date),
            'stars': int(stars),
            'text': clean_text(text),
            'featured': FEATURED.index(num) + 1 if num in FEATURED else 0,
        })
    total = len(rows)
    average = sum(int(r[3]) for r in rows) / total
    out = {
        'source': 'SA Psychics',
        'total': total,
        'average': round(average, 1),
        'fiveStar': sum(1 for r in rows if int(r[3]) == 5),
        'since': nice_date(rows[-1][2]).split()[-1],
        'reviews': reviews,
    }
    OUT.write_text(json.dumps(out, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
    print(f'{len(reviews)} reviews written to {OUT.relative_to(ROOT)} '
          f'({total} total, {len(EXCLUDE)} excluded, average {average:.2f})')


if __name__ == '__main__':
    main()
