export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-page">
        <div className="text-center mb-14">
          <div className="section-kicker">Contact</div>
          <h2 className="section-title mt-3">Contact Our Team</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border-t border-white/10 pt-8 sm:pt-10">
            <div className="space-y-5">
              <div className="pb-5 border-b border-white/10">
                <div className="section-kicker">Phone</div>
                <a href="tel:9096562297" className="mt-1 inline-block text-2xl font-semibold hover:text-white">
                  909-656-2297
                </a>
              </div>
              <div className="pb-5 border-b border-white/10">
                <div className="section-kicker">Email</div>
                <a href="mailto:apexmotorintl@gmail.com" className="mt-1 inline-block text-2xl font-semibold hover:text-white break-all">
                  apexmotorintl@gmail.com
                </a>
              </div>
              <div className="pb-1">
                <div className="section-kicker">Address</div>
                <p className="mt-1 text-xl text-brand-text">
                  720 Olive Dr Ste F
                  <br />
                  Davis, CA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}