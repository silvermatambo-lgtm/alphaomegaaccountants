import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const IMAGES = [
  { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80', caption: 'Professional financial planning' },
  { src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80', caption: 'Accurate bookkeeping & analysis' },
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80', caption: 'Business growth support' },
  { src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80', caption: 'Client consultation' },
  { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80', caption: 'Team collaboration' },
  { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80', caption: 'Document review & compliance' },
  { src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80', caption: 'Professional advisory' },
  { src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80', caption: 'Meeting & strategy' },
];

function Reveal({ children, className = '', delay = '' }: { children: React.ReactNode; className?: string; delay?: string }) {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-up ${delay}` : 'opacity-0'}`}>
      {children}
    </div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="page-enter pt-24">
      <section className="bg-navy-900 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="section-tag text-gold-400">Our World</span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mt-2">Gallery</h1>
          <div className="gold-bar mx-auto" />
          <p className="text-stone-300 max-w-xl mx-auto mt-4">A glimpse into the professional environment and the work we do for our clients.</p>
        </div>
      </section>

      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.map((img, i) => (
              <Reveal key={i} delay={`delay-${(i % 4) * 100}`}>
                <button
                  onClick={() => setLightbox(i)}
                  className="gallery-item relative group rounded-xl overflow-hidden aspect-square bg-stone-200"
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/50 transition-all flex items-center justify-center">
                    <ZoomIn size={28} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-navy-900/95 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white hover:text-gold-400" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img src={IMAGES[lightbox].src} alt={IMAGES[lightbox].caption} className="max-h-[85vh] max-w-full rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
          <p className="absolute bottom-8 left-0 right-0 text-center text-white text-sm">{IMAGES[lightbox].caption}</p>
        </div>
      )}
    </div>
  );
}
