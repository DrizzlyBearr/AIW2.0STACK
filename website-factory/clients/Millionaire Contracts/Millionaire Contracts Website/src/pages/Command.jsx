import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

// Command is the platform MC runs its clients' work on. Every claim on this
// page comes from the Command source document ("Command: what it is, and what
// it can do"). Capabilities that are only partly live are left out on purpose.
// The illustrations are drawn here and are deliberately generic: no
// screenshots of the real app, because those show client data.

const SITE = 'https://www.millionairecontracts.com'
const COMMAND_LOGIN = 'https://command.millionairecontracts.com/login'
const COMMAND_POLICY = 'https://command.millionairecontracts.com/policy'

// Command's own palette, used for the dark bands on this page only.
const INK = '#0e0e0c'
const GOLD = '#b8963e'
const CREAM = '#ece9e2'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Command',
  serviceType: 'Business operations platform',
  url: `${SITE}/command`,
  provider: { '@type': 'Organization', name: 'Millionaire Contracts', url: SITE },
  description:
    'Command is the platform Millionaire Contracts runs its clients’ work on. Each department is run by an accountable person with an AI agent doing the legwork, and a person approves everything that reaches the outside world.',
}

const departments = [
  {
    name: 'Sales and outreach',
    body: 'Each campaign has a worker agent. It finds who is due, reads the conversation, writes the next message and sends it on LinkedIn or by email at a person’s pace. Once someone writes back, a person approves every reply.',
    points: ['LinkedIn and email', 'Replies answered first', 'Every send on the record'],
  },
  {
    name: 'Marketing',
    body: 'Agents draft posts and articles for you to read, change by talking, and approve. Approved posts are scheduled for each LinkedIn account, and agents comment on the right people’s posts.',
    points: ['Posts and articles', 'Approved before publishing', 'Scheduled per account'],
    illustration: 'calendar',
  },
  {
    name: 'Admin and finance',
    body: 'Invoices raised, sent and chased with reminders. Instalments that bill themselves. Fixed-price work kept in milestones, every payment in the books, and a month-end panel that shows what is outstanding.',
    points: ['Invoices and reminders', 'Payments and expenses', 'Month-end close'],
  },
  {
    name: 'People and reps',
    body: 'A rep app that works on a phone: their leads, call mode, a follow-up after every logged call, and their pay. A sales academy with modules and a certification exam. Reps paid in one go, with payslips by email.',
    points: ['Rep app', 'Sales academy', 'Payouts and payslips'],
  },
]

const steps = [
  {
    number: '01',
    heading: 'Agents do the legwork',
    body: 'They find who is due, draft the messages, write the reports and keep the books. Every step an agent takes is recorded, so you can see what it did and why.',
  },
  {
    number: '02',
    heading: 'A person approves what goes out',
    body: 'Anything that reaches the outside world shows a card with Approve and Decline. A reply to a lead, an email to a client, a calendar change, a document sent for sign-off. Nothing goes until a person presses Approve.',
  },
  {
    number: '03',
    heading: 'You see it all in one place',
    body: 'The work happens on Command, not in scattered inboxes and spreadsheets. So every department is visible from one place, from anywhere.',
  },
]

const audiences = [
  {
    heading: 'You and your team',
    body: 'Your own portal: the work being done for you, delivery dates, documents waiting on your sign-off, weekly reports and key dates. You can talk to an agent about your own business, and only yours.',
  },
  {
    heading: 'Your reps',
    body: 'A phone-friendly app with their leads, call mode, follow-ups and pay, plus the sales academy that picks up where they left off.',
  },
  {
    heading: 'Our team at Millionaire Contracts',
    body: 'We run every client, campaign, agent and payment from Command, and talk to the COO agent on the home screen. Your work sits in the same place as ours.',
  },
]

const rules = [
  'A person approves anything that reaches the outside world.',
  'Each client sees only their own business.',
  'Agents never see passwords or keys. Their tools carry them.',
  'What other people write to an agent is treated as information, never as instructions. A message that tries to steer an agent is flagged to our team.',
  'Somebody who asks to stop hears nothing more, on any channel.',
]

// ── The keystone mark: a square C closed by one gold block ──
function CommandMark({ className = '' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false">
      <g transform="translate(1.9 0)">
        <path
          d="M46 14H22a8 8 0 0 0-8 8v20a8 8 0 0 0 8 8h24"
          fill="none"
          stroke="currentColor"
          strokeWidth="7.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="38" y="27" width="12" height="10" rx="2.5" fill={GOLD} />
      </g>
    </svg>
  )
}

// ── Illustration: a generic approval card ──
function ApprovalIllustration() {
  return (
    <div
      role="img"
      aria-label="Illustration of an approval card in Command. A drafted reply waits with Approve and Decline buttons."
      className="w-full max-w-sm mx-auto"
    >
      <div aria-hidden="true" className="rounded-2xl p-5 shadow-2xl" style={{ backgroundColor: '#1a1a17', border: '1px solid rgba(236,233,226,0.12)' }}>
        <div className="flex items-center justify-between mb-5">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: GOLD }}>Needs your approval</span>
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: GOLD }} />
        </div>
        <div className="rounded-xl p-4 mb-4" style={{ backgroundColor: 'rgba(236,233,226,0.06)' }}>
          <p className="font-body text-sm font-semibold mb-1" style={{ color: CREAM }}>Reply to a new lead</p>
          <p className="font-body text-xs mb-4" style={{ color: 'rgba(236,233,226,0.6)' }}>Drafted by the outreach agent</p>
          <div className="space-y-2">
            <div className="h-2 rounded-full w-full" style={{ backgroundColor: 'rgba(236,233,226,0.18)' }} />
            <div className="h-2 rounded-full w-11/12" style={{ backgroundColor: 'rgba(236,233,226,0.18)' }} />
            <div className="h-2 rounded-full w-3/5" style={{ backgroundColor: 'rgba(236,233,226,0.18)' }} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <span className="font-headline font-bold text-sm text-center rounded-lg py-2.5" style={{ backgroundColor: GOLD, color: INK }}>Approve</span>
          <span className="font-headline font-bold text-sm text-center rounded-lg py-2.5" style={{ border: '1px solid rgba(236,233,226,0.3)', color: CREAM }}>Decline</span>
        </div>
      </div>
      <div aria-hidden="true" className="mx-6 h-3 rounded-b-2xl" style={{ backgroundColor: 'rgba(236,233,226,0.08)' }} />
    </div>
  )
}

// ── Illustration: a week of scheduled posts ──
function CalendarIllustration() {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const posts = [true, false, true, false, true, false, false]
  return (
    <div role="img" aria-label="Illustration of a week with three posts scheduled." className="mt-5">
      <div aria-hidden="true" className="grid grid-cols-7 gap-1.5">
        {days.map((d, i) => (
          <div key={i} className="rounded-md border border-gray-200 bg-gray-50 px-1 py-2 flex flex-col items-center gap-1.5">
            <span className="font-body text-[10px] text-gray-500">{d}</span>
            <span className={`w-2 h-2 rounded-full ${posts[i] ? '' : 'bg-gray-200'}`} style={posts[i] ? { backgroundColor: GOLD } : undefined} />
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Illustration: the COO's weekday morning note ──
function MorningNoteIllustration() {
  const lines = ['Where things stand', 'What needs you', 'Three things to do today', 'One idea']
  return (
    <div
      role="img"
      aria-label="Illustration of the COO agent's morning note, with four headings: where things stand, what needs you, three things to do today, and one idea."
      className="w-full max-w-sm"
    >
      <div aria-hidden="true" className="rounded-2xl p-5" style={{ backgroundColor: 'rgba(236,233,226,0.06)', border: '1px solid rgba(236,233,226,0.12)' }}>
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: INK, color: CREAM, border: '1px solid rgba(236,233,226,0.15)' }}>
            <CommandMark className="w-5 h-5" />
          </span>
          <div>
            <p className="font-body text-sm font-semibold" style={{ color: CREAM }}>COO</p>
            <p className="font-body text-xs" style={{ color: 'rgba(236,233,226,0.55)' }}>Morning note</p>
          </div>
        </div>
        <div className="space-y-3">
          {lines.map((l) => (
            <div key={l}>
              <p className="font-body text-xs font-semibold mb-1.5" style={{ color: GOLD }}>{l}</p>
              <div className="h-1.5 rounded-full w-4/5" style={{ backgroundColor: 'rgba(236,233,226,0.15)' }} />
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-5">
          {['Do it', 'Not now', 'Tell me more'].map((b) => (
            <span key={b} className="font-body text-xs rounded-full px-3 py-1" style={{ border: '1px solid rgba(236,233,226,0.25)', color: CREAM }}>{b}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Command() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <SEOMeta
        title="Command, the Platform Millionaire Contracts Runs On"
        description="Command is the platform Millionaire Contracts runs its clients' work on. Agents do the legwork across sales, marketing, finance and reps, and a person approves everything that goes out."
        path="/command"
        schema={schema}
      />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: INK }}>
        <div
          className="absolute inset-0 opacity-[0.05]"
          aria-hidden="true"
          style={{ backgroundImage: `linear-gradient(${GOLD} 1px, transparent 1px), linear-gradient(90deg, ${GOLD} 1px, transparent 1px)`, backgroundSize: '60px 60px' }}
        />
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-16 md:py-24 grid lg:grid-cols-[1.25fr_1fr] gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8" style={{ color: CREAM }}>
              <CommandMark className="w-12 h-12 md:w-14 md:h-14" />
              <span className="font-headline font-black text-3xl md:text-4xl tracking-tight">Command</span>
            </div>
            <span className="section-label mb-4 block" style={{ color: GOLD }}>The platform behind our work</span>
            <h1 className="font-headline text-4xl md:text-6xl font-black leading-tight mb-6" style={{ color: CREAM }}>
              The whole office, run by people.{' '}
              <span style={{ color: GOLD }}>Agents do the legwork.</span>
            </h1>
            <p className="font-body text-lg leading-relaxed max-w-2xl mb-8" style={{ color: 'rgba(236,233,226,0.75)' }}>
              Command is the platform Millionaire Contracts runs its clients’ work on. Each department has an accountable person, with an AI agent doing the work underneath. A person signs off on everything that goes out.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/calender"
                className="inline-block text-center font-headline font-bold px-7 py-4 rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: GOLD, color: INK }}
              >
                Book a Call
              </Link>
              <a
                href="#what-it-does"
                className="inline-block text-center font-headline font-bold px-7 py-4 rounded-lg transition-colors hover:bg-white/10"
                style={{ border: `2px solid ${CREAM}`, color: CREAM }}
              >
                See what it does
              </a>
            </div>
          </div>
          <ApprovalIllustration />
        </div>
      </section>

      {/* What it runs */}
      <section id="what-it-does" className="py-20 px-6 bg-mc-cream scroll-mt-24">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label mb-3 block" style={{ color: '#8a6a1f' }}>What it runs</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight">
              The departments, in one place
            </h2>
            <p className="font-body text-gray-600 mt-4 text-base">
              Each one is run by a person, with an agent doing the legwork underneath.
            </p>
          </div>

          {/* The COO, the first thing you see */}
          <div className="rounded-2xl p-7 md:p-10 mb-6 grid md:grid-cols-[1.2fr_1fr] gap-10 items-center" style={{ backgroundColor: INK }}>
            <div>
              <span className="section-label mb-3 block" style={{ color: GOLD }}>On the home screen</span>
              <h3 className="font-headline text-2xl md:text-3xl font-black mb-4" style={{ color: CREAM }}>Your COO agent</h3>
              <p className="font-body leading-relaxed mb-5" style={{ color: 'rgba(236,233,226,0.75)' }}>
                The home screen is a conversation with the COO. Each weekday morning it writes where things stand, what needs you, three things it would do today and one idea. Ask it anything, or tell it what to do.
              </p>
              <ul className="space-y-2">
                {[
                  'Reads the whole business before it answers.',
                  'Ends each answer with what it would do next.',
                  'Acts only behind Approve.',
                ].map((p) => (
                  <li key={p} className="font-body text-sm flex gap-3" style={{ color: CREAM }}>
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-sm flex-shrink-0" style={{ backgroundColor: GOLD }} aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <MorningNoteIllustration />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {departments.map((d) => (
              <div key={d.name} className="bg-white rounded-2xl border border-gray-200 p-7 flex flex-col">
                <div className="w-1.5 h-8 rounded-full mb-5" style={{ backgroundColor: GOLD }} aria-hidden="true" />
                <h3 className="font-headline font-bold text-mc-teal text-xl mb-3">{d.name}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{d.body}</p>
                {d.illustration === 'calendar' && <CalendarIllustration />}
                <ul className="flex flex-wrap gap-2 mt-5">
                  {d.points.map((p) => (
                    <li key={p} className="font-body text-xs font-semibold text-mc-teal bg-mc-cream rounded-full px-3 py-1.5">{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-label mb-3 block" style={{ color: '#8a6a1f' }}>How it works</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight">
              Agents work. People decide.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.number}>
                <div className="font-headline text-6xl font-black leading-none mb-3" style={{ color: 'rgba(184,150,62,0.3)' }} aria-hidden="true">{s.number}</div>
                <h3 className="font-headline font-bold text-mc-teal text-lg mb-3">{s.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who uses it */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label mb-3 block" style={{ color: '#8a6a1f' }}>Who uses it</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal leading-tight">
              One platform, each person their own view
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {audiences.map((a) => (
              <div key={a.heading} className="bg-white rounded-2xl border border-gray-200 p-7">
                <h3 className="font-headline font-bold text-mc-teal text-lg mb-3">{a.heading}</h3>
                <p className="font-body text-gray-600 text-sm leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
          <p className="font-body text-mc-teal text-center font-semibold mt-10">
            Each client sees only their own business.
          </p>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20 px-6" style={{ backgroundColor: INK }}>
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-12">
          <div>
            <span className="section-label mb-3 block" style={{ color: GOLD }}>The rules it keeps</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black leading-tight mb-5" style={{ color: CREAM }}>
              Nothing goes out without a person.
            </h2>
            <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(236,233,226,0.75)' }}>
              Command keeps the record of everything that happened. These rules hold on every channel, for every client.
            </p>
            <a
              href={COMMAND_POLICY}
              target="_blank"
              rel="noreferrer"
              className="font-body font-semibold underline underline-offset-4"
              style={{ color: GOLD }}
            >
              Read the Command privacy policy
            </a>
          </div>
          <ul className="space-y-4">
            {rules.map((r) => (
              <li key={r} className="flex gap-4 rounded-xl p-5" style={{ backgroundColor: 'rgba(236,233,226,0.05)', border: '1px solid rgba(236,233,226,0.1)' }}>
                <span className="mt-1.5 w-2.5 h-2.5 rounded-sm flex-shrink-0" style={{ backgroundColor: GOLD }} aria-hidden="true" />
                <span className="font-body leading-relaxed" style={{ color: CREAM }}>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mc-cream py-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-center mb-6 text-mc-teal">
            <CommandMark className="w-14 h-14" />
          </div>
          <h2 className="font-headline text-3xl md:text-4xl font-black text-mc-teal mb-4 leading-tight">
            See what Command would take on for you.
          </h2>
          <p className="font-body text-gray-600 text-lg mb-8">
            Book a call. We will look at how your business runs today and which parts Command would carry.
          </p>
          <Link to="/calender" className="btn-primary">
            Book a Call
          </Link>
          <p className="font-body text-sm text-gray-600 mt-8">
            Already a client?{' '}
            <a href={COMMAND_LOGIN} className="font-semibold text-mc-teal underline underline-offset-4">
              Sign in
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
