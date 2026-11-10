import { Link } from 'react-router-dom';
import { Clock3, BookOpenCheck, BarChart3, ShieldCheck, Lightbulb, CalendarCheck, Eye, ArrowRight } from 'lucide-react';

const REASONS = [
  { icon: Clock3, title: 'Save Time and Focus on Your Business', description: 'Accounting and administrative responsibilities can take valuable time away from running and growing your business. Delegate appropriate financial tasks and focus on your core activities.' },
  { icon: BookOpenCheck, title: 'Maintain Accurate Financial Records', description: 'Accurate, organised records help you understand your business position and prepare financial information in accordance with applicable requirements.' },
  { icon: BarChart3, title: 'Understand Your Financial Position', description: 'Understand income, expenses, assets, liabilities, cash flow and overall performance so you can make informed decisions.' },
  { icon: ShieldCheck, title: 'Meet Your Tax and Compliance Responsibilities', description: 'Receive assistance with relevant tax, payroll, accounting and regulatory obligations, including properly prepared submissions.' },
  { icon: Lightbulb, title: 'Make Better-Informed Decisions', description: 'Interpret financial information, consider different options and understand the potential implications before making business decisions.' },
  { icon: CalendarCheck, title: 'Plan for the Future', description: 'Support with budgeting, cash-flow planning, forecasting and other aspects of financial management to prepare for what is ahead.' },
  { icon: Eye, title: 'Gain a Professional and Independent Perspective', description: 'An independent professional view can highlight financial matters that need attention and provide a fresh perspective.' },
];

export default function WhyChooseUs() {
  return <div className="page-enter pt-24">
    <header className="bg-navy-900 py-16 text-center px-4">
      <span className="section-tag">Professional Support</span>
      <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">Why Use a Professional Accounting Practice?</h1>
      <p className="max-w-3xl mx-auto text-stone-300 mt-6">Managing financial affairs takes time, accuracy, knowledge and attention to compliance. A professional accounting practice offers more than bookkeeping: structured guidance when you need it.</p>
    </header>
    <section className="bg-stone-50 py-16"><div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
      {REASONS.map(({icon: Icon,title,description},i)=><article key={title} className="bg-white border border-stone-100 rounded-2xl shadow-sm p-7 hover:shadow-md transition-shadow animate-fade-up" style={{animationDelay:`${i*70}ms`}}>
        <div className="inline-flex items-center justify-center bg-navy-900 text-gold-400 rounded-xl p-3 mb-4"><Icon size={26}/></div>
        <h2 className="text-xl font-bold text-navy-900 mb-3">{title}</h2><p className="text-stone-600 leading-relaxed text-sm">{description}</p>
      </article>)}
    </div></section>
    <section className="bg-navy-900 py-16 text-center px-4"><h2 className="text-3xl text-white font-bold">Supporting Your Business Beyond the Numbers</h2><p className="text-stone-300 max-w-2xl mx-auto mt-4 mb-8">Good accounting helps you understand where you are financially and plan where you want to go.</p><Link className="btn-gold" to="/contact">Request a Consultation <ArrowRight size={16}/></Link></section>
  </div>;
}
