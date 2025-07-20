'use client'
import { useState } from 'react'
import { useLanguage } from '../../contexts/LanguageContext'

export default function Contact() {
  const { t, isRTL } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    alert(t('messageSuccess'))
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className={`min-h-screen py-20 ${isRTL ? 'rtl' : 'ltr'} bg-canvas-white/80`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-serif-art font-bold text-deep-brown mb-4 relative inline-block">
            <span className="relative z-10">{t('contactTitle')}</span>
            <span className="art-underline absolute left-0 right-0 bottom-0 w-full h-3" />
          </h1>
          <div className="art-divider" />
          <p className={`text-xl text-soft-brown max-w-2xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white/90 p-10 rounded-2xl card-shadow border-2 border-art-gold/20">
            <h2 className="text-3xl font-serif-art font-bold text-deep-brown mb-8">{t('sendMessage')}</h2>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-art-gold focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-art-gold focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('subject')}
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-art-gold focus:border-transparent"
                >
                  <option value="">{t('selectSubject')}</option>
                  <option value="general">{t('generalInquiry')}</option>
                  <option value="purchase">{t('purchaseInquiry')}</option>
                  <option value="commission">{t('commissionRequest')}</option>
                  <option value="exhibition">{t('exhibition')}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-art-gold focus:border-transparent"
                  placeholder={t('messagePlaceholder')}
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary">
                {t('sendMessageButton')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-10">
            <div className="bg-white/90 p-8 rounded-2xl card-shadow border border-art-gold/10">
              <h3 className="text-2xl font-serif-art font-bold text-deep-brown mb-4">
                {t('commissionWork')}
              </h3>
              <p className="text-soft-brown mb-4">
                {t('commissionText1')}
              </p>
              <ul className={`space-y-2 text-soft-brown ${isRTL ? 'text-right' : 'text-left'}`}>
                <li>• {t('portraitPaintings')}</li>
                <li>• {t('customLandscapes')}</li>
                <li>• {t('memorialArt')}</li>
                <li>• {t('corporateArt')}</li>
              </ul>
              <p className="text-sm text-deep-brown/70 mt-4">
                {t('commissionTimeline')}
              </p>
            </div>

            <div className="bg-white/90 p-8 rounded-2xl card-shadow border border-art-gold/10">
              <h3 className="text-2xl font-serif-art font-bold text-deep-brown mb-4">
                {t('artworkPurchases')}
              </h3>
              <p className="text-soft-brown mb-4">
                {t('purchaseText')}
              </p>
              <ul className={`space-y-2 text-soft-brown ${isRTL ? 'text-right' : 'text-left'}`}>
                <li>• {t('certificate')}</li>
                <li>• {t('packaging')}</li>
                <li>• {t('careInstructions')}</li>
                <li>• {t('artistStatement')}</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-art-gold to-yellow-500 p-8 rounded-2xl text-white shadow-lg">
              <h3 className="text-2xl font-serif-art font-bold mb-4">
                {t('responseTime')}
              </h3>
              <p className="mb-4">
                {t('responseText')}
              </p>
              <p className="text-base opacity-90">
                {t('thankYou')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 