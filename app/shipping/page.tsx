import Link from "next/link";

export const metadata = {
  title: "Shipping & Returns — Kalinga",
  description:
    "How we ship Kalinga honey and how we handle damaged or missing items.",
};

export default function ShippingPage() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="label">Shipping & Returns</div>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-cream mt-4">
          Sent with care. <span className="italic gold-text">Honoured if not.</span>
        </h1>
      </section>

      <div className="hairline" />

      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-14 space-y-10 text-cream/80 leading-relaxed">
        <Block title="Domestic Shipping (India)">
          <p>
            We ship pan-India. Orders are dispatched within <strong>2–4
            working days</strong> of payment confirmation. Transit time
            typically ranges <strong>3–7 working days</strong> depending on
            pincode. Carrier and exact rates: <span className="text-honey-200">TBA</span>.
          </p>
        </Block>

        <Block title="International Shipping">
          <p>
            International orders are accepted on request — please write to us
            via the{" "}
            <Link href="/contact" className="text-honey-200 underline">
              inquiry form
            </Link>{" "}
            with your country and quantity. Customs duties, if any, are
            payable by the recipient.
          </p>
        </Block>

        <Block title="Packaging">
          <p>
            All jars are double-sealed and individually cushioned. If a jar
            arrives damaged or leaking, take a photo before opening and write
            to us within <strong>48 hours</strong> — we'll send a replacement.
          </p>
        </Block>

        <Block title="Returns & Refunds">
          <p>
            Because honey is a perishable, consumable good, we can only accept
            returns in case of:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-3">
            <li>Damaged or leaking jars on arrival.</li>
            <li>Wrong item or missing item in the shipment.</li>
            <li>Manufacturing defects (seal broken, label missing, etc.).</li>
          </ul>
          <p className="mt-3">
            For any of the above, email us within 48 hours with your order ID
            and a photo. Refund, replacement, or store credit is issued within
            5–7 working days of confirmation.
          </p>
        </Block>

        <Block title="Cancellations">
          <p>
            Orders can be cancelled for a full refund any time before
            dispatch. Once dispatched, the standard returns policy applies.
          </p>
        </Block>

        <Block title="Contact">
          <p>
            Email / phone for all shipping issues:{" "}
            <span className="text-honey-200">TBA</span>.
          </p>
        </Block>

        <p className="text-xs text-cream/50">
          Last updated: placeholder. Final policy reviewed by counsel: TBA.
        </p>
      </section>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="font-display text-2xl text-cream mb-3">{title}</div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
