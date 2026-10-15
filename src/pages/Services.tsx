import { FileText, Calculator, Briefcase, Users, TrendingUp, Scale, Building2, ClipboardList, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

function SectionReveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

const SERVICES = [
  {
    icon: <FileText size={32} />,
    title: 'Tax Compliance & SARS Returns',
    desc: 'Complete income tax, provisional tax, and SARS eFiling submissions for individuals and companies. We ensure accurate, on-time filings and handle SARS correspondence on your behalf.',
    points: ['Income tax returns (ITR12 / ITR14)', 'Provisional tax (IRP6)', 'SARS eFiling management', 'Objection & dispute assistance'],
  },
  {
    icon: <Calculator size={32} />,
    title: 'Bookkeeping & Accounting',
    desc: 'Reliable monthly bookkeeping that keeps your financial records accurate and up to date. Ideal for SMEs that need clean books without the cost of a full-time bookkeeper.',
    points: ['Monthly transaction capture', 'Bank & creditor reconciliations', 'Management accounts', 'Cloud accounting software support'],
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Company Registration & CIPC',
    desc: 'New company registrations, name reservations, director changes, annual returns and all CIPC-related compliance for private companies and close corporations.',
    points: ['New company registration', 'Annual returns & beneficial ownership', 'Amendments & name changes', 'Deregistration assistance'],
  },
  {
    icon: <Users size={32} />,
    title: 'Payroll Management',
    desc: 'End-to-end payroll processing including salaries, deductions, EMP201 monthly submissions, EMP501 reconciliations, UIF and payslips.',
    points: ['Monthly payroll runs', 'EMP201 & EMP501', 'UIF compliance', 'Employee payslips & IRP5s'],
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Financial Statements',
    desc: 'Preparation of annual financial statements in accordance with applicable frameworks, ready for submission to CIPC, banks or SARS.',
    points: ['Annual financial statements', 'Independent reviews support', 'Management reports', 'Bank-ready packs'],
  },
  {
    icon: <Scale size={32} />,
    title: 'Tax Planning & Advisory',
    desc: 'Proactive tax planning to structure your affairs efficiently and legally. We help you understand your tax position and make informed decisions.',
    points: ['Tax optimisation strategies', 'Structure advice', 'Retirement & estate considerations', 'Ongoing advisory support'],
  },
  {
    icon: <Building2 size={32} />,
    title: 'VAT Registration & Returns',
    desc: 'VAT registration, monthly or two-monthly VAT201 returns, and advice on VAT implications of your transactions.',
    points: ['VAT registration', 'VAT201 returns', 'VAT reconciliations', 'Input & output tax reviews'],
  },
  {
    icon: <ClipboardList size={32} />,
    title: 'Business Consulting',
    desc: 'Practical business advice covering cash-flow, compliance, systems and growth. We act as your external finance partner.',
    points: ['Cash-flow guidance', 'Compliance health checks', 'Systems & process advice', 'Growth planning support'],
  },
  {
    icon: <Shield size={32} />,
    title: 'Independent Reviews & Support',
    desc: 'Support with independent reviews and preparation of documentation required by auditors or regulators.',
    points: ['Review preparation', 'Working paper support', 'Regulatory documentation', 'Liaison with auditors'],
  },
];

export default function Services() {
  return (
    <div className="page-enter pt-24">
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-gold-400">Our Expertise</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">Accounting & Tax Services</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-2xl mx-auto mt-4">
            Comprehensive professional services designed for South African businesses and individuals. We handle the numbers so you can focus on what matters.
          </p>
        </div>
      </section>

      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <SectionReveal key={s.title} delay={`delay-${(i % 3) * 100}`}>
                <div className="bg-white rounded-2xl p-7 shadow-sm border border-stone-100 hover:shadow-lg hover:border-gold-200 transition-all h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center mb-5">
                    {s.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3">{s.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-stone-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Need a service not listed?</h2>
          <p className="text-stone-300 mb-8">Contact us — we tailor our offerings to the needs of each client.</p>
          <Link to="/contact" className="btn-gold">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
