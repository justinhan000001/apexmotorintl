import { useTranslations } from 'next-intl'
import Bi from '@/components/Bi'
import Link from 'next/link'

export default function PricingPage() {
  const t = useTranslations('pricing')

  return (
    <div className="pt-16">
      <section className="section-padding bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">
              <Bi en={t('title')} zh={t('title')} />
            </h1>
            <div className="bg-brand-accent/10 p-6 rounded-lg mb-8">
              <p className="text-lg text-brand-dark">
                <Bi en={t('note')} zh={t('note')} />
              </p>
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Basic Services */}
            <div className="card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Basic Services" zh="基础服务" />
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between items-center">
                  <span className="text-brand-dark">
                    <Bi en="Oil Change" zh="换油" />
                  </span>
                  <span className="font-semibold text-brand-accent">$xxx</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-brand-dark">
                    <Bi en="Brake Inspection" zh="刹车检查" />
                  </span>
                  <span className="font-semibold text-brand-accent">$xxx</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-brand-dark">
                    <Bi en="Chain Adjustment" zh="链条调整" />
                  </span>
                  <span className="font-semibold text-brand-accent">$xxx</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-brand-dark">
                    <Bi en="Tire Pressure Check" zh="胎压检查" />
                  </span>
                  <span className="font-semibold text-brand-accent">$xxx</span>
                </li>
              </ul>
            </div>

            {/* Advanced Services */}
            <div className="card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Advanced Services" zh="高级服务" />
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between items-center">
                  <span className="text-brand-dark">
                    <Bi en="Engine Diagnostic" zh="发动机诊断" />
                  </span>
                  <span className="font-semibold text-brand-accent">$xxx</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-brand-dark">
                    <Bi en="Suspension Setup" zh="悬挂调校" />
                  </span>
                  <span className="font-semibold text-brand-accent">$xxx</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-brand-dark">
                    <Bi en="Custom Tuning" zh="定制调校" />
                  </span>
                  <span className="font-semibold text-brand-accent">$xxx</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-brand-dark">
                    <Bi en="Track Preparation" zh="赛道准备" />
                  </span>
                  <span className="font-semibold text-brand-accent">$xxx</span>
                </li>
              </ul>
            </div>

            {/* Installation Services */}
            <div className="card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Installation" zh="安装服务" />
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between items-center">
                  <span className="text-brand-dark">
                    <Bi en="Tire Installation" zh="轮胎安装" />
                  </span>
                  <span className="font-semibold text-brand-accent">$xxx</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-brand-dark">
                    <Bi en="Brake Pad Replacement" zh="刹车片更换" />
                  </span>
                  <span className="font-semibold text-brand-accent">$xxx</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-brand-dark">
                    <Bi en="Chain & Sprocket" zh="链条链轮" />
                  </span>
                  <span className="font-semibold text-brand-accent">$xxx</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-brand-dark">
                    <Bi en="Accessory Installation" zh="配件安装" />
                  </span>
                  <span className="font-semibold text-brand-accent">$xxx</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Storage Pricing */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-6 text-center">
              <Bi en="Storage Options" zh="寄存选项" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  <Bi en="Basic Storage" zh="基础寄存" />
                </h3>
                <p className="text-2xl font-bold text-brand-accent mb-2">$xxx/mo</p>
                <p className="text-brand-dark text-sm">
                  <Bi en="Indoor storage, basic security" zh="室内寄存，基础安全" />
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  <Bi en="Plus Storage" zh="升级寄存" />
                </h3>
                <p className="text-2xl font-bold text-brand-accent mb-2">$xxx/mo</p>
                <p className="text-brand-dark text-sm">
                  <Bi en="Enhanced security, regular checks" zh="增强安全，定期检查" />
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  <Bi en="Pro Storage" zh="专业寄存" />
                </h3>
                <p className="text-2xl font-bold text-brand-accent mb-2">$xxx/mo</p>
                <p className="text-brand-dark text-sm">
                  <Bi en="Premium security, maintenance included" zh="高级安全，包含维护" />
                </p>
              </div>
            </div>
          </div>

          {/* Transport Pricing */}
          <div className="card mb-12">
            <h2 className="text-3xl font-bold text-brand-dark mb-6 text-center">
              <Bi en="Transport Services" zh="运输服务" />
            </h2>
            <div className="text-center">
              <p className="text-lg text-brand-dark mb-4">
                <Bi en="Base rate: $xxx + $xxx/mile" zh="基础费率: $xxx + $xxx/英里" />
              </p>
              <p className="text-brand-dark">
                <Bi en="City coverage and night rates: To be refined" zh="城市覆盖和夜间费率: 后续完善" />
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking" className="btn-primary text-lg">
                <Bi en={t('getQuote')} zh={t('getQuote')} />
              </Link>
              <Link href="/booking" className="btn-secondary text-lg">
                <Bi en={t('bookService')} zh={t('bookService')} />
              </Link>
            </div>
            <p className="text-brand-dark mt-6">
              <Bi en="All prices subject to change. Contact us for current rates." zh="所有价格可能变动。联系我们获取当前费率。" />
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
