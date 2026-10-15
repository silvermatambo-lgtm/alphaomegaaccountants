import { useState } from 'react';
import { Phone, Mail, Globe, Clock, MapPin, Send, CheckCircle, Loader } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const WA_ICON = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const SERVICES = [
  'Tax Compliance & SARS Returns',
  'Bookkeeping & Accounting',
  'Company Registration (CIPC)',
  'Payroll Management',
  'Financial Statements',
  'VAT Registration & Returns',
  'Tax Planning & Advisory',
  'Business Consulting',
  'Other Enquiry',
];

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email is required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSuccess(true);
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
  }

  return (
    <div className="page-enter pt-24">
      <section className="relative py-20 bg-navy-900 overflow-hidden">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-gold-400">Get In Touch</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Contact Us</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-xl mx-auto mt-4">
            Ready for professional accounting support? Get in touch for a free consultation.
          </p>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <Phone size={22} />, label: 'Call Us', value: '+27 79 524 4298', href: 'tel:+27795244298' },
              { icon: <WA_ICON />, label: 'WhatsApp', value: '079 524 4298', href: 'https://wa.me/27795244298' },
              { icon: <Mail size={22} />, label: 'Email', value: 'info@alphaomegaadvisors.co.za', href: 'mailto:info@alphaomegaadvisors.co.za' },
              { icon: <Globe size={22} />, label: 'Website', value: 'alphaomegaadvisors.co.za', href: 'https://www.alphaomegaadvisors.co.za' },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-start gap-4 p-5 rounded-2xl border border-stone-100 hover:border-gold-300 hover:shadow-md transition-all bg-stone-50">
                <div className="w-11 h-11 rounded-xl bg-navy-900 text-gold-400 flex items-center justify-center shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">{c.label}</p>
                  <p className="text-sm font-medium text-navy-900 mt-0.5 break-all">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Reveal>
              <span className="section-tag">Send a Message</span>
              <h2 className="section-heading">Request a Consultation</h2>
              <div className="gold-bar" />
              <p className="text-stone-500 text-sm mb-8">Fill in the form and we will respond within one business day.</p>

              {success ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Thank you!</h3>
                  <p className="text-green-700 text-sm">Your enquiry has been received. We will be in touch shortly.</p>
                  <button onClick={() => setSuccess(false)} className="mt-6 text-sm text-green-700 underline">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Full Name *</label>
                      <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-gold-400 ${errors.name ? 'border-red-400' : 'border-stone-200'}`} />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1.5">Phone *</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="079 524 4298" className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-gold-400 ${errors.phone ? 'border-red-400' : 'border-stone-200'}`} />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Email *</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-gold-400 ${errors.email ? 'border-red-400' : 'border-stone-200'}`} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Service *</label>
                    <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-gold-400 ${errors.service ? 'border-red-400' : 'border-stone-200'}`}>
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Message *</label>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Tell us how we can help..." className={`w-full px-4 py-3 rounded-xl border text-sm outline-none focus:ring-2 focus:ring-gold-400 resize-none ${errors.message ? 'border-red-400' : 'border-stone-200'}`} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={loading} className="btn-gold w-full justify-center py-3.5 disabled:opacity-60">
                    {loading ? <><Loader size={16} className="animate-spin" /> Sending...</> : <><Send size={16} /> Send Message</>}
                  </button>
                </form>
              )}
            </Reveal>

            <Reveal>
              <div className="bg-navy-900 rounded-2xl p-8 text-white h-full">
                <h3 className="text-xl font-bold mb-6">Business Information</h3>
                <ul className="space-y-5">
                  <li className="flex gap-4">
                    <MapPin size={20} className="text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-stone-300 text-sm">KwaZulu-Natal, South Africa</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Clock size={20} className="text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-stone-300 text-sm">Monday – Friday: 08:00 – 17:00</p>
                      <p className="text-stone-400 text-xs mt-1">Closed weekends & public holidays</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Phone size={20} className="text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Phone / WhatsApp</p>
                      <a href="tel:+27795244298" className="text-stone-300 text-sm hover:text-gold-400">+27 79 524 4298</a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Mail size={20} className="text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@alphaomegaadvisors.co.za" className="text-stone-300 text-sm hover:text-gold-400">info@alphaomegaadvisors.co.za</a>
                    </div>
                  </li>
                </ul>
                <div className="mt-8 pt-6 border-t border-navy-700">
                  <p className="text-stone-400 text-sm leading-relaxed">
                    Prefer WhatsApp? Use the green floating button for a quick structured enquiry that goes straight to our team.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
