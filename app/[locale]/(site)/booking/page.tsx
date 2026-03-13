'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import Bi from '@/components/Bi'

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bikeModel: '',
    issue: '',
    preferredTime: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const t = useTranslations('booking')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="pt-16">
        <section className="section-padding bg-brand-light">
          <div className="max-w-2xl mx-auto text-center">
            <div className="card">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold text-brand-dark mb-4">
                <Bi en="Booking Submitted!" zh="预约已提交！" />
              </h1>
              <p className="text-brand-dark mb-6">
                <Bi en={t('success')} zh={t('success')} />
              </p>
              <div className="bg-brand-accent/10 p-4 rounded-lg mb-6">
                <p className="text-brand-dark text-sm">
                  <Bi en="Deposit required: $xxx" zh="需要定金: $xxx" />
                </p>
              </div>
              <button 
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({ name: '', phone: '', bikeModel: '', issue: '', preferredTime: '' })
                }}
                className="btn-primary"
              >
                <Bi en="Book Another Service" zh="预约其他服务" />
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="pt-16">
      <section className="section-padding bg-brand-light">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              <Bi en={t('title')} zh={t('title')} />
            </h1>
            <p className="text-xl text-brand-dark">
              <Bi en="Schedule your motorcycle service appointment" zh="安排您的摩托车服务预约" />
            </p>
          </div>

          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-dark mb-2">
                  <Bi en={t('name')} zh={t('name')} /> *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-light border border-brand-dark rounded-lg text-brand-dark placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-brand-dark mb-2">
                  <Bi en={t('phone')} zh={t('phone')} /> *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-light border border-brand-dark rounded-lg text-brand-dark placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="bikeModel" className="block text-sm font-medium text-brand-dark mb-2">
                  <Bi en={t('bikeModel')} zh={t('bikeModel')} /> *
                </label>
                <input
                  type="text"
                  id="bikeModel"
                  name="bikeModel"
                  value={formData.bikeModel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-light border border-brand-dark rounded-lg text-brand-dark placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                  placeholder="e.g., Honda CBR600RR, Yamaha R1"
                />
              </div>

              <div>
                <label htmlFor="issue" className="block text-sm font-medium text-brand-dark mb-2">
                  <Bi en={t('issue')} zh={t('issue')} /> *
                </label>
                <textarea
                  id="issue"
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-brand-light border border-brand-dark rounded-lg text-brand-dark placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent resize-none"
                  placeholder="Describe the issue or service needed..."
                />
              </div>

              <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-brand-dark mb-2">
                  <Bi en={t('preferredTime')} zh={t('preferredTime')} />
                </label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-brand-light border border-brand-dark rounded-lg text-brand-dark focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent"
                >
                  <option value=""><Bi en="Select preferred time" zh="选择首选时间" /></option>
                  <option value="morning"><Bi en="Morning (9AM-12PM)" zh="上午 (9AM-12PM)" /></option>
                  <option value="afternoon"><Bi en="Afternoon (12PM-5PM)" zh="下午 (12PM-5PM)" /></option>
                  <option value="evening"><Bi en="Evening (5PM-7PM)" zh="晚上 (5PM-7PM)" /></option>
                  <option value="flexible"><Bi en="Flexible" zh="灵活安排" /></option>
                </select>
              </div>

              <div className="bg-brand-accent/10 p-4 rounded-lg">
                <p className="text-brand-dark text-sm">
                  <strong><Bi en="Note:" zh="注意:" /></strong> <Bi en="A deposit of $xxx may be required for certain services." zh="某些服务可能需要 $xxx 定金。" />
                </p>
              </div>

              <button
                type="submit"
                className="w-full btn-primary text-lg"
              >
                <Bi en={t('submit')} zh={t('submit')} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
