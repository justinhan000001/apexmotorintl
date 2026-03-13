import { useTranslations } from 'next-intl'
import Bi from '@/components/Bi'
import Link from 'next/link'

export default function StoragePage() {
  return (
    <div className="pt-16">
      <section className="section-padding bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">
              <Bi en="Motorcycle Storage" zh="摩托车寄存" />
            </h1>
            <p className="text-xl text-brand-dark">
              <Bi en="Secure storage solutions for your motorcycle" zh="为您的摩托车提供安全寄存解决方案" />
            </p>
          </div>

          {/* Storage Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Basic Storage */}
            <div className="card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Basic Storage" zh="基础寄存" />
              </h3>
              <div className="text-3xl font-bold text-brand-accent mb-4">$xxx/mo</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Indoor storage" zh="室内寄存" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Basic security" zh="基础安全" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Monthly access" zh="月度访问" />
                </li>
              </ul>
              <Link href="/booking" className="btn-primary w-full">
                <Bi en="Book Storage" zh="预约寄存" />
              </Link>
            </div>

            {/* Plus Storage */}
            <div className="card border-brand-accent">
              <div className="bg-brand-accent text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                <Bi en="Popular" zh="热门" />
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Plus Storage" zh="升级寄存" />
              </h3>
              <div className="text-3xl font-bold text-brand-accent mb-4">$xxx/mo</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Enhanced security" zh="增强安全" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Regular checks" zh="定期检查" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Weekly access" zh="周度访问" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Battery maintenance" zh="电池维护" />
                </li>
              </ul>
              <Link href="/booking" className="btn-primary w-full">
                <Bi en="Book Storage" zh="预约寄存" />
              </Link>
            </div>

            {/* Pro Storage */}
            <div className="card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Pro Storage" zh="专业寄存" />
              </h3>
              <div className="text-3xl font-bold text-brand-accent mb-4">$xxx/mo</div>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Premium security" zh="高级安全" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Maintenance included" zh="包含维护" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Daily access" zh="日常访问" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Priority service" zh="优先服务" />
                </li>
              </ul>
              <Link href="/booking" className="btn-primary w-full">
                <Bi en="Book Storage" zh="预约寄存" />
              </Link>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="card">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">
              <Bi en="Storage Terms" zh="寄存条款" />
            </h2>
            <div className="space-y-4 text-brand-dark">
              <p>
                <Bi en="Storage terms and lien notices: To be refined" zh="寄存条款和留置权通知: 后续完善" />
              </p>
              <p>
                <Bi en="All storage services include basic insurance coverage. Additional coverage available upon request." zh="所有寄存服务包含基本保险覆盖。可根据要求提供额外覆盖。" />
              </p>
              <p>
                <Bi en="Monthly billing cycle. Long-term storage discounts available for 6+ month commitments." zh="月度计费周期。6个月以上承诺可享受长期寄存折扣。" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
