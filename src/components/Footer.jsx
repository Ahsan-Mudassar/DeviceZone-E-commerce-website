import { Link } from "react-router-dom";

const footerLinks = {
  Shop: [
    { label: "All Products", to: "/products" },
    { label: "Smartphones", to: "/products?category=smartphones" },
    { label: "Laptops", to: "/products?category=laptops" },
    { label: "Tablets", to: "/products?category=tablets" },
    { label: "Accessories", to: "/products?category=accessories" },
  ],
  Support: [
    { label: "FAQ", to: "/faq" },
    { label: "Track Order", to: "/track-order" },
    { label: "Returns & Refunds", to: "/returns" },
    { label: "Shipping Info", to: "/shipping" },
    { label: "Contact Us", to: "/contact" },
  ],
  Company: [
    { label: "About DeviceZone", to: "/about" },
    { label: "Careers", to: "/careers" },
    { label: "Privacy Policy", to: "/privacy" },
    { label: "Terms of Service", to: "/terms" },
  ],
};

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Ahsan-Mudassar",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ahsan-mudassar-00b984394",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Gmail",
    href: "mailto:ahsanmudassar441@gmail.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
      </svg>
    ),
  },
];

const trustBadges = [
  { icon: "🔒", text: "Secure Checkout" },
  { icon: "🚚", text: "Fast Delivery" },
  { icon: "↩️", text: "Easy Returns" },
  { icon: "🎧", text: "24/7 Support" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">

      {/* Trust bar */}
      <div className="border-b border-slate-700/60">
        <div className="max-w-6xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {trustBadges.map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2.5">
              <span className="text-lg">{icon}</span>
              <span className="text-sm font-medium text-slate-300">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-5 gap-10">

        {/* Brand column */}
        <div className="md:col-span-2 flex flex-col gap-5">
          <div>
            <span className="text-2xl font-semibold text-white tracking-tight">
              Device<span className="text-blue-400">Zone</span>
            </span>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs">
              Quality electronics at competitive prices. From smartphones to accessories — everything you need, delivered fast.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
              Stay in the loop
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-slate-800 border border-slate-700 text-sm text-white placeholder:text-slate-500 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              {group}
            </p>
            <ul className="flex flex-col gap-2.5">
              {links.map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-sm text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700/60">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <span>© {new Date().getFullYear()} DeviceZone. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-blue-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}