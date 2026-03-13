import { useTranslations } from 'next-intl'
import Bi from '@/components/Bi'
import Link from 'next/link'

export default function DiagnosticsPage() {
  return (
    <div className="pt-16">
      <section className="section-padding bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">
              <Bi en="Motorcycle Diagnostics" zh="摩托车诊断" />
            </h1>
            <p className="text-xl text-brand-dark">
              <Bi en="Professional diagnostic services for your motorcycle" zh="为您的摩托车提供专业诊断服务" />
            </p>
          </div>

          {/* Quick Triage */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              <Bi en="Quick Triage - Free" zh="快速初检 - 免费" />
            </h2>
            <p className="text-brand-dark mb-4">
              <Bi en="Initial assessment to identify basic issues and provide recommendations" zh="初步评估以识别基本问题并提供建议" />
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-brand-dark">
                <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <Bi en="Visual inspection" zh="目视检查" />
              </li>
              <li className="flex items-center text-brand-dark">
                <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <Bi en="Basic system checks" zh="基础系统检查" />
              </li>
              <li className="flex items-center text-brand-dark">
                <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <Bi en="Initial recommendations" zh="初步建议" />
              </li>
            </ul>
            <Link href="/booking" className="btn-primary">
              <Bi en="Schedule Free Triage" zh="预约免费初检" />
            </Link>
          </div>

          {/* Deep Diagnosis */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">
              <Bi en="Deep Diagnosis" zh="深入诊断" />
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-brand-dark font-semibold">
                <Bi en="Requires authorization and signed estimate" zh="需要授权并签署估价" />
              </p>
            </div>
            <p className="text-brand-dark mb-4">
              <Bi en="Comprehensive diagnostic analysis using professional equipment and tools" zh="使用专业设备和工具进行全面诊断分析" />
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-brand-dark">
                <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <Bi en="Computer diagnostics" zh="电脑诊断" />
              </li>
              <li className="flex items-center text-brand-dark">
                <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <Bi en="Engine analysis" zh="发动机分析" />
              </li>
              <li className="flex items-center text-brand-dark">
                <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <Bi en="Electrical system testing" zh="电气系统测试" />
              </li>
              <li className="flex items-center text-brand-dark">
                <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <Bi en="Detailed repair estimate" zh="详细维修估价" />
              </li>
            </ul>
            <div className="text-2xl font-bold text-brand-accent mb-4">
              <Bi en="Starting from: $xxx" zh="起价: $xxx" />
            </div>
            <Link href="/booking" className="btn-primary">
              <Bi en="Schedule Deep Diagnosis" zh="预约深入诊断" />
            </Link>
          </div>

          {/* Process Information */}
          <div className="card">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">
              <Bi en="Diagnostic Process" zh="诊断流程" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  <Bi en="Initial Assessment" zh="初步评估" />
                </h3>
                <p className="text-brand-dark text-sm">
                  <Bi en="Quick triage to identify basic issues" zh="快速初检识别基本问题" />
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  <Bi en="Authorization" zh="授权" />
                </h3>
                <p className="text-brand-dark text-sm">
                  <Bi en="Sign estimate for deep diagnosis" zh="签署估价进行深入诊断" />
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  <Bi en="Detailed Report" zh="详细报告" />
                </h3>
                <p className="text-brand-dark text-sm">
                  <Bi en="Comprehensive analysis and repair options" zh="全面分析和维修选项" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
