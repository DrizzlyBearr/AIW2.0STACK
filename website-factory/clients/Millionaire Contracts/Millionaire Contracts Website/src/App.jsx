import { Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { startClickTracking, trackView } from './lib/track'
import { page } from './lib/page'
const NewsletterArchive = page(() => import('./pages/NewsletterArchive'))
import { articlePages, issuePages } from './lib/contentPages'
const Home = page(() => import('./pages/Home'))
const Services = page(() => import('./pages/Services'))
const Portfolio = page(() => import('./pages/Portfolio'))
const AboutUs = page(() => import('./pages/AboutUs'))
const Contact = page(() => import('./pages/Contact'))
const GetAPlan = page(() => import('./pages/GetAPlan'))
const Calendar = page(() => import('./pages/Calendar'))
const SalesStrategy = page(() => import('./pages/SalesStrategy'))
const SalesManagement = page(() => import('./pages/SalesManagement'))
const SalesClosing = page(() => import('./pages/SalesClosing'))
const AppointmentSetting = page(() => import('./pages/AppointmentSetting'))
const CaseStudy = page(() => import('./pages/CaseStudy'))
const Comparison = page(() => import('./pages/Comparison'))
const SalesTeamCostCalculator = page(() => import('./pages/SalesTeamCostCalculator'))
const NotFound = page(() => import('./pages/NotFound'))
const HowItWorks = page(() => import('./pages/HowItWorks'))
const Resources = page(() => import('./pages/Resources'))
const HowToChooseAppointmentSetting = page(() => import('./pages/articles/HowToChooseAppointmentSetting'))
const WhatDoesOutsourcedSalesCost = page(() => import('./pages/articles/WhatDoesOutsourcedSalesCost'))
const FiveSignsYouNeedOutsourcedSales = page(() => import('./pages/articles/FiveSignsYouNeedOutsourcedSales'))
const WhySalesOutsourcingFails = page(() => import('./pages/articles/WhySalesOutsourcingFails'))
const HowToBuildB2BSalesProcess = page(() => import('./pages/articles/HowToBuildB2BSalesProcess'))
const WhatIsSalesOutsourcing = page(() => import('./pages/articles/WhatIsSalesOutsourcing'))
const PipelineEmptiesWhenBusy = page(() => import('./pages/articles/PipelineEmptiesWhenBusy'))
const FounderLedSalesStopsWorking = page(() => import('./pages/articles/FounderLedSalesStopsWorking'))
const InconsistentRevenue = page(() => import('./pages/articles/InconsistentRevenue'))
const SalesStallWithoutYou = page(() => import('./pages/articles/SalesStallWithoutYou'))
const SaaSTechnology = page(() => import('./pages/SaaSTechnology'))
const ProfessionalServices = page(() => import('./pages/ProfessionalServices'))
const LawFirms = page(() => import('./pages/LawFirms'))
const PrivateEquity = page(() => import('./pages/PrivateEquity'))
const MarketingAgencies = page(() => import('./pages/MarketingAgencies'))
const FinancialServices = page(() => import('./pages/FinancialServices'))
const Healthcare = page(() => import('./pages/Healthcare'))
const PipelineAndPower = page(() => import('./pages/PipelineAndPower'))
const NewsletterConfirm = page(() => import('./pages/NewsletterConfirm'))
const NewsletterUnsubscribe = page(() => import('./pages/NewsletterUnsubscribe'))
const WhatIsAnSDR = page(() => import('./pages/articles/WhatIsAnSDR'))
const SDRvsBDR = page(() => import('./pages/articles/SDRvsBDR'))
const HowMuchDoesAnSDRCost = page(() => import('./pages/articles/HowMuchDoesAnSDRCost'))
const B2BAppointmentSettingServices = page(() => import('./pages/articles/B2BAppointmentSettingServices'))
const FractionalSalesTeam = page(() => import('./pages/articles/FractionalSalesTeam'))
const HowToWriteAColdEmail = page(() => import('./pages/articles/HowToWriteAColdEmail'))
const LeadQualificationFramework = page(() => import('./pages/articles/LeadQualificationFramework'))
const HowToBuildASalesCadence = page(() => import('./pages/articles/HowToBuildASalesCadence'))
const HowToWriteSalesScripts = page(() => import('./pages/articles/HowToWriteSalesScripts'))
const HowToQualifyLeads = page(() => import('./pages/articles/HowToQualifyLeads'))
const HowToSetUpASalesPipeline = page(() => import('./pages/articles/HowToSetUpASalesPipeline'))
const WebsiteThatQualifiesLeads = page(() => import('./pages/articles/WebsiteThatQualifiesLeads'))
const WhatIsASalesPipeline = page(() => import('./pages/articles/WhatIsASalesPipeline'))
const SalesAsAService = page(() => import('./pages/articles/SalesAsAService'))
const ColdCallingServices = page(() => import('./pages/articles/ColdCallingServices'))
const LeadGenerationVsAppointmentSetting = page(() => import('./pages/articles/LeadGenerationVsAppointmentSetting'))
const CommissionOnlySalesReps = page(() => import('./pages/articles/CommissionOnlySalesReps'))

// Which page a link leads to, so hovering it can fetch that page's code.
const BY_PATH = {
  '/': Home,
  '/services': Services,
  '/portfolio': Portfolio,
  '/about-us': AboutUs,
  '/contact-us': Contact,
  '/get-a-plan': GetAPlan,
  '/calender': Calendar,
  '/sales-strategy-development': SalesStrategy,
  '/sales-management': SalesManagement,
  '/sales-closing': SalesClosing,
  '/appointment-setting': AppointmentSetting,
  '/how-it-works': HowItWorks,
  '/resources': Resources,
  '/how-to-choose-an-appointment-setting-company': HowToChooseAppointmentSetting,
  '/what-does-outsourced-sales-cost': WhatDoesOutsourcedSalesCost,
  '/five-signs-you-need-outsourced-sales': FiveSignsYouNeedOutsourcedSales,
  '/why-sales-outsourcing-partnerships-fail': WhySalesOutsourcingFails,
  '/how-to-build-a-b2b-sales-process': HowToBuildB2BSalesProcess,
  '/what-is-sales-outsourcing': WhatIsSalesOutsourcing,
  '/why-your-pipeline-empties-when-you-get-busy': PipelineEmptiesWhenBusy,
  '/founder-led-sales-stops-working': FounderLedSalesStopsWorking,
  '/inconsistent-revenue': InconsistentRevenue,
  '/sales-stall-without-you': SalesStallWithoutYou,
  '/outsourced-sales-for-saas': SaaSTechnology,
  '/outsourced-sales-for-professional-services': ProfessionalServices,
  '/outsourced-sales-for-law-firms': LawFirms,
  '/outsourced-sales-for-private-equity': PrivateEquity,
  '/outsourced-sales-for-marketing-agencies': MarketingAgencies,
  '/outsourced-sales-for-financial-services': FinancialServices,
  '/outsourced-sales-for-healthcare': Healthcare,
  '/pipeline-and-power': PipelineAndPower,
  '/newsletter-confirm': NewsletterConfirm,
  '/newsletter-unsubscribe': NewsletterUnsubscribe,
  '/in-house-vs-outsourced-sales': Comparison,
  '/cost-of-building-a-sales-team': SalesTeamCostCalculator,
  '/what-is-an-sdr': WhatIsAnSDR,
  '/sdr-vs-bdr': SDRvsBDR,
  '/how-much-does-an-sdr-cost': HowMuchDoesAnSDRCost,
  '/b2b-appointment-setting-services': B2BAppointmentSettingServices,
  '/fractional-sales-team': FractionalSalesTeam,
  '/how-to-write-a-cold-email': HowToWriteAColdEmail,
  '/lead-qualification-framework': LeadQualificationFramework,
  '/how-to-build-a-sales-cadence': HowToBuildASalesCadence,
  '/how-to-write-sales-scripts': HowToWriteSalesScripts,
  '/how-to-qualify-leads': HowToQualifyLeads,
  '/how-to-set-up-a-sales-pipeline': HowToSetUpASalesPipeline,
  '/website-that-qualifies-leads': WebsiteThatQualifiesLeads,
  '/what-is-a-sales-pipeline': WhatIsASalesPipeline,
  '/sales-as-a-service': SalesAsAService,
  '/cold-calling-services': ColdCallingServices,
  '/lead-generation-vs-appointment-setting': LeadGenerationVsAppointmentSetting,
  '/commission-only-sales-reps': CommissionOnlySalesReps,
  '/newsletter': NewsletterArchive,
}

for (const { slug, Page } of articlePages) BY_PATH[`/${slug}`] = Page
for (const { slug, Page } of issuePages) BY_PATH[`/newsletter/${slug}`] = Page

export const preloadPath = (path) => (BY_PATH[path] || CaseStudy).preload()

export default function App() {
  const location = useLocation()
  // Fetch a page's code when a link to it is hovered or touched, so the click
  // that follows does not wait for it.
  useEffect(() => {
    const ahead = (e) => {
      const a = e.target instanceof Element ? e.target.closest('a[href^="/"]') : null
      if (!a) return
      const path = a.getAttribute('href').split(/[?#]/)[0]
      if (path && path !== window.location.pathname) preloadPath(path).catch(() => {})
    }
    document.addEventListener('pointerover', ahead, { passive: true })
    document.addEventListener('touchstart', ahead, { passive: true })
    return () => {
      document.removeEventListener('pointerover', ahead)
      document.removeEventListener('touchstart', ahead)
    }
  }, [])
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
    startClickTracking()
    trackView(location.pathname)
  }, [location])

  return (
    <div key={location.pathname} className="page-fade">
      {/* Each page's code arrives on its own. On first load the prerendered
          page stays on screen while it does; between pages nothing waits
          long, because links fetch their page's code on hover. */}
      <Suspense fallback={null}>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/get-a-plan" element={<GetAPlan />} />
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
        <Route path="/outsourced-sales-for-law-firms" element={<LawFirms />} />
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
        {articlePages.map(({ slug, Page }) => (
          <Route key={slug} path={`/${slug}`} element={<Page />} />
        ))}
        <Route path="/newsletter" element={<NewsletterArchive />} />
        {issuePages.map(({ slug, Page }) => (
          <Route key={slug} path={`/newsletter/${slug}`} element={<Page />} />
        ))}
        <Route path="/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
    </div>
  )
}
