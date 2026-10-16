import { business } from './content'

export function waLink(message) {
  return `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`
}

export const defaultMessage = 'Hello Gogo Thudi, I found you on your website and would like to book a consultation.'
