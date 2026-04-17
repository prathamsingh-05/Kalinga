import { getDb, type InquiryRow, type OrderRow } from "@/lib/db";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function AdminPage({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  const expected = process.env.ADMIN_TOKEN;
  const token = searchParams.token;

  if (!expected) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="card p-8">
          <div className="label">Admin</div>
          <h1 className="font-display text-4xl text-cream mt-2">Setup required</h1>
          <p className="text-cream/70 mt-4">
            Set <code className="text-honey-200">ADMIN_TOKEN</code> in
            <code className="text-honey-200"> .env.local</code> and visit{" "}
            <code className="text-honey-200">/admin?token=YOUR_TOKEN</code>.
          </p>
        </div>
      </div>
    );
  }

  if (token !== expected) {
    if (token) redirect("/admin");
    return (
      <div className="max-w-3xl mx-auto px-6 py-24">
        <div className="card p-8">
          <div className="label">Admin</div>
          <h1 className="font-display text-4xl text-cream mt-2">
            Restricted area
          </h1>
          <p className="text-cream/70 mt-4">
            Pass <code className="text-honey-200">?token=…</code> in the URL to
            view submissions.
          </p>
        </div>
      </div>
    );
  }

  const db = getDb();
  const inquiries = db
    .prepare("SELECT * FROM inquiries ORDER BY id DESC LIMIT 200")
    .all() as InquiryRow[];
  const orders = db
    .prepare("SELECT * FROM orders ORDER BY id DESC LIMIT 200")
    .all() as OrderRow[];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 space-y-14">
      <header>
        <div className="label">Admin · Internal view</div>
        <h1 className="font-display text-5xl text-cream mt-2">Submissions</h1>
        <p className="text-cream/60 text-sm mt-2">
          Latest 200 inquiries and orders. For production, restrict this route
          with auth middleware and an email notification pipeline.
        </p>
      </header>

      <section>
        <h2 className="font-display text-3xl text-cream">
          Inquiries <span className="text-honey-200">· {inquiries.length}</span>
        </h2>
        <div className="mt-6 overflow-x-auto card">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-cream/60 text-xs uppercase tracking-[0.22em]">
                <th className="p-4">ID</th>
                <th className="p-4">Date</th>
                <th className="p-4">Type</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Subject</th>
                <th className="p-4">Message</th>
                <th className="p-4">Meta</th>
              </tr>
            </thead>
            <tbody>
              {inquiries.map((r) => (
                <tr key={r.id} className="border-t border-[rgba(230,192,121,0.1)]">
                  <td className="p-4 text-honey-200">#{r.id}</td>
                  <td className="p-4 text-cream/70">{r.created_at}</td>
                  <td className="p-4 text-cream">{r.type}</td>
                  <td className="p-4 text-cream">{r.name}</td>
                  <td className="p-4 text-cream/80">{r.email}</td>
                  <td className="p-4 text-cream/80">{r.phone ?? "—"}</td>
                  <td className="p-4 text-cream/80">{r.subject ?? "—"}</td>
                  <td className="p-4 text-cream/80 max-w-[320px] whitespace-pre-wrap">{r.message}</td>
                  <td className="p-4 text-cream/60 text-xs max-w-[220px] whitespace-pre-wrap">
                    {r.meta ?? ""}
                  </td>
                </tr>
              ))}
              {inquiries.length === 0 && (
                <tr><td className="p-6 text-cream/60" colSpan={9}>No inquiries yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="font-display text-3xl text-cream">
          Orders <span className="text-honey-200">· {orders.length}</span>
        </h2>
        <div className="mt-6 overflow-x-auto card">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-cream/60 text-xs uppercase tracking-[0.22em]">
                <th className="p-4">ID</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4">Name</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Address</th>
                <th className="p-4">Items</th>
                <th className="p-4">Pay</th>
                <th className="p-4">Notes</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((r) => (
                <tr key={r.id} className="border-t border-[rgba(230,192,121,0.1)]">
                  <td className="p-4 text-honey-200">#{r.id}</td>
                  <td className="p-4 text-cream/70">{r.created_at}</td>
                  <td className="p-4 text-cream">{r.status}</td>
                  <td className="p-4 text-cream">{r.name}</td>
                  <td className="p-4 text-cream/80">
                    {r.email}
                    <br />
                    {r.phone}
                  </td>
                  <td className="p-4 text-cream/80 max-w-[260px]">
                    {r.address_line1}
                    {r.address_line2 ? `, ${r.address_line2}` : ""}
                    <br />
                    {r.city}, {r.state} {r.pincode}
                    <br />
                    {r.country}
                  </td>
                  <td className="p-4 text-cream/80 max-w-[260px] whitespace-pre-wrap">
                    {formatItems(r.items)}
                  </td>
                  <td className="p-4 text-cream/80">{r.payment_method}</td>
                  <td className="p-4 text-cream/70 max-w-[200px] whitespace-pre-wrap">
                    {r.notes ?? ""}
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr><td className="p-6 text-cream/60" colSpan={9}>No orders yet.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function formatItems(json: string): string {
  try {
    const items = JSON.parse(json) as {
      flavor: string;
      size: string;
      quantity: number;
    }[];
    return items.map((i) => `${i.quantity} × ${i.flavor} · ${i.size}`).join("\n");
  } catch {
    return json;
  }
}
