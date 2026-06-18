import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Calendar from './pages/Calendar'
import SalesStrategy from './pages/SalesStrategy'
import SalesManagement from './pages/SalesManagement'
import SalesClosing from './pages/SalesClosing'
import AppointmentSetting from './pages/AppointmentSetting'
import CaseStudy from './pages/CaseStudy'
import Comparison from './pages/Comparison'
import SalesTeamCostCalculator from './pages/SalesTeamCostCalculator'
import NotFound from './pages/NotFound'
import HowItWorks from './pages/HowItWorks'
import Resources from './pages/Resources'
import HowToChooseAppointmentSetting from './pages/articles/HowToChooseAppointmentSetting'
import WhatDoesOutsourcedSalesCost from './pages/articles/WhatDoesOutsourcedSalesCost'
import FiveSignsYouNeedOutsourcedSales from './pages/articles/FiveSignsYouNeedOutsourcedSales'
import WhySalesOutsourcingFails from './pages/articles/WhySalesOutsourcingFails'
import HowToBuildB2BSalesProcess from './pages/articles/HowToBuildB2BSalesProcess'
import WhatIsSalesOutsourcing from './pages/articles/WhatIsSalesOutsourcing'
import PipelineEmptiesWhenBusy from './pages/articles/PipelineEmptiesWhenBusy'
import FounderLedSalesStopsWorking from './pages/articles/FounderLedSalesStopsWorking'
import InconsistentRevenue from './pages/articles/InconsistentRevenue'
import SalesStallWithoutYou from './pages/articles/SalesStallWithoutYou'
import SaaSTechnology from './pages/SaaSTechnology'
import ProfessionalServices from './pages/ProfessionalServices'
import PrivateEquity from './pages/PrivateEquity'
import MarketingAgencies from './pages/MarketingAgencies'

function RouteTracker() {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: location.pathname + location.search })
    }
  }, [location])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteTracker />
      <Routes>
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
        <Route path="/in-house-vs-outsourced-sales" element={<Comparison />} />
        <Route path="/cost-of-building-a-sales-team" element={<SalesTeamCostCalculator />} />
        <Route path="/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
