export const metadata = {
  title: "Privacy Policy — Kalinga",
  description:
    "How Kalinga collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div>
      <section className="max-w-4xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="label">Privacy</div>
        <h1 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1] text-cream mt-4">
          We keep it simple. <span className="italic gold-text">And private.</span>
        </h1>
      </section>

      <div className="hairline" />

      <section className="max-w-4xl mx-auto px-6 lg:px-10 py-14 space-y-10 text-cream/80 leading-relaxed">
        <Block title="What we collect">
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email, phone, and company (when you submit an inquiry).</li>
            <li>Delivery address and order items (when you place an order).</li>
            <li>Email address (when you subscribe to our newsletter).</li>
            <li>Basic anonymous usage data via server logs.</li>
          </ul>
        </Block>

        <Block title="How we use it">
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to your inquiry or deliver your order.</li>
            <li>To send the occasional update on new batches or collaborations (only if you've subscribed).</li>
            <li>To keep the site secure and improve it.</li>
          </ul>
        </Block>

        <Block title="What we don't do">
          <ul className="list-disc pl-6 space-y-2">
            <li>We do not sell your data.</li>
            <li>We do not share it with third parties except delivery / payment partners required to fulfill your order.</li>
            <li>We do not run ad-tracking scripts on this site.</li>
          </ul>
        </Block>

        <Block title="Your choices">
          <p>
            You can ask us to unsubscribe you, correct your details, or delete
            the records we have at any time. Email:{" "}
            <span className="text-honey-200">TBA</span>.
          </p>
        </Block>

        <Block title="Security">
          <p>
            Your data is stored on encrypted infrastructure. Payment
            credentials are never stored by us — Razorpay handles that
            (integration pending).
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
