import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { BOOKING_URL } from './Calendar'

// The free plan as a page of its own (Kat, 10 November 2026): the same plan
// that goes in the email body, kept somewhere the prospect can find again
// without digging for the email, with diagrams that explain it better than
// paragraphs, and a Save as PDF button for anyone who wants a copy.
//
// Each plan is one file, public/plans/<slug>.json, fetched when its link is
// opened. Nothing about any prospect is in the site's code, so one plan never
// shows another. The slug is the business plus a random code, nobody can
// guess it, robots.txt keeps /plan/ out of search, and the page says noindex.
// A plan is written from what the prospect told us and what is on their own
// public site, never anything private.
//
// The file's shape, and how to add one, is in PLANS.md beside package.json.

const SLUG = /^[a-z0-9-]{6,80}$/

export default function Plan() {
  const { slug } = useParams()
  const [plan, setPlan] = useState(null)
  const [state, setState] = useState('loading')

  useEffect(() => {
    if (!SLUG.test(slug || '')) return setState('missing')
    let live = true
    fetch(`/plans/${slug}.json`, { cache: 'no-cache' })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((data) => live && (setPlan(data), setState('ready')))
      .catch(() => live && setState('missing'))
    return () => {
      live = false
    }
  }, [slug])

  return (
    <div className="min-h-screen bg-mc-cream text-mc-teal print:bg-white">
      <Helmet>
        <title>{plan ? `A plan for ${plan.business} | Millionaire Contracts` : 'Your plan | Millionaire Contracts'}</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <header className="bg-mc-teal print:bg-white">
        <div className="max-w-3xl mx-auto px-5 py-5 flex items-center justify-between gap-4">
          <a href="/" className="bg-white rounded-lg px-3 py-2 inline-flex print:px-0">
            <img src="/mc-signature-logo.png" alt="Millionaire Contracts" className="h-8 w-auto" />
          </a>
          {state === 'ready' && (
            <button type="button" onClick={() => window.print()} className="print:hidden font-body text-sm font-semibold text-white border border-white/30 rounded-lg px-4 py-2 hover:border-mc-gold hover:text-mc-gold transition-colors">
              Save as PDF
            </button>
          )}
        </div>
      </header>

      {state === 'loading' && <p className="max-w-3xl mx-auto px-5 py-20 font-body text-gray-500">Opening your plan...</p>}
      {state === 'missing' && (
        <div className="max-w-3xl mx-auto px-5 py-20 font-body">
          <h1 className="font-headline text-3xl font-black mb-3">We couldn't find that plan</h1>
          <p className="text-gray-600">The link may be cut short. Open it again from the email, or reply to that email and we will send it again.</p>
        </div>
      )}
      {state === 'ready' && plan && <PlanBody plan={plan} />}
    </div>
  )
}

function Section({ label, title, children }) {
  return (
    <section className="py-8 border-t border-mc-teal/10 break-inside-avoid-page">
      {label && <p className="font-body text-xs font-bold tracking-[0.2em] uppercase text-mc-gold mb-2">{label}</p>}
      {title && <h2 className="font-headline text-2xl font-black mb-5">{title}</h2>}
      {children}
    </section>
  )
}

function PlanBody({ plan }) {
  const weeks = plan.timelineWeeks || Math.max(...(plan.timeline || []).map((t) => t.to), 12)
  return (
    <main className="max-w-3xl mx-auto px-5 pb-16 font-body">
      {/* Cover */}
      <div className="py-10">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-mc-gold mb-3">Your free plan</p>
        <h1 className="font-headline text-4xl sm:text-5xl font-black leading-tight">{plan.headline}</h1>
        <p className="mt-4 text-gray-600">
          Prepared for {plan.person}, {plan.business} · {plan.date} · by {plan.from}
        </p>
      </div>

      {plan.told?.length > 0 && (
        <Section label="Where you are" title="What you told us">
          <ul className="space-y-3">
            {plan.told.map((t) => (
              <li key={t} className="bg-white border-l-4 border-mc-gold rounded-lg px-4 py-3 text-gray-700">{t}</li>
            ))}
          </ul>
        </Section>
      )}

      {plan.today?.length > 0 && (
        <Section label="The diagram" title={plan.todayTitle || 'Where enquiries leak today'}>
          <Flow steps={plan.today} tone="today" />
          {plan.future?.length > 0 && (
            <>
              <h3 className="font-headline text-xl font-black mt-10 mb-5">{plan.futureTitle || 'With the plan in place'}</h3>
              <Flow steps={plan.future} tone="future" />
            </>
          )}
        </Section>
      )}

      {plan.noticed?.length > 0 && (
        <Section label="From your website" title="What we noticed">
          <ul className="space-y-2 text-gray-700">
            {plan.noticed.map((n) => (
              <li key={n} className="flex gap-3">
                <span className="mt-2 h-2 w-2 flex-none rounded-full bg-mc-gold" />
                <span>{n}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {plan.plan?.length > 0 && (
        <Section label="The plan" title={plan.planTitle || 'How we would go about it'}>
          <ol className="grid gap-4 sm:grid-cols-2">
            {plan.plan.map((p, i) => (
              <li key={p.title} className="bg-white rounded-xl border border-mc-teal/10 p-5 break-inside-avoid">
                <div className="h-9 w-9 rounded-full bg-mc-gold text-mc-teal font-black flex items-center justify-center mb-3">{i + 1}</div>
                <h3 className="font-headline text-lg font-black mb-1">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {plan.timeline?.length > 0 && (
        <Section label="Timing" title="How long it takes">
          <Timeline items={plan.timeline} weeks={weeks} />
        </Section>
      )}

      {plan.worth && (
        <Section label="The numbers" title={plan.worth.title || "Why it's worth it"}>
          {plan.worth.stats?.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2 mb-4">
              {plan.worth.stats.map((s) => (
                <div key={s.label} className="bg-mc-teal text-white rounded-xl p-5 print:bg-white print:text-mc-teal print:border print:border-mc-teal/20">
                  <p className="font-headline text-4xl font-black text-mc-gold">{s.value}</p>
                  <p className="text-sm text-gray-300 print:text-gray-600 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          )}
          {plan.worth.body && <p className="text-gray-700 leading-relaxed">{plan.worth.body}</p>}
        </Section>
      )}

      {plan.next && (
        <Section label="Next step" title={plan.next.title || 'What happens next'}>
          <p className="text-gray-700 leading-relaxed mb-5">{plan.next.body}</p>
          <a href={plan.next.href || BOOKING_URL} target="_blank" rel="noopener" className="btn-primary inline-block print:hidden">
            {plan.next.cta || 'Book a call'}
          </a>
        </Section>
      )}

      <footer className="pt-8 border-t border-mc-teal/10 text-sm text-gray-500">
        {plan.from}, Millionaire Contracts · reply to the email this came with, or book a time at{' '}
        <a href={BOOKING_URL} className="underline">calendly.com/katlehomoh</a>
      </footer>
    </main>
  )
}

/**
 * A process as boxes and arrows: across on a wide screen, down on a phone.
 * "today" marks where things leak, in red under the step; "future" marks what
 * each step does, in gold.
 */
function Flow({ steps, tone }) {
  const today = tone === 'today'
  return (
    <ol className="flex flex-col sm:flex-row sm:items-stretch gap-2 sm:gap-0">
      {steps.map((s, i) => (
        <li key={s.step} className="flex flex-col sm:flex-row sm:flex-1 items-stretch break-inside-avoid">
          <div className="flex-1 flex flex-col">
            <div className={`rounded-lg px-3 py-3 text-sm font-semibold text-center ${today ? 'bg-white border border-mc-teal/15' : 'bg-mc-teal text-white print:bg-white print:text-mc-teal print:border print:border-mc-teal'}`}>
              {s.step}
            </div>
            {s.leak && (
              <p className="mt-2 text-xs text-red-700 text-center flex items-start justify-center gap-1">
                <span aria-hidden="true">●</span>
                <span>{s.leak}</span>
              </p>
            )}
            {s.note && <p className="mt-2 text-xs text-mc-teal/70 text-center">{s.note}</p>}
          </div>
          {i < steps.length - 1 && (
            <div aria-hidden="true" className="flex items-center justify-center text-mc-gold font-black px-1 py-1 sm:py-0 sm:pt-3 sm:items-start">
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </div>
          )}
        </li>
      ))}
    </ol>
  )
}

/** Weeks along the top, each piece of work as a bar under them. */
function Timeline({ items, weeks }) {
  return (
    <div className="bg-white rounded-xl border border-mc-teal/10 p-4 sm:p-5">
      <div className="flex justify-between text-[11px] text-gray-400 mb-3 pl-0">
        <span>Week 1</span>
        <span>Week {Math.round(weeks / 2)}</span>
        <span>Week {weeks}</span>
      </div>
      <div className="space-y-4">
        {items.map((t) => {
          const left = ((t.from - 1) / weeks) * 100
          const width = Math.max(((t.to - t.from + 1) / weeks) * 100, 6)
          return (
            <div key={t.label} className="break-inside-avoid">
              <div className="relative h-3 rounded-full bg-mc-cream">
                <div className="absolute top-0 h-3 rounded-full bg-mc-gold" style={{ left: `${left}%`, width: `${width}%` }} />
              </div>
              <p className="mt-1.5 text-sm font-semibold">
                {t.label} <span className="font-normal text-gray-500">· {t.when}</span>
              </p>
              {t.body && <p className="text-xs text-gray-500">{t.body}</p>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
