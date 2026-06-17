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
import NotFound from './pages/NotFound'
import HowItWorks from './pages/HowItWorks'
import HowToChooseAppointmentSetting from './pages/articles/HowToChooseAppointmentSetting'
import WhatDoesOutsourcedSalesCost from './pages/articles/WhatDoesOutsourcedSalesCost'
import FiveSignsYouNeedOutsourcedSales from './pages/articles/FiveSignsYouNeedOutsourcedSales'

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
        <Route path="/how-to-choose-an-appointment-setting-company" element={<HowToChooseAppointmentSetting />} />
        <Route path="/what-does-outsourced-sales-cost" element={<WhatDoesOutsourcedSalesCost />} />
        <Route path="/five-signs-you-need-outsourced-sales" element={<FiveSignsYouNeedOutsourcedSales />} />
        <Route path="/in-house-vs-outsourced-sales" element={<Comparison />} />
        <Route path="/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
