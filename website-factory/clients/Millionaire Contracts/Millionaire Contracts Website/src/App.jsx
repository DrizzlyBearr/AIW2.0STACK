import { useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
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
import FinancialServices from './pages/FinancialServices'
import Healthcare from './pages/Healthcare'
import PipelineAndPower from './pages/PipelineAndPower'
import NewsletterConfirm from './pages/NewsletterConfirm'
import NewsletterUnsubscribe from './pages/NewsletterUnsubscribe'
import WhatIsAnSDR from './pages/articles/WhatIsAnSDR'
import SDRvsBDR from './pages/articles/SDRvsBDR'
import HowMuchDoesAnSDRCost from './pages/articles/HowMuchDoesAnSDRCost'
import B2BAppointmentSettingServices from './pages/articles/B2BAppointmentSettingServices'
import FractionalSalesTeam from './pages/articles/FractionalSalesTeam'
import HowToWriteAColdEmail from './pages/articles/HowToWriteAColdEmail'
import LeadQualificationFramework from './pages/articles/LeadQualificationFramework'
import HowToBuildASalesCadence from './pages/articles/HowToBuildASalesCadence'
import HowToWriteSalesScripts from './pages/articles/HowToWriteSalesScripts'
import HowToQualifyLeads from './pages/articles/HowToQualifyLeads'
import HowToSetUpASalesPipeline from './pages/articles/HowToSetUpASalesPipeline'
import WebsiteThatQualifiesLeads from './pages/articles/WebsiteThatQualifiesLeads'
import WhatIsASalesPipeline from './pages/articles/WhatIsASalesPipeline'
import SalesAsAService from './pages/articles/SalesAsAService'
import ColdCallingServices from './pages/articles/ColdCallingServices'
import LeadGenerationVsAppointmentSetting from './pages/articles/LeadGenerationVsAppointmentSetting'
import CommissionOnlySalesReps from './pages/articles/CommissionOnlySalesReps'

export default function App() {
  const location = useLocation()
  useEffect(() => {
    // Honor hash links (e.g. /services#outreach-engine). Retry briefly to
    // allow the target section to be in the DOM before scrolling.
    if (location.hash) {
      const id = location.hash.slice(1)
      let tries = 0
      const tryScroll = () => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        } else if (tries++ < 20) {
          setTimeout(tryScroll, 50)
        }
      }
      tryScroll()
    } else {
      window.scrollTo(0, 0)
    }
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: location.pathname + location.search })
    }
  }, [location])

  return (
    <div key={location.pathname} className="page-fade">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/services" element={<Services />} />
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
        <Route path="/what-is-an-sdr" element={<WhatIsAnSDR />} />
        <Route path="/sdr-vs-bdr" element={<SDRvsBDR />} />
        <Route path="/how-much-does-an-sdr-cost" element={<HowMuchDoesAnSDRCost />} />
        <Route path="/b2b-appointment-setting-services" element={<B2BAppointmentSettingServices />} />
        <Route path="/fractional-sales-team" element={<FractionalSalesTeam />} />
        <Route path="/how-to-write-a-cold-email" element={<HowToWriteAColdEmail />} />
        <Route path="/lead-qualification-framework" element={<LeadQualificationFramework />} />
        <Route path="/how-to-build-a-sales-cadence" element={<HowToBuildASalesCadence />} />
        <Route path="/how-to-write-sales-scripts" element={<HowToWriteSalesScripts />} />
        <Route path="/how-to-qualify-leads" element={<HowToQualifyLeads />} />
        <Route path="/how-to-set-up-a-sales-pipeline" element={<HowToSetUpASalesPipeline />} />
        <Route path="/website-that-qualifies-leads" element={<WebsiteThatQualifiesLeads />} />
        <Route path="/what-is-a-sales-pipeline" element={<WhatIsASalesPipeline />} />
        <Route path="/sales-as-a-service" element={<SalesAsAService />} />
        <Route path="/cold-calling-services" element={<ColdCallingServices />} />
        <Route path="/lead-generation-vs-appointment-setting" element={<LeadGenerationVsAppointmentSetting />} />
        <Route path="/commission-only-sales-reps" element={<CommissionOnlySalesReps />} />
        <Route path="/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
