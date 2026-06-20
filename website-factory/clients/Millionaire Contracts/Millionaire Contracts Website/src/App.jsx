import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

// Home is eager — it must paint immediately on first load
// All other pages are lazy — they only download when visited
const Portfolio = lazy(() => import('./pages/Portfolio'))
const AboutUs = lazy(() => import('./pages/AboutUs'))
const Contact = lazy(() => import('./pages/Contact'))
const Calendar = lazy(() => import('./pages/Calendar'))
const SalesStrategy = lazy(() => import('./pages/SalesStrategy'))
const SalesManagement = lazy(() => import('./pages/SalesManagement'))
const SalesClosing = lazy(() => import('./pages/SalesClosing'))
const AppointmentSetting = lazy(() => import('./pages/AppointmentSetting'))
const CaseStudy = lazy(() => import('./pages/CaseStudy'))
const Comparison = lazy(() => import('./pages/Comparison'))
const SalesTeamCostCalculator = lazy(() => import('./pages/SalesTeamCostCalculator'))
const NotFound = lazy(() => import('./pages/NotFound'))
const HowItWorks = lazy(() => import('./pages/HowItWorks'))
const Resources = lazy(() => import('./pages/Resources'))
const HowToChooseAppointmentSetting = lazy(() => import('./pages/articles/HowToChooseAppointmentSetting'))
const WhatDoesOutsourcedSalesCost = lazy(() => import('./pages/articles/WhatDoesOutsourcedSalesCost'))
const FiveSignsYouNeedOutsourcedSales = lazy(() => import('./pages/articles/FiveSignsYouNeedOutsourcedSales'))
const WhySalesOutsourcingFails = lazy(() => import('./pages/articles/WhySalesOutsourcingFails'))
const HowToBuildB2BSalesProcess = lazy(() => import('./pages/articles/HowToBuildB2BSalesProcess'))
const WhatIsSalesOutsourcing = lazy(() => import('./pages/articles/WhatIsSalesOutsourcing'))
const PipelineEmptiesWhenBusy = lazy(() => import('./pages/articles/PipelineEmptiesWhenBusy'))
const FounderLedSalesStopsWorking = lazy(() => import('./pages/articles/FounderLedSalesStopsWorking'))
const InconsistentRevenue = lazy(() => import('./pages/articles/InconsistentRevenue'))
const SalesStallWithoutYou = lazy(() => import('./pages/articles/SalesStallWithoutYou'))
const SaaSTechnology = lazy(() => import('./pages/SaaSTechnology'))
const ProfessionalServices = lazy(() => import('./pages/ProfessionalServices'))
const PrivateEquity = lazy(() => import('./pages/PrivateEquity'))
const MarketingAgencies = lazy(() => import('./pages/MarketingAgencies'))
const FinancialServices = lazy(() => import('./pages/FinancialServices'))
const Healthcare = lazy(() => import('./pages/Healthcare'))
const PipelineAndPower = lazy(() => import('./pages/PipelineAndPower'))
const NewsletterConfirm = lazy(() => import('./pages/NewsletterConfirm'))
const NewsletterUnsubscribe = lazy(() => import('./pages/NewsletterUnsubscribe'))

function PageShell() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
    </div>
  )
}

function AnimatedRoutes() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: location.pathname + location.search })
    }
  }, [location])
  return (
    <Suspense fallback={<PageShell />}>
      <div key={location.pathname} className="page-fade">
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/calender" element={<Calendar />} />
          <Route path="/sales-strategy-development" element={<SalesStrategy />} />
          <Route path="/sales-management" element={<SalesManagement />} />
          <Route path="/sales-closing" element={<SalesClosing />} />
          <Route path="/appointment-setting" element={<AppointmentSetting />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/how-to-choose-an-appointment-setting-company" element={<HowToChooseAppointmentSetting />} />
          <Route path="/what-does-outsourced-sales-cost" element={<WhatDoesOutsourcedSalesCost />} />
          <Route path="/five-signs-you-need-outsourced-sales" element={<FiveSignsYouNeedOutsourcedSales />} />
          <Route path="/why-sales-outsourcing-partnerships-fail" element={<WhySalesOutsourcingFails />} />
          <Route path="/how-to-build-a-b2b-sales-process" element={<HowToBuildB2BSalesProcess />} />
          <Route path="/what-is-sales-outsourcing" element={<WhatIsSalesOutsourcing />} />
          <Route path="/why-your-pipeline-empties-when-you-get-busy" element={<PipelineEmptiesWhenBusy />} />
          <Route path="/founder-led-sales-stops-working" element={<FounderLedSalesStopsWorking />} />
          <Route path="/inconsistent-revenue" element={<InconsistentRevenue />} />
          <Route path="/sales-stall-without-you" element={<SalesStallWithoutYou />} />
          <Route path="/outsourced-sales-for-saas" element={<SaaSTechnology />} />
          <Route path="/outsourced-sales-for-professional-services" element={<ProfessionalServices />} />
          <Route path="/outsourced-sales-for-private-equity" element={<PrivateEquity />} />
          <Route path="/outsourced-sales-for-marketing-agencies" element={<MarketingAgencies />} />
          <Route path="/outsourced-sales-for-financial-services" element={<FinancialServices />} />
          <Route path="/outsourced-sales-for-healthcare" element={<Healthcare />} />
          <Route path="/pipeline-and-power" element={<PipelineAndPower />} />
          <Route path="/newsletter-confirm" element={<NewsletterConfirm />} />
          <Route path="/newsletter-unsubscribe" element={<NewsletterUnsubscribe />} />
          <Route path="/in-house-vs-outsourced-sales" element={<Comparison />} />
          <Route path="/cost-of-building-a-sales-team" element={<SalesTeamCostCalculator />} />
          <Route path="/:slug" element={<CaseStudy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Suspense>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  )
}
