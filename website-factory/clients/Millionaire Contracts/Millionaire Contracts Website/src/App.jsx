import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Calendar from './pages/Calendar'
import SalesStrategy from './pages/SalesStrategy'
import SalesManagement from './pages/SalesManagement'
import SalesClosing from './pages/SalesClosing'
import AppointmentSetting from './pages/AppointmentSetting'
import KpgMtn from './pages/portfolio/KpgMtn'
import BasehomeCapital from './pages/portfolio/BasehomeCapital'

export default function App() {
  return (
    <BrowserRouter>
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
        <Route path="/kpg-mtn" element={<KpgMtn />} />
        <Route path="/basehome-capital" element={<BasehomeCapital />} />
      </Routes>
    </BrowserRouter>
  )
}
