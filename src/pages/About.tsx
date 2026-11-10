import { CheckCircle, Target, Eye, Heart } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';
import Affiliations from '../components/Affiliations';

function Reveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function About() {
  return (
    <div className="page-enter pt-24">
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-gold-400">Who We Are</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">About Alpha & Omega</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-2xl mx-auto mt-4">
            Alpha & Omega Professional Accountants and Tax Advisors (AOPATA) — helping you manage your finances with confidence.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Accounting professionals"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
              />
            </Reveal>
            <Reveal delay="delay-200">
              <span className="section-tag">Our Story</span>
              <h2 className="section-heading">From Alpha to Omega — Complete Professional Care</h2>
              <div className="gold-bar" />
              <p className="text-stone-600 leading-relaxed mb-4">
                At Alpha & Omega, we provide professional accounting, tax and business advisory services designed to help individuals and businesses stay financially organised, compliant and prepared for the future.
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Our team collectively holds more than 100 years of experience in the tax and accounting fields. We combine technical expertise with a personalised approach, understanding your financial needs and providing practical solutions.
              </p>
              <ul className="space-y-3">
                {['More than 100 years of combined team experience', 'Accounting, tax, payroll and compliance assistance', 'Business Advisory and Virtual CFO services', 'Professional, personalised guidance'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-stone-700 text-sm">
                    <CheckCircle size={18} className="text-gold-500 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Target size={28} />, title: 'Mission', text: 'To deliver accurate, timely and professional accounting and tax services that give our clients peace of mind and a clear financial picture.' },
              { icon: <Eye size={28} />, title: 'Vision', text: 'To be the trusted accounting partner of choice for businesses and individuals across KwaZulu-Natal.' },
              { icon: <Heart size={28} />, title: 'Values', text: 'Integrity, professionalism, clear communication and a genuine commitment to each client’s success.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={`delay-${i * 100}`}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 h-full text-center">
                  <div className="w-14 h-14 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center mx-auto mb-5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Affiliations />

      <section className="py-16 bg-navy-900 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to work with us?</h2>
          <p className="text-stone-300 mb-8">Contact Alpha and Omega today for a confidential discussion about your accounting and tax needs.</p>
          <Link to="/contact" className="btn-gold">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
