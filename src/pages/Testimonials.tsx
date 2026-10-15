import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const TESTIMONIALS = [
  { name: 'Thandi M.', role: 'SME Owner, Durban', text: 'Alpha and Omega took over our bookkeeping and SARS submissions. Everything is now on time and we finally have clear monthly reports. Highly recommended.' },
  { name: 'Johan V.', role: 'Director, Pietermaritzburg', text: 'Professional, responsive and thorough. They registered our company and continue to handle our annual returns and tax without any stress on our side.' },
  { name: 'Priya N.', role: 'Professional Services', text: 'I needed reliable payroll and tax support. The team is knowledgeable and always available when I have questions. Excellent service.' },
  { name: 'Sipho K.', role: 'Retail Business', text: 'From VAT to year-end financials, they handle it all. Fixed monthly fee gives us peace of mind and predictable costs.' },
  { name: 'Michelle R.', role: 'Consultant', text: 'Clear communication and practical advice. They helped me structure my tax affairs properly and I feel far more confident now.' },
  { name: 'David L.', role: 'Manufacturing', text: 'We switched to Alpha and Omega two years ago. Compliance is sorted and the management accounts help us make better decisions.' },
];

function Reveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="page-enter pt-24">
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-gold-400">Client Feedback</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">What Our Clients Say</h1>
          <div className="gold-bar mx-auto" />
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={`delay-${(i % 3) * 100}`}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={16} className="fill-gold-400 text-gold-400" />
                    ))}
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed flex-1 mb-5">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
                    <p className="text-stone-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn-gold">Become Our Next Client</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
