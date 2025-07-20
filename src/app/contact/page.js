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
    <div className={`min-h-screen py-16 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-deep-brown mb-6">
            {t('contactTitle')}
          </h1>
          <p className={`text-lg text-gray-700 max-w-2xl mx-auto ${isRTL ? 'text-right' : 'text-left'}`}>
            {t('contactDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg card-shadow">
            <h2 className="text-2xl font-bold text-deep-brown mb-6">{t('sendMessage')}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-brown focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-brown focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-brown focus:border-transparent"
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
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deep-brown focus:border-transparent"
                  placeholder={t('messagePlaceholder')}
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary">
                {t('sendMessageButton')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg card-shadow">
              <h3 className="text-xl font-bold text-deep-brown mb-4">
                {t('commissionWork')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('commissionText1')}
              </p>
              <ul className={`space-y-2 text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                <li>• {t('portraitPaintings')}</li>
                <li>• {t('customLandscapes')}</li>
                <li>• {t('memorialArt')}</li>
                <li>• {t('corporateArt')}</li>
              </ul>
              <p className="text-sm text-gray-600 mt-4">
                {t('commissionTimeline')}
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg card-shadow">
              <h3 className="text-xl font-bold text-deep-brown mb-4">
                {t('artworkPurchases')}
              </h3>
              <p className="text-gray-700 mb-4">
                {t('purchaseText')}
              </p>
              <ul className={`space-y-2 text-gray-700 ${isRTL ? 'text-right' : 'text-left'}`}>
                <li>• {t('certificate')}</li>
                <li>• {t('packaging')}</li>
                <li>• {t('careInstructions')}</li>
                <li>• {t('artistStatement')}</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-art-gold to-yellow-500 p-8 rounded-lg text-white">
              <h3 className="text-xl font-bold mb-4">
                {t('responseTime')}
              </h3>
              <p className="mb-4">
                {t('responseText')}
              </p>
              <p className="text-sm opacity-90">
                {t('thankYou')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 