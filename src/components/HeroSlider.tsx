import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Phone, MessageCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80',
    tag: 'Trusted Accounting Partners',
    heading: 'Professional Accounting',
    highlight: 'From Alpha to Omega',
    sub: 'Complete accounting, tax compliance and advisory services for businesses and individuals across KwaZulu-Natal.',
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80',
    tag: 'Tax & SARS Compliance',
    heading: 'Expert Tax Advisors',
    highlight: 'You Can Rely On',
    sub: 'From SARS eFiling and VAT returns to strategic tax planning — we keep you compliant and optimised.',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80',
    tag: 'Business Growth Support',
    heading: 'Bookkeeping to Boardroom',
    highlight: 'Full Spectrum Service',
    sub: 'Accurate books, clear financial statements and practical advice that helps your business thrive.',
  },
];

const TYPING_INTERVAL = 70;
const SLIDE_DURATION = 6000;

function useTypingEffect(text: string, active: boolean) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) { setDisplayed(''); setDone(false); return; }
    setDisplayed('');
    setDone(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(id); setDone(true); }
    }, TYPING_INTERVAL);
    return () => clearInterval(id);
  }, [text, active]);

  return { displayed, done };
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % SLIDES.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [next, isPaused]);

  const slide = SLIDES[current];
  const { displayed, done } = useTypingEffect(slide.highlight, true);

  return (
    <section
      className="relative h-[85vh] min-h-[560px] max-h-[900px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={s.image} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-900/70 to-navy-900/40" />
        </div>
      ))}

      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="max-w-2xl text-white">
          <span className="inline-block text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            {slide.tag}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            {slide.heading}
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold-400 mb-6 typing-cursor" style={{ fontFamily: 'Playfair Display, serif' }}>
            {displayed}
          </h2>
          <p className={`text-stone-200 text-base md:text-lg leading-relaxed mb-8 max-w-xl transition-opacity duration-500 ${done ? 'opacity-100' : 'opacity-0'}`}>
            {slide.sub}
          </p>
          <div className={`flex flex-wrap gap-3 transition-opacity duration-500 ${done ? 'opacity-100' : 'opacity-0'}`}>
            <a href="tel:+27795244298" className="inline-flex items-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-xl text-sm transition-all hover:-translate-y-0.5">
              <Phone size={16} /> Call +27 79 524 4298
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-white/40 hover:border-gold-400 hover:bg-gold-500/10 text-white font-semibold rounded-xl text-sm transition-all">
              <FileText size={16} /> Request a Quote
            </Link>
            <a href="https://wa.me/27795244298" className="inline-flex items-center gap-2 px-6 py-3.5 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl text-sm transition-all">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors" aria-label="Previous">
        <ChevronLeft size={22} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-sm transition-colors" aria-label="Next">
        <ChevronRight size={22} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-8 bg-gold-400' : 'w-1.5 bg-white/40'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
