import { OrderForm } from "@/components/OrderForm";

export const metadata = {
  title: "Order — Kalinga",
  description: "Place your order for Kalinga honey. 250ml / 500ml / 1L.",
};

export default function OrderPage({
  searchParams,
}: {
  searchParams: { flavor?: string };
}) {
  return (
    <div>
      <section className="max-w-5xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="label">Order</div>
        <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.95] text-cream mt-4">
          Bottled. <span className="italic gold-text">Sent.</span> Savoured.
        </h1>
        <p className="mt-6 text-cream/70 text-lg max-w-2xl">
          Tell us what you'd like, and where. Payment is handled separately —
          we email an invoice or a Razorpay link once your order is confirmed.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-24">
        <OrderForm initialFlavor={searchParams.flavor ?? null} />
      </section>
    </div>
  );
}
