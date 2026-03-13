import { useTranslations } from 'next-intl'
import Bi from '@/components/Bi'
import Link from 'next/link'

export default function TransportPage() {
  return (
    <div className="pt-16">
      <section className="section-padding bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">
              <Bi en="Motorcycle Transport" zh="摩托车运输" />
            </h1>
            <p className="text-xl text-brand-dark">
              <Bi en="Local pickup and transport services available" zh="提供本地取送与运输服务" />
            </p>
          </div>

          {/* Transport Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Local Transport */}
            <div className="card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Local Transport" zh="本地运输" />
              </h3>
              <p className="text-brand-dark mb-6">
                <Bi en="Pickup and delivery within Davis and surrounding areas" zh="戴维斯及周边地区的取送服务" />
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Shop to track transport" zh="店铺到赛道运输" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Home pickup and delivery" zh="上门取送" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Emergency roadside pickup" zh="紧急路边取车" />
                </li>
              </ul>
              <div className="bg-brand-accent/10 p-4 rounded-lg mb-4">
                <p className="text-brand-dark font-semibold">
                  <Bi en="Base rate: $xxx + $xxx/mile" zh="基础费率: $xxx + $xxx/英里" />
                </p>
              </div>
              <Link href="/booking" className="btn-primary w-full">
                <Bi en="Book Transport" zh="预约运输" />
              </Link>
            </div>

            {/* Long Distance Transport */}
            <div className="card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Long Distance Transport" zh="长途运输" />
              </h3>
              <p className="text-brand-dark mb-6">
                <Bi en="Interstate and long-distance motorcycle transport services" zh="州际和长途摩托车运输服务" />
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Enclosed trailer transport" zh="封闭拖车运输" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Secure tie-down systems" zh="安全固定系统" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Insurance coverage included" zh="包含保险覆盖" />
                </li>
              </ul>
              <div className="bg-brand-accent/10 p-4 rounded-lg mb-4">
                <p className="text-brand-dark font-semibold">
                  <Bi en="Quote based on distance" zh="根据距离报价" />
                </p>
              </div>
              <Link href="/booking" className="btn-primary w-full">
                <Bi en="Get Quote" zh="获取报价" />
              </Link>
            </div>
          </div>

          {/* Service Areas */}
          <div className="card mb-8">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">
              <Bi en="Service Areas" zh="服务区域" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  <Bi en="Local Service" zh="本地服务" />
                </h3>
                <ul className="space-y-1 text-brand-dark">
                  <li>• Davis</li>
                  <li>• Sacramento</li>
                  <li>• Woodland</li>
                  <li>• Winters</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  <Bi en="Track Locations" zh="赛道地点" />
                </h3>
                <ul className="space-y-1 text-brand-dark">
                  <li>• Thunderhill Raceway</li>
                  <li>• Sonoma Raceway</li>
                  <li>• Laguna Seca</li>
                  <li>• Buttonwillow</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="card">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">
              <Bi en="Additional Information" zh="附加信息" />
            </h2>
            <div className="space-y-4 text-brand-dark">
              <p>
                <Bi en="City coverage and night multiplier rates: To be refined" zh="城市覆盖和夜间费率倍数: 后续完善" />
              </p>
              <p>
                <Bi en="MCP (Motorcycle Carrier Permit) ID: To be refined" zh="MCP（摩托车运输许可证）ID: 后续完善" />
              </p>
              <p>
                <Bi en="All transport services include basic insurance. Additional coverage available upon request." zh="所有运输服务包含基本保险。可根据要求提供额外覆盖。" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
