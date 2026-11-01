import { useState } from 'react'
import { Link } from 'react-router-dom'
import { inHousePerRep, usd } from '../lib/salesCost'

// In-house against outsourced, year one, on the visitor's own numbers.
//
// The outsourced side uses the market range quoted on the site ($3,000 to
// $15,000 a month), never a Millionaire Contracts price. The visitor sets the
// fee; the page only does the arithmetic.

function Slider({ id, label, value, display, min, max, step, onChange, hint }) {
  return (
    <div className="mb-7">
      <div className="flex justify-between items-baseline mb-3 gap-4">
        <label htmlFor={id} className="font-body font-semibold text-mc-teal text-sm">{label}</label>
        <span className="font-headline font-black text-mc-gold text-xl whitespace-nowrap">{display}</span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-mc-gold"
      />
      {hint && <p className="font-body text-gray-500 text-xs mt-2">{hint}</p>}
    </div>
  )
}

const months = (n) => `${n} month${n === 1 ? '' : 's'}`

export default function InHouseVsOutsourced({ reps: startReps = 2, salary: startSalary = 60000, standalone = false, bg = 'bg-gray-50' }) {
  const [reps, setReps] = useState(startReps)
  const [salary, setSalary] = useState(startSalary)
  const [fee, setFee] = useState(4000)
  const [inRamp, setInRamp] = useState(4)
  const [outRamp, setOutRamp] = useState(1)

  // When it sits under the in-house calculator, follow its numbers.
  const r = standalone ? reps : startReps
  const s = standalone ? salary : startSalary

  const inHouse = inHousePerRep(s) * r
  const outsourced = fee * 12 * r
  const saving = inHouse - outsourced
  const inProductive = 12 - inRamp
  const outProductive = 12 - outRamp
  const inPerMonth = inProductive > 0 ? inHouse / inProductive : null
  const outPerMonth = outProductive > 0 ? outsourced / outProductive : null
  const inBeforePipeline = (inHouse / 12) * inRamp
  const outBeforePipeline = (outsourced / 12) * outRamp

  return (
    <section id="in-house-vs-outsourced-calculator" className={`py-16 px-6 ${bg}`}>
      <div className="max-w-5xl mx-auto">
        <span className="section-label mb-4 block" style={{ color: '#d8920e' }}>Free calculator</span>
        <h2 className="font-headline text-3xl font-black text-mc-teal mb-4">In-house vs outsourced: your year one</h2>
        <p className="font-body text-gray-700 leading-relaxed mb-10 max-w-3xl">
          Set your numbers and see what each route costs in the first twelve months, how long you pay before pipeline arrives, and what each productive month really costs you.
        </p>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            {standalone && (
              <>
                <Slider id="cmp-reps" label="Reps you would hire" value={reps} display={reps} min={1} max={10} step={1} onChange={setReps} />
                <Slider id="cmp-salary" label="Base salary per rep" value={salary} display={usd(salary)} min={30000} max={150000} step={5000} onChange={setSalary} />
              </>
            )}
            {!standalone && (
              <p className="font-body text-gray-500 text-sm mb-7">
                Using your numbers from above: {r} rep{r === 1 ? '' : 's'} at {usd(s)} base salary.
              </p>
            )}
            <Slider
              id="cmp-fee"
              label="Outsourced fee per rep, per month"
              value={fee}
              display={usd(fee)}
              min={2000}
              max={15000}
              step={250}
              onChange={setFee}
              hint="Outsourced sales retainers typically run $3,000 to $15,000 a month. Use a quote if you have one."
            />
            <Slider
              id="cmp-in-ramp"
              label="In-house: months before real pipeline"
              value={inRamp}
              display={months(inRamp)}
              min={1}
              max={9}
              step={1}
              onChange={setInRamp}
              hint="New sales hires usually take 3 to 6 months."
            />
            <Slider
              id="cmp-out-ramp"
              label="Outsourced: months before real pipeline"
              value={outRamp}
              display={months(outRamp)}
              min={0}
              max={4}
              step={1}
              onChange={setOutRamp}
              hint="A team that is already trained usually starts within weeks."
            />
          </div>

          <div>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="font-body text-gray-500 text-sm mb-2">In-house, year one</p>
                <p className="font-headline text-3xl font-black text-mc-teal leading-none">{usd(inHouse)}</p>
                <p className="font-body text-gray-500 text-xs mt-3">{usd(inBeforePipeline)} spent before pipeline</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6">
                <p className="font-body text-gray-500 text-sm mb-2">Outsourced, year one</p>
                <p className="font-headline text-3xl font-black text-mc-teal leading-none">{usd(outsourced)}</p>
                <p className="font-body text-gray-500 text-xs mt-3">{usd(outBeforePipeline)} spent before pipeline</p>
              </div>
            </div>

            <div className="bg-mc-dark rounded-2xl p-8 mb-4">
              <p className="font-body text-gray-400 text-sm mb-2">
                {saving >= 0 ? 'Outsourcing costs less by' : 'In-house costs less by'}
              </p>
              <p className="font-headline text-5xl font-black text-mc-gold leading-none mb-6">{usd(Math.abs(saving))}</p>
              <div className="border-t border-white/10 pt-5 grid grid-cols-2 gap-4">
                <div>
                  <p className="font-body text-gray-400 text-xs mb-1">Cost per productive month, in-house</p>
                  <p className="font-headline text-xl font-black text-white">{inPerMonth === null ? 'n/a' : usd(inPerMonth)}</p>
                  <p className="font-body text-gray-500 text-xs mt-1">{months(Math.max(inProductive, 0))} producing</p>
                </div>
                <div>
                  <p className="font-body text-gray-400 text-xs mb-1">Cost per productive month, outsourced</p>
                  <p className="font-headline text-xl font-black text-white">{outPerMonth === null ? 'n/a' : usd(outPerMonth)}</p>
                  <p className="font-body text-gray-500 text-xs mt-1">{months(Math.max(outProductive, 0))} producing</p>
                </div>
              </div>
            </div>

            <p className="font-body text-gray-500 text-xs leading-relaxed mb-6">
              In-house uses the fully loaded cost on the{' '}
              <Link to="/cost-of-building-a-sales-team" className="text-mc-gold hover:underline">sales team cost calculator</Link>
              : salary, taxes and benefits, tools, onboarding, management time and recruiting. The outsourced fee is assumed to cover the reps&apos; tools, data and management; if a provider charges for those separately, add them to the fee. A planning figure, not a quote.
            </p>

            <Link to="/calender" className="btn-primary inline-block">Talk through your numbers on a call</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
