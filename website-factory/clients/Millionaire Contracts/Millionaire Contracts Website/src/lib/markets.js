// The markets the site's forms ask about, and the bands shown in each
// market's own currency. Shared by the qualifier and the plan form.

// Country -> currency. The market chosen decides which currency the
// deal-value and budget bands are shown in. We never convert between them.
export const MARKETS = [
  { code: 'US', label: 'United States', currency: 'USD' },
  { code: 'GB', label: 'United Kingdom', currency: 'GBP' },
  { code: 'CA', label: 'Canada', currency: 'CAD' },
  { code: 'AU', label: 'Australia', currency: 'AUD' },
  { code: 'DE', label: 'Germany', currency: 'EUR' },
  { code: 'ZA', label: 'South Africa', currency: 'ZAR' },
  { code: 'OTHER', label: 'Somewhere else', currency: 'USD' },
]

export const BANDS = {
  USD: {
    deal: ['Under $1,000', '$1,000 to $5,000', '$5,000 to $25,000', '$25,000 to $100,000', 'More than $100,000'],
    budget: ['Under $5,000', '$5,000 to $15,000', '$15,000 to $50,000', 'More than $50,000'],
  },
  GBP: {
    deal: ['Under £1,000', '£1,000 to £5,000', '£5,000 to £20,000', '£20,000 to £80,000', 'More than £80,000'],
    budget: ['Under £4,000', '£4,000 to £12,000', '£12,000 to £40,000', 'More than £40,000'],
  },
  CAD: {
    deal: ['Under C$1,000', 'C$1,000 to C$6,000', 'C$6,000 to C$30,000', 'C$30,000 to C$120,000', 'More than C$120,000'],
    budget: ['Under C$6,000', 'C$6,000 to C$18,000', 'C$18,000 to C$60,000', 'More than C$60,000'],
  },
  AUD: {
    deal: ['Under A$1,000', 'A$1,000 to A$6,000', 'A$6,000 to A$30,000', 'A$30,000 to A$120,000', 'More than A$120,000'],
    budget: ['Under A$6,000', 'A$6,000 to A$18,000', 'A$18,000 to A$60,000', 'More than A$60,000'],
  },
  EUR: {
    deal: ['Under €1,000', '€1,000 to €5,000', '€5,000 to €25,000', '€25,000 to €90,000', 'More than €90,000'],
    budget: ['Under €5,000', '€5,000 to €14,000', '€14,000 to €45,000', 'More than €45,000'],
  },
  ZAR: {
    deal: ['Under R15,000', 'R15,000 to R80,000', 'R80,000 to R400,000', 'R400,000 to R1.5m', 'More than R1.5m'],
    budget: ['Under R80,000', 'R80,000 to R250,000', 'R250,000 to R800,000', 'More than R800,000'],
  },
}
