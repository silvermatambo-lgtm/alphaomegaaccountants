import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

const FAQS = [
  { q: 'What accounting services do you offer?', a: 'We provide tax compliance and SARS returns, bookkeeping, company registration (CIPC), payroll, financial statements, VAT returns, tax planning and business advisory services.' },
  { q: 'Do you work with small businesses?', a: 'Yes. The majority of our clients are SMEs and independent professionals across KwaZulu-Natal. We tailor packages to the size and needs of each client.' },
  { q: 'How do SARS eFiling and tax returns work with you?', a: 'We prepare and submit your returns via SARS eFiling, keep you informed of any correspondence, and handle follow-ups so you remain compliant.' },
  { q: 'Can you register a new company for me?', a: 'Yes. We handle CIPC company registration, name reservation, director appointments and subsequent annual returns and beneficial ownership filings.' },
  { q: 'Do you offer fixed monthly fees?', a: 'Yes. For ongoing bookkeeping, payroll and compliance work we offer transparent fixed-fee arrangements so you can budget with certainty.' },
  { q: 'Where are you based?', a: 'We are based in KwaZulu-Natal and serve clients throughout the province. Much of our work is done remotely with secure document sharing.' },
  { q: 'How quickly can you respond to an enquiry?', a: 'We aim to respond to all enquiries within one business day. For urgent SARS or payroll matters we prioritise accordingly.' },
  { q: 'How do I get started?', a: 'Simply call, WhatsApp or use the contact form on this website. We will schedule a short consultation to understand your needs and propose a suitable service package.' },
];

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="page-enter pt-24">
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-gold-400">Common Questions</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">Frequently Asked Questions</h1>
          <div className="gold-bar mx-auto" />
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 space-y-3">
          {FAQS.map((faq, i) => (
            <Reveal key={i}>
              <div className="bg-white rounded-xl border border-stone-100 overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-medium text-navy-900 text-sm pr-4">{faq.q}</span>
                  {open === i ? <Minus size={18} className="text-gold-500 shrink-0" /> : <Plus size={18} className="text-stone-400 shrink-0" />}
                </button>
                {open === i && (
                  <div className="px-5 pb-4 text-stone-600 text-sm leading-relaxed border-t border-stone-50 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-stone-500 text-sm mb-4">Still have questions?</p>
          <Link to="/contact" className="btn-gold">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
