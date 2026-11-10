import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Wallet, Gauge, PiggyBank, Building2, ShieldCheck, CalendarDays } from 'lucide-react';

const BENEFITS=[
  {icon: TrendingUp,text:'Understand where your business is making and losing money.'},
  {icon: Wallet,text:'Improve cash flow and working capital management.'},
  {icon: Gauge,text:'Monitor performance against budgets and targets.'},
  {icon: PiggyBank,text:'Identify opportunities to improve profitability.'},
  {icon: Building2,text:'Make informed investment and expansion decisions.'},
  {icon: ShieldCheck,text:'Strengthen financial processes and internal controls.'},
  {icon: CalendarDays,text:'Plan for long-term financial sustainability.'},
];

export default function VirtualCFO(){
  return <div className="page-enter pt-24">
    <header className="bg-navy-900 px-4 py-20 text-center"><span className="section-tag">Strategic Financial Leadership</span>
      <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">Virtual CFO Services</h1>
      <p className="text-xl md:text-2xl text-gold-400 font-semibold mt-5">You Don't Just Need Financial Statements. You Need Financial Direction.</p>
      <p className="text-stone-300 max-w-3xl mx-auto mt-6">Access strategic financial leadership without the cost of employing a full-time Chief Financial Officer.</p>
    </header>
    <section className="py-16 bg-white"><div className="max-w-5xl mx-auto px-4">
      <h2 className="section-heading mb-5">Look Ahead, Not Just Back</h2>
      <div className="gold-bar"/>
      <p className="text-stone-600 text-lg leading-relaxed mb-4">As your business grows, understanding what is happening financially becomes as important as knowing what has already happened.</p>
      <p className="text-stone-600 leading-relaxed">Our Virtual CFO support helps you move from reviewing historical results to actively managing future performance.</p>
    </div></section>
    <section className="py-16 bg-stone-50"><div className="max-w-6xl mx-auto px-4">
      <h2 className="section-heading text-center mb-12">How Our Virtual CFO Can Help</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{BENEFITS.map(({icon:Icon,text},i)=><div key={text} className="bg-white rounded-2xl border border-stone-100 p-6 shadow-sm animate-fade-up" style={{animationDelay:`${i*70}ms`}}><Icon size={28} className="text-gold-500 mb-4"/><p className="font-medium text-navy-900 leading-relaxed">{text}</p></div>)}</div>
    </div></section>
    <section className="bg-navy-900 py-16 text-center px-4"><h2 className="text-3xl font-bold text-white">Get Clarity on Your Next Financial Move</h2><p className="text-stone-300 max-w-xl mx-auto my-6">Discuss your financial management needs with Alpha & Omega.</p><Link to="/contact" className="btn-gold">Request a Consultation <ArrowRight size={16}/></Link></section>
  </div>;
}
