import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <div className="label">404 · Off the trail</div>
        <h1 className="font-display text-6xl md:text-8xl text-cream mt-4">
          <span className="italic gold-text">Nothing here.</span>
        </h1>
        <p className="mt-6 text-cream/70">
          Looks like this page drifted into the forest. Let's get you back.
        </p>
        <div className="mt-8 flex gap-3 justify-center flex-wrap">
          <Link href="/" className="btn btn-primary">Home</Link>
          <Link href="/catalog" className="btn btn-ghost">Catalog</Link>
        </div>
      </div>
    </div>
  );
}
