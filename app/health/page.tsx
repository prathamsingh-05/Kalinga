export const metadata = {
  title: "Health & Nutrition — Kalinga Honey",
  description:
    "Nutritional profile, traditional uses, and responsible consumption of raw honey.",
};

const PROPERTIES = [
  {
    t: "Natural energy",
    d: "Raw honey is a whole-food source of fructose, glucose, and trace minerals — a clean lift without refined sugar.",
  },
  {
    t: "Antioxidants",
    d: "Dark varietals like Jamun carry higher levels of polyphenolic antioxidants.",
  },
  {
    t: "Throat & immunity",
    d: "A classic home remedy — a spoon of honey in warm water is a gentle daily ritual, especially in monsoon and winter.",
  },
  {
    t: "Prebiotic effect",
    d: "Raw honey contains small amounts of prebiotic oligosaccharides that support gut flora.",
  },
  {
    t: "Wound & skin care",
    d: "Long used topically for its mild antibacterial properties. (Consult a doctor for clinical use.)",
  },
  {
    t: "Unheated goodness",
    d: "Because we don't pasteurise, natural enzymes and pollen remain in the jar.",
  },
];

export default function HealthPage() {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="label">Health & Nutrition</div>
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-cream mt-4">
          One spoon, <span className="italic gold-text">every morning.</span>
        </h1>
        <p className="mt-6 text-cream/70 text-lg max-w-2xl">
          Honey is one of the oldest wellness staples on earth. Here's what goes
          into a jar of Kalinga — and what to expect from it.
        </p>
      </section>

      <div className="hairline" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid md:grid-cols-2 gap-10 items-start">
        <div className="card p-8">
          <div className="label">Typical Nutritional Snapshot · per 1 tbsp (~21g)</div>
          <div className="mt-6 grid grid-cols-2 gap-y-4">
            <Row k="Energy" v="~64 kcal" />
            <Row k="Carbohydrates" v="~17 g" />
            <Row k="— Natural sugars" v="~17 g" />
            <Row k="Protein" v="trace" />
            <Row k="Fat" v="0 g" />
            <Row k="Sodium" v="~1 mg" />
            <Row k="Pollen & enzymes" v="present (raw)" />
          </div>
          <p className="mt-6 text-xs text-cream/50 leading-relaxed">
            Indicative values. Final nutritional label and batch-wise lab
            certificate: <span className="text-honey-200">TBA</span>.
          </p>
        </div>

        <div className="space-y-5">
          <div className="label">Traditional uses</div>
          <ul className="space-y-4 text-cream/75 leading-relaxed">
            <li>· A spoon with warm water and lemon in the morning.</li>
            <li>· Ginger honey for sore throats, winter evenings, and long flights.</li>
            <li>· Tulsi honey as a daily immunity ritual.</li>
            <li>· Jamun honey, stirred into warm milk or black coffee.</li>
            <li>· Drizzled on yogurt, fruit, or warm roti.</li>
          </ul>
        </div>
      </section>

      <div className="hairline" />

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="label">Why raw honey is different</div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {PROPERTIES.map((p) => (
            <div key={p.t} className="card p-6">
              <div className="font-display text-2xl text-cream">{p.t}</div>
              <p className="mt-3 text-cream/70 text-sm leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="hairline" />

      <section className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
        <div className="card p-8">
          <div className="label">A word of care</div>
          <p className="mt-4 text-cream/70 leading-relaxed">
            Honey is a natural sugar — enjoy it mindfully. Raw honey should not
            be given to infants under 12 months. If you have specific health
            conditions (diabetes, allergies, immune conditions), consult your
            doctor before regular use. Statements above are based on
            traditional wisdom and general nutrition information and are not
            intended as medical advice.
          </p>
        </div>
      </section>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <>
      <div className="text-cream/70 text-sm">{k}</div>
      <div className="text-cream text-sm text-right">{v}</div>
    </>
  );
}
