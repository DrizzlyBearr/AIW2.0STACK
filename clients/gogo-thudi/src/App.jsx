import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MobileCtaBar from './components/MobileCtaBar'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import ReviewsPage from './pages/ReviewsPage'
import NotFoundPage from './pages/NotFoundPage'
import ServicesPage from './pages/ServicesPage'
import GuidePage from './pages/GuidePage'
import { matchRoute } from './routes'

export default function App({ path = '/' }) {
  const route = matchRoute(path)
  let page
  if (route.page === 'home') page = <HomePage />
  else if (route.page === 'services') page = <ServicesPage />
  else if (route.page === 'service') page = <ServicePage slug={route.slug} />
  else if (route.page === 'guide') page = <GuidePage slug={route.slug} />
  else if (route.page === 'reviews') page = <ReviewsPage />
  else page = <NotFoundPage />

  return (
    <div className="min-h-screen pb-16 md:pb-0" data-page-type={route.page}>
      <Navbar />
      <main>{page}</main>
      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </div>
  )
}
