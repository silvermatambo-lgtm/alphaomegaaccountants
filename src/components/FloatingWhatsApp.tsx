import { useMemo, useState } from 'react';
import { MessageCircle, X, ArrowLeft, Send, CheckCircle2 } from 'lucide-react';

type Step = 'welcome' | 'name' | 'phone' | 'service' | 'message' | 'review';

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
const WHATSAPP_NUMBER = '27795244298';
const BUSINESS_NAME = 'Alpha and Omega Professional Accountants';

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>('welcome');
  const [data, setData] = useState({ name: '', phone: '', service: '', message: '' });

  const canContinue = useMemo(() => {
    if (step === 'name') return data.name.trim().length > 1;
    if (step === 'phone') return data.phone.trim().length > 6;
    if (step === 'service') return !!data.service;
    if (step === 'message') return data.message.trim().length > 2;
    return true;
  }, [step, data]);

  const next = () => {
    const order: Step[] = ['welcome', 'name', 'phone', 'service', 'message', 'review'];
    setStep(order[Math.min(order.indexOf(step) + 1, order.length - 1)]);
  };
  const back = () => {
    const order: Step[] = ['welcome', 'name', 'phone', 'service', 'message', 'review'];
    setStep(order[Math.max(order.indexOf(step) - 1, 0)]);
  };
  const sendToWhatsApp = () => {
    const text = `Hi ${BUSINESS_NAME}, I would like assistance.%0A%0AName: ${encodeURIComponent(data.name)}%0APhone: ${encodeURIComponent(data.phone)}%0AService: ${encodeURIComponent(data.service)}%0AMessage: ${encodeURIComponent(data.message)}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
    setOpen(false);
  };

  return (
    <div className="fixed bottom-[76px] right-4 z-50 md:bottom-8">
      {open && (
        <div className="animate-chat-slide mb-3 w-[calc(100vw-2rem)] max-w-[360px] overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl">
          <div className="bg-navy-900 px-5 py-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Alpha & Omega</p>
                  <p className="text-xs text-stone-300">WhatsApp Assistant • Online</p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-stone-300 hover:text-white">
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="p-5 max-h-[380px] overflow-y-auto">
            {step === 'welcome' && (
              <div className="space-y-4">
                <p className="text-stone-700 text-sm leading-relaxed">
                  Hello! Welcome to <strong>Alpha and Omega Professional Accountants</strong>. How can we assist you today?
                </p>
                <button onClick={next} className="w-full py-3 bg-navy-900 hover:bg-navy-800 text-white text-sm font-semibold rounded-xl transition-colors">
                  Start Enquiry
                </button>
              </div>
            )}

            {step === 'name' && (
              <div className="space-y-4">
                <p className="text-stone-700 text-sm font-medium">What is your name?</p>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
                <div className="flex gap-2">
                  <button onClick={back} className="px-4 py-2.5 border border-stone-200 rounded-xl text-sm text-stone-600 hover:bg-stone-50">
                    <ArrowLeft size={16} />
                  </button>
                  <button onClick={next} disabled={!canContinue} className="flex-1 py-2.5 bg-navy-900 hover:bg-navy-800 disabled:opacity-40 text-white text-sm font-semibold rounded-xl">
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 'phone' && (
              <div className="space-y-4">
                <p className="text-stone-700 text-sm font-medium">Best contact number?</p>
                <input
                  type="tel"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  placeholder="e.g. 079 524 4298"
                  className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                />
                <div className="flex gap-2">
                  <button onClick={back} className="px-4 py-2.5 border border-stone-200 rounded-xl text-sm text-stone-600 hover:bg-stone-50">
                    <ArrowLeft size={16} />
                  </button>
                  <button onClick={next} disabled={!canContinue} className="flex-1 py-2.5 bg-navy-900 hover:bg-navy-800 disabled:opacity-40 text-white text-sm font-semibold rounded-xl">
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 'service' && (
              <div className="space-y-4">
                <p className="text-stone-700 text-sm font-medium">Which service do you need?</p>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {SERVICES.map((s) => (
                    <button
                      key={s}
                      onClick={() => setData({ ...data, service: s })}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm border transition-colors ${
                        data.service === s
                          ? 'border-gold-500 bg-gold-50 text-navy-900 font-medium'
                          : 'border-stone-200 text-stone-600 hover:border-gold-300'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={back} className="px-4 py-2.5 border border-stone-200 rounded-xl text-sm text-stone-600 hover:bg-stone-50">
                    <ArrowLeft size={16} />
                  </button>
                  <button onClick={next} disabled={!canContinue} className="flex-1 py-2.5 bg-navy-900 hover:bg-navy-800 disabled:opacity-40 text-white text-sm font-semibold rounded-xl">
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 'message' && (
              <div className="space-y-4">
                <p className="text-stone-700 text-sm font-medium">Tell us more about your enquiry</p>
                <textarea
                  value={data.message}
                  onChange={(e) => setData({ ...data, message: e.target.value })}
                  placeholder="Brief details..."
                  rows={3}
                  className="w-full px-4 py-3 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-gold-500 resize-none"
                />
                <div className="flex gap-2">
                  <button onClick={back} className="px-4 py-2.5 border border-stone-200 rounded-xl text-sm text-stone-600 hover:bg-stone-50">
                    <ArrowLeft size={16} />
                  </button>
                  <button onClick={next} disabled={!canContinue} className="flex-1 py-2.5 bg-navy-900 hover:bg-navy-800 disabled:opacity-40 text-white text-sm font-semibold rounded-xl">
                    Review
                  </button>
                </div>
              </div>
            )}

            {step === 'review' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-green-600">
                  <CheckCircle2 size={18} />
                  <p className="text-sm font-medium">Please review your details</p>
                </div>
                <div className="bg-stone-50 rounded-xl p-4 text-sm space-y-2">
                  <p><span className="text-stone-500">Name:</span> <strong>{data.name}</strong></p>
                  <p><span className="text-stone-500">Phone:</span> <strong>{data.phone}</strong></p>
                  <p><span className="text-stone-500">Service:</span> <strong>{data.service}</strong></p>
                  <p><span className="text-stone-500">Message:</span> <strong>{data.message}</strong></p>
                </div>
                <div className="flex gap-2">
                  <button onClick={back} className="px-4 py-2.5 border border-stone-200 rounded-xl text-sm text-stone-600 hover:bg-stone-50">
                    <ArrowLeft size={16} />
                  </button>
                  <button onClick={sendToWhatsApp} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold rounded-xl">
                    <Send size={16} /> Send via WhatsApp
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => { setOpen(!open); setStep('welcome'); }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-400 transition-all hover:scale-105 animate-pulse-gold"
        aria-label="Open WhatsApp assistant"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
