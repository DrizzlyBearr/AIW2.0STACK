import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SEOMeta from '../components/SEOMeta'

const FN_BASE = 'https://yhktwznlnfzcfzrmpniv.supabase.co/functions/v1'

export default function NewsletterUnsubscribe() {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState('confirm')
  const [message, setMessage] = useState('')

  async function handleUnsubscribe() {
    const token = searchParams.get('token')
    if (!token) {
      setStatus('error')
      setMessage('Invalid unsubscribe link. Please check the link in your email.')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch(`${FN_BASE}/newsletter-unsubscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setMessage(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEOMeta
        title="Unsubscribe"
        description="Unsubscribe from Pipeline & Power by Millionaire Contracts."
        path="/newsletter-unsubscribe"
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
          {status === 'confirm' && (
            <>
              <h1 className="font-headline text-3xl font-black text-white mb-4">Unsubscribe from Pipeline &amp; Power?</h1>
              <p className="font-body text-gray-400 leading-relaxed mb-8">
                You will stop receiving fortnightly issues. You can always resubscribe at any time.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleUnsubscribe}
                  className="font-headline font-bold text-white border border-white/20 rounded-lg px-6 py-3 text-sm hover:border-red-400/50 hover:text-red-400 transition-colors"
                >
                  Yes, unsubscribe me
                </button>
                <Link to="/pipeline-and-power" className="btn-primary text-sm text-center">
                  Keep my subscription
                </Link>
              </div>
            </>
          )}

          {status === 'loading' && (
            <>
              <div className="w-12 h-12 rounded-full border-2 border-mc-gold border-t-transparent animate-spin mx-auto mb-6" />
              <p className="font-body text-gray-400">Processing...</p>
            </>
          )}

          {status === 'success' && (
            <>
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="font-headline text-3xl font-black text-white mb-4">You have been unsubscribed</h1>
              <p className="font-body text-gray-400 leading-relaxed mb-8">
                You will not receive any more issues of Pipeline &amp; Power. If you change your mind, you can always resubscribe.
              </p>
              <Link to="/pipeline-and-power" className="btn-primary">Back to Pipeline &amp; Power</Link>
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
