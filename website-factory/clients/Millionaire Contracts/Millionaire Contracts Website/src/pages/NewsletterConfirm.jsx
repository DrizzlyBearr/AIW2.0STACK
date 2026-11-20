import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'
import { NEWSLETTER } from '../lib/newsletter'
import { LEAD_MAGNET } from '../lib/leadMagnet'


export default function NewsletterConfirm() {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const token = searchParams.get('token')
    if (!token) {
      setStatus('error')
      setMessage('No confirmation token found. Please check the link in your email.')
      return
    }

    fetch(NEWSLETTER.confirm, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token }),
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.ok) {
          setStatus('success')
        } else {
          setStatus('error')
          setMessage(data.error || 'Something went wrong. Please try again.')
        }
      })
      .catch(() => {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      })
  }, [searchParams])

  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Confirm Subscription"
        description="Confirm your subscription to Pipeline & Power by Millionaire Contracts."
        path="/newsletter-confirm"
      />
      <Navbar />

      <section className="flex-grow bg-mc-dark flex items-center justify-center px-6 py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#d8920e 1px, transparent 1px), linear-gradient(90deg, #d8920e 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-md w-full text-center">
          {status === 'loading' && (
            <>
              <div className="w-12 h-12 rounded-full border-2 border-mc-gold border-t-transparent animate-spin mx-auto mb-6" />
              <p className="font-body text-gray-400">Confirming your subscription...</p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="w-16 h-16 rounded-full bg-mc-gold/10 border border-mc-gold/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-mc-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="font-headline text-3xl font-black text-white mb-4">You're in. Day 1 is on its way</h1>
              <p className="font-body text-gray-400 leading-relaxed mb-8">
                Day 1 of Beyond Referrals lands in your inbox in the next few minutes, then one lesson a day. While you wait, here are the 7 messages we use to book meetings, they come up again on day 3
              </p>
              <a
                href={LEAD_MAGNET.pdf}
                download
                onClick={() => window.gtag && window.gtag('event', 'file_download', { file_name: '7-messages' })}
                className="btn-primary inline-block mb-6"
              >
                Download {LEAD_MAGNET.title}
              </a>
              <p className="font-body text-sm text-gray-500">
                Want us to write these for your business? <Link to="/get-a-plan" className="text-mc-gold underline underline-offset-2">Get a free plan</Link>
              </p>
            </>
          )}

          {status === 'error' && (
            <>
              <div className="w-16 h-16 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="font-headline text-3xl font-black text-white mb-4">Something went wrong</h1>
              <p className="font-body text-gray-400 leading-relaxed mb-8">{message}</p>
              <Link to="/pipeline-and-power" className="btn-primary">Back to Pipeline &amp; Power</Link>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
