const MARKS = [
  { name: 'Associate General Accountant (SA)', src: '/aopata-associate-accountant.webp' },
  { name: 'Best of Durban', src: '/aopata-best-of-durban.webp' },
  { name: 'CoTE', src: '/aopata-cote.webp' },
  { name: 'SAIPA', src: '/aopata-saipa-square.webp' },
  { name: 'South African Institute of Professional Accountants', src: '/aopata-saipa-horizontal.webp' },
];

export default function Affiliations() {
  return <section className="py-16 bg-white border-t border-stone-100">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-10"><span className="section-tag">Professional Associations & Recognition</span>
        <h2 className="section-heading">Organisations & Recognition</h2>
        <div className="gold-bar mx-auto" />
        <p className="text-stone-500 text-sm max-w-2xl mx-auto">These logos appear in the company profile supplied by Alpha & Omega. They are shown for reference; their presence does not independently confirm current membership, accreditation or endorsement.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {MARKS.map(m=><div key={m.name} className="rounded-xl border border-stone-200 bg-white min-h-40 p-4 flex flex-col items-center justify-center text-center shadow-sm">
          <img src={m.src} alt={m.name} loading="lazy" className="w-full h-24 object-contain mb-3" />
          <span className="text-xs font-medium text-stone-600">{m.name}</span>
        </div>)}
      </div>
    </div>
  </section>;
}
