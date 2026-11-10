import { Link } from 'react-router-dom';
import { MessageSquareQuote, ArrowRight } from 'lucide-react';

export default function Testimonials() {
  return <div className="page-enter pt-24">
    <section className="bg-navy-900 py-16 text-center px-4">
      <span className="section-tag">Client Feedback</span>
      <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">Testimonials</h1>
      <div className="gold-bar mx-auto" />
    </section>
    <section className="py-24 bg-stone-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="mx-auto mb-6 w-16 h-16 flex items-center justify-center rounded-2xl bg-navy-900 text-gold-400"><MessageSquareQuote size={30}/></div>
        <h2 className="text-2xl md:text-3xl font-bold text-navy-900 mb-4">Verified Client Stories Coming Soon</h2>
        <p className="text-stone-600 leading-relaxed mb-4">Alpha & Omega is preparing its client testimonials for publication. Names and approved attributions will be added after confirmation by the practice.</p>
        <p className="text-stone-500 text-sm mb-8">The previous draft testimonials have been withheld to avoid attributing quotes to clients before verification.</p>
        <Link to="/contact" className="btn-gold">Talk to Our Team <ArrowRight size={16}/></Link>
      </div>
    </section>
  </div>;
}
