import { useTranslations } from 'next-intl'
import Bi from '@/components/Bi'
import Link from 'next/link'

export default function ServicesPage() {
  const t = useTranslations('services')

  return (
    <div className="pt-16">
      <section className="section-padding bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">
              <Bi en={t('title')} zh={t('title')} />
            </h1>
            <p className="text-xl text-brand-dark max-w-3xl mx-auto">
              <Bi en="Comprehensive motorcycle services with transparent pricing and quality guarantees." 
                 zh="全面的摩托车服务，透明定价，质量保证。" />
            </p>
          </div>

          {/* Service Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Repair & Maintenance */}
            <div className="card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Repair & Maintenance" zh="维修保养" />
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Engine diagnostics and repair" zh="发动机诊断和维修" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Brake system service" zh="刹车系统服务" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Chain and sprocket replacement" zh="链条链轮更换" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Fluid changes and maintenance" zh="换油和维护" />
                </li>
              </ul>
              <p className="text-brand-accent font-semibold mb-4">
                <Bi en={t('pricing')} zh={t('pricing')} />
              </p>
              <Link href="/booking" className="btn-primary">
                <Bi en="Book Service" zh="预约服务" />
              </Link>
            </div>

            {/* Customization */}
            <div className="card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Customization" zh="定制改装" />
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Performance upgrades" zh="性能升级" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Suspension setup" zh="悬挂调校" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="LED lighting installation" zh="LED照明安装" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Protection accessories" zh="防护配件" />
                </li>
              </ul>
              <p className="text-brand-accent font-semibold mb-4">
                <Bi en={t('pricing')} zh={t('pricing')} />
              </p>
              <Link href="/booking" className="btn-primary">
                <Bi en="Get Quote" zh="获取报价" />
              </Link>
            </div>

            {/* Race Support */}
            <div className="card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Race Support" zh="赛道支持" />
              </h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Track-side technical support" zh="赛道技术支持" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Quick repairs and adjustments" zh="快速维修调整" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Performance tuning" zh="性能调校" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Race day preparation" zh="比赛日准备" />
                </li>
              </ul>
              <p className="text-brand-accent font-semibold mb-4">
                <Bi en={t('pricing')} zh={t('pricing')} />
              </p>
              <Link href="/booking" className="btn-primary">
                <Bi en="Contact Us" zh="联系我们" />
              </Link>
            </div>
          </div>

          {/* Process Section */}
          <div className="card">
            <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">
              <Bi en={t('process')} zh={t('process')} />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  <Bi en="Consultation" zh="咨询" />
                </h3>
                <p className="text-brand-dark">
                  <Bi en="Discuss your needs and get a detailed estimate" zh="讨论您的需求并获得详细估价" />
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  <Bi en="Service" zh="服务" />
                </h3>
                <p className="text-brand-dark">
                  <Bi en="Professional service with quality parts and tools" zh="使用优质零件和工具的专业服务" />
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-2">
                  <Bi en="Quality Check" zh="质量检查" />
                </h3>
                <p className="text-brand-dark">
                  <Bi en="Thorough testing and quality assurance" zh="全面测试和质量保证" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
