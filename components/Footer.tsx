export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-black">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-lg font-semibold tracking-tight text-brand-text">Apex Motor Intl</div>
            <p className="muted mt-3 text-sm leading-relaxed">
              Electric motorcycle distribution, dealer network development, and local service support in the United States.
            </p>
          </div>

          <div className="text-sm">
            <div className="section-kicker">Contact</div>
            <div className="mt-3 space-y-1 text-brand-text/90">
              <div>Bingyu Chen</div>
              <div>
                <a className="hover:text-brand-text transition-colors" href="tel:909-656-2297">
                  909-656-2297
                </a>
              </div>
              <div>
                <a className="hover:text-brand-text transition-colors" href="mailto:apexmotorintl@gmail.com">
                  apexmotorintl@gmail.com
                </a>
              </div>
              <div className="muted">
                720 Olive Dr Ste F
                <br />
                Davis, CA
              </div>
            </div>
          </div>

          <div className="text-sm">
            <div className="section-kicker">Navigation</div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a className="text-brand-text/90 hover:text-brand-text transition-colors" href="/en">Home</a>
              <a className="text-brand-text/90 hover:text-brand-text transition-colors" href="/en/products">Products</a>
              <a className="text-brand-text/90 hover:text-brand-text transition-colors" href="/en/dealers">Dealers</a>
              <a className="text-brand-text/90 hover:text-brand-text transition-colors" href="/en/service">Service</a>
              <a className="text-brand-text/90 hover:text-brand-text transition-colors" href="/en/about">About</a>
              <a className="text-brand-text/90 hover:text-brand-text transition-colors" href="/en/contact#contact">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-brand-muted flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Apex Motor Intl. All rights reserved.</div>
          <div className="text-brand-muted">Built for real riding.</div>
        </div>
      </div>
    </footer>
  )
}