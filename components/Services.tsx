import { serviceGroups, emphasisCard } from '@/lib/services'

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark mb-4">
            业务范围 / <span className="text-brand-accent">Services</span>
          </h2>
          <p className="text-xl text-brand-dark max-w-3xl mx-auto">
            Comprehensive motorcycle services covering the entire lifecycle of motorcycle ownership.
          </p>
        </div>

        {/* Service Groups */}
        <div className="space-y-12">
          {serviceGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-dark border-b-2 border-brand-accent pb-2">
                {group.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((service, serviceIndex) => (
                  <div 
                    key={serviceIndex}
                    className="card hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl flex-shrink-0" aria-hidden="true">
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-brand-dark mb-2">
                          {service.title}
                        </h4>
                        <p className="text-brand-dark text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Emphasis Card */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-brand-accent/10 to-brand-accent/5 border-brand-accent/20">
            <div className="flex items-start space-x-4">
              <div className="text-4xl flex-shrink-0" aria-hidden="true">
                {emphasisCard.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-brand-dark mb-4">
                  {emphasisCard.title}
                </h3>
                <p className="text-brand-dark text-lg leading-relaxed">
                  {emphasisCard.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
