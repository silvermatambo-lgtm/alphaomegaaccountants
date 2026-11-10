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
  { icon: <Calculator size={32} />, title: 'Accounting & Bookkeeping', desc: 'Keep financial records accurate, organised and up to date with accounting and bookkeeping services tailored to your business.', points: ['Bookkeeping and transaction recording', 'Financial reconciliations', 'Management reporting', 'Accurate, up-to-date records'] },
  { icon: <FileText size={32} />, title: 'Tax Services / SARS Compromises & Settlements', desc: 'Tax preparation, planning, submissions and compliance for individuals and businesses, including assistance with SARS compromises and settlements.', points: ['Tax preparation and returns', 'SARS submissions and correspondence', 'Tax compliance and planning', 'SARS compromises and settlements'] },
  { icon: <Users size={32} />, title: 'Payroll Services', desc: 'Manage employee payments, payroll records, statutory requirements and payroll reporting effectively and accurately.', points: ['Payroll processing', 'Employee records and payslips', 'Statutory payroll requirements', 'Payroll reporting'] },
  { icon: <TrendingUp size={32} />, title: 'Annual Financial Statements / Management Accounts', desc: 'Professional statements and management accounts that provide a clear picture of your organisation’s financial performance and position.', points: ['Annual financial statements', 'Management accounts', 'Performance reporting', 'Financial position summaries'] },
  { icon: <ClipboardList size={32} />, title: 'Business Advisory / Virtual CFO', desc: 'Strategic financial leadership without a full-time CFO, helping you understand what your numbers mean, improve cash flow and identify sustainable growth opportunities.', points: ['Financial performance insights', 'Cash-flow and working-capital planning', 'Budget monitoring and forecasts', 'Business strategy and financial controls'] },
  { icon: <Shield size={32} />, title: 'Independent Reviews', desc: 'Assistance with independent reviews of annual financial statements for entities where an independent review is applicable.', points: ['Independent financial reviews', 'Annual statement reviews', 'Compliance support', 'Supporting documentation'] },
  { icon: <Briefcase size={32} />, title: 'Company Registration & CIPC / Business Compliance', desc: 'Professional assistance with company registration and ongoing CIPC and regulatory requirements to help keep your business compliant and organised.', points: ['Company registrations', 'CIPC filings and amendments', 'Annual returns', 'Business compliance support'] },
  { icon: <Building2 size={32} />, title: 'VAT Registration & Returns', desc: 'Assistance with VAT registration, VAT returns and VAT records as part of our wider tax and compliance support.', points: ['VAT registration', 'VAT return preparation', 'VAT reconciliations', 'VAT compliance guidance'] },
  { icon: <Scale size={32} />, title: 'Financial & Tax Planning', desc: 'Practical financial planning and tax advice, with the information you need to make informed decisions and plan for the future.', points: ['Budgeting and forecasting', 'Cash-flow planning', 'Tax planning', 'Growth and investment decisions'] },
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
            Accounting, tax, payroll, regulatory compliance and strategic financial leadership for individuals and businesses.
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's Talk About Your Financial Needs</h2>
          <p className="text-stone-300 mb-8">Contact us — we tailor our offerings to the needs of each client.</p>
          <Link to="/contact" className="btn-gold">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
