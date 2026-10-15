import { Link } from 'react-router-dom';
import { Shield, Calculator, FileText, Users, CheckCircle, ArrowRight, Phone, Briefcase, TrendingUp, Scale } from 'lucide-react';
import HeroSlider from '../components/HeroSlider';
import { useInView } from '../hooks/useInView';

function SectionReveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

const SERVICES_PREVIEW = [
  { icon: <FileText size={28} />, title: 'Tax Compliance & SARS', desc: 'Accurate eFiling, income tax, provisional tax and SARS submissions.' },
  { icon: <Calculator size={28} />, title: 'Bookkeeping & Accounting', desc: 'Monthly bookkeeping, reconciliations and management accounts.' },
  { icon: <Briefcase size={28} />, title: 'Company Registration', desc: 'CIPC registration, amendments and annual returns.' },
  { icon: <Users size={28} />, title: 'Payroll Management', desc: 'Full payroll processing, EMP201/501 and UIF compliance.' },
  { icon: <TrendingUp size={28} />, title: 'Financial Statements', desc: 'Annual financial statements prepared to professional standards.' },
  { icon: <Scale size={28} />, title: 'Tax Planning & Advisory', desc: 'Strategic advice to minimise tax legally and grow sustainably.' },
];

export default function Home() {
  return (
    <div className="page-enter">
      <HeroSlider />

      {/* Why choose us bar */}
      <div className="bg-navy-900 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Shield size={20} />, label: 'Trusted & Reliable' },
              { icon: <FileText size={20} />, label: 'SARS Compliant' },
              { icon: <Users size={20} />, label: 'Personal Service' },
              { icon: <TrendingUp size={20} />, label: 'Business Focused' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3 text-white">
                <span className="text-gold-400">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services preview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal className="text-center mb-14">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-heading text-center">Complete Accounting Services</h2>
            <div className="gold-bar mx-auto" />
            <p className="text-stone-500 max-w-2xl mx-auto mt-2">
              From day-to-day bookkeeping to strategic tax planning — we provide end-to-end professional accounting services for businesses and individuals in KZN.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_PREVIEW.map((s, i) => (
              <SectionReveal key={s.title} delay={`delay-${(i % 3) * 100}`}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:border-gold-200 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-navy-900/5 text-navy-900 flex items-center justify-center mb-4">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold text-navy-900 mb-2">{s.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-gold">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                alt="Professional accounting team"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </SectionReveal>
            <SectionReveal delay="delay-200">
              <span className="section-tag">About Us</span>
              <h2 className="section-heading">Your Trusted Partners from Beginning to End</h2>
              <div className="gold-bar" />
              <p className="text-stone-600 leading-relaxed mb-4">
                Alpha and Omega Professional Accountants and Tax Advisors is a KwaZulu-Natal based practice dedicated to delivering accurate, timely and professional accounting and tax services.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                We work with SMEs, professionals and individuals who value clear communication, compliance and practical advice that supports long-term success.
              </p>
              <ul className="space-y-3 mb-8">
                {['Fully SARS & CIPC compliant processes', 'Personalised service with dedicated support', 'Transparent fixed-fee options available', 'Based in KZN — serving clients province-wide'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-700 text-sm">
                    <CheckCircle size={18} className="text-gold-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-gold">
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-navy-900" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
        }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <SectionReveal>
            <span className="section-tag text-gold-400">Get Started Today</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">
              Ready for Professional Accounting Support?
            </h2>
            <p className="text-stone-300 max-w-xl mx-auto mb-10 leading-relaxed">
              Contact us today for a free consultation. Let us take care of your books, tax and compliance so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+27795244298" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-xl text-sm transition-all duration-300 hover:-translate-y-0.5">
                <Phone size={16} /> Call +27 79 524 4298
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 font-semibold rounded-xl text-sm transition-all duration-300">
                Request a Quote <ArrowRight size={16} />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gold-50 border-y border-gold-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '100%', label: 'Client Focused' },
              { num: 'KZN', label: 'Based & Serving' },
              { num: 'SARS', label: 'Fully Compliant' },
              { num: '24h', label: 'Response Target' },
            ].map((stat) => (
              <SectionReveal key={stat.label}>
                <p className="text-4xl font-bold text-gold-600 mb-1">{stat.num}</p>
                <p className="text-stone-600 text-sm font-medium">{stat.label}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
