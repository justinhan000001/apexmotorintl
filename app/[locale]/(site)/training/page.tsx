import { useTranslations } from 'next-intl'
import Bi from '@/components/Bi'
import Link from 'next/link'

export default function TrainingPage() {
  return (
    <div className="pt-16">
      <section className="section-padding bg-brand-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">
              <Bi en="Motorcycle Training" zh="摩托车培训" />
            </h1>
            <p className="text-xl text-brand-dark">
              <Bi en="Professional motorcycle training for all skill levels" zh="为所有技能水平提供专业摩托车培训" />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Beginner Training */}
            <div className="card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Beginner Training" zh="新手培训" />
              </h3>
              <p className="text-brand-dark mb-6">
                <Bi en="Systematic entry-level training for zero-experience riders" zh="为零基础骑手提供系统化入门培训" />
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Basic controls and safety" zh="基础操控和安全" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Traffic awareness" zh="交通意识" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Emergency maneuvers" zh="紧急操作" />
                </li>
              </ul>
              <div className="text-2xl font-bold text-brand-accent mb-4">
                <Bi en="Price: $xxx" zh="价格: $xxx" />
              </div>
              <Link href="/booking" className="btn-primary w-full">
                <Bi en="Book Training" zh="预约培训" />
              </Link>
            </div>

            {/* Track Training */}
            <div className="card">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">
                <Bi en="Track Training" zh="赛道培训" />
              </h3>
              <p className="text-brand-dark mb-6">
                <Bi en="Professional track courses to improve technique and safety awareness" zh="专业赛道课程，提升技术与安全意识" />
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Advanced cornering techniques" zh="高级过弯技术" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Brake and throttle control" zh="刹车和油门控制" />
                </li>
                <li className="flex items-center text-brand-dark">
                  <svg className="w-4 h-4 text-brand-accent mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <Bi en="Track safety protocols" zh="赛道安全规程" />
                </li>
              </ul>
              <div className="text-2xl font-bold text-brand-accent mb-4">
                <Bi en="Price: $xxx" zh="价格: $xxx" />
              </div>
              <Link href="/booking" className="btn-primary w-full">
                <Bi en="Book Training" zh="预约培训" />
              </Link>
            </div>
          </div>

          {/* Training Schedule */}
          <div className="card">
            <h2 className="text-2xl font-bold text-brand-dark mb-6">
              <Bi en="Training Schedule" zh="培训安排" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  <Bi en="Beginner Courses" zh="新手课程" />
                </h3>
                <p className="text-brand-dark">
                  <Bi en="Weekend sessions available" zh="周末课程可选" />
                </p>
                <p className="text-brand-dark text-sm">
                  <Bi en="Duration: To be refined" zh="时长: 后续完善" />
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  <Bi en="Track Courses" zh="赛道课程" />
                </h3>
                <p className="text-brand-dark">
                  <Bi en="Scheduled track days" zh="定期赛道日" />
                </p>
                <p className="text-brand-dark text-sm">
                  <Bi en="Locations: Thunderhill, Sonoma" zh="地点: 雷山, 索诺玛" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
