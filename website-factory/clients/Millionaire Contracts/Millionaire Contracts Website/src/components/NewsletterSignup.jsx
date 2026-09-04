import { useState, useRef, useEffect } from 'react'

// Inline newsletter capture for content pages. Most article traffic is not
// ready to book a call, so this gives the not-ready-yet reader a low-commitment
// action instead of a dead end at the foot of the page. Posts to the same
// newsletter-subscribe function the Pipeline & Power page uses, and renders the
// same Cloudflare Turnstile widget so the submit is accepted when the function
// has Turnstile enforcement enabled. Honeypot below catches simple bots.
const TURNSTILE_SITE_KEY = '0x4AAAAAADoMt2UL2VS-CDZ-'
const FN_BASE = 'https://yhktwznlnfzcfzrmpniv.supabase.co/functions/v1'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const [status, setStatus] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const turnstileRef = useRef(null)
  const widgetId = useRef(null)

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return

    function renderWidget() {
      if (!turnstileRef.current || widgetId.current !== null || !window.turnstile) return
      widgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      })
    }

    if (window.turnstile) {
      renderWidget()
    } else {
      const existing = document.querySelector('script[data-turnstile]')
      if (existing) {
        existing.addEventListener('load', renderWidget)
      } else {
        const script = document.createElement('script')
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
        script.async = true
        script.defer = true
        script.setAttribute('data-turnstile', 'true')
        script.onload = renderWidget
        document.head.appendChild(script)
      }
    }

    return () => {
      if (widgetId.current !== null && window.turnstile) {
        window.turnstile.remove(widgetId.current)
        widgetId.current = null
      }
    }
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'loading') return
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(`${FN_BASE}/newsletter-subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          _hp: honeypot,
          ...(turnstileToken && { turnstileToken }),
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMsg(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again.')
    }
  }

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-mc-teal rounded-2xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: 'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="relative z-10">
            {status === 'success' ? (
              <div className="text-center py-2">
                <h3 className="font-headline text-2xl font-black text-white mb-2">Check your inbox</h3>
                <p className="font-body text-gray-200 text-sm leading-relaxed max-w-md mx-auto">
                  Click the confirm link we just sent and you are on the list. The next issue of Pipeline &amp; Power lands in your inbox when it goes out.
                </p>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8">
                <div className="flex-1">
                  <span className="section-label mb-3 block">Pipeline &amp; Power</span>
                  <h3 className="font-headline text-2xl font-black text-white leading-snug mb-2">
                    Not ready to talk yet? Read first.
                  </h3>
                  <p className="font-body text-gray-300 text-sm leading-relaxed">
                    A fortnightly note on one shift in global business and what it means for your revenue. One idea, one move, no filler. Leave any time.
                  </p>
                </div>
                <form onSubmit={handleSubmit} noValidate className="flex-shrink-0 w-full md:w-80">
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    aria-hidden="true"
                  />
                  <div className="flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/95 text-mc-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-mc-gold text-sm"
                    />
                    <div ref={turnstileRef} className="min-h-[1px]" />
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full disabled:opacity-60"
                    >
                      {status === 'loading' ? 'Sending...' : 'Subscribe'}
                    </button>
                  </div>
                  {status === 'error' && (
                    <p className="font-body text-amber-200 text-xs mt-2">{errorMsg}</p>
                  )}
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
