// What an in-house sales hire costs on top of salary, per rep, in year one.
// Shared by the in-house calculator and the in-house vs outsourced
// comparison, so the two can never quote different numbers for the same hire.
// Shown in full on the page, so the result reads as a planning estimate and
// not a quote.
export const ASSUMPTIONS = [
  { key: 'benefits', label: 'Payroll taxes and benefits', kind: 'rate', value: 0.3, note: '30% of base salary' },
  { key: 'tools', label: 'Sales tools and software', kind: 'flat', value: 9000, note: 'CRM, dialler, data, enrichment' },
  { key: 'onboarding', label: 'Onboarding and training', kind: 'flat', value: 7500, note: 'Ramp materials, enablement, lost productivity' },
  { key: 'management', label: 'Management time', kind: 'flat', value: 11000, note: 'Coaching, pipeline reviews, reporting' },
  { key: 'recruiting', label: 'Recruiting and hiring', kind: 'flat', value: 10000, note: 'Sourcing, interviewing, agency fees' },
]

// Midpoint of the 3 to 6 months a new hire takes to produce real pipeline.
export const RAMP_MONTHS = 4

export const extrasFor = (salary) =>
  ASSUMPTIONS.reduce((sum, a) => sum + (a.kind === 'rate' ? salary * a.value : a.value), 0)

export const inHousePerRep = (salary) => salary + extrasFor(salary)

export const usd = (n) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(Math.round(n))
