import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>Car Doctor Next</h2>
      <button className="btn">Button</button>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-ghost">Ghost</button>
      <button className="btn btn-link">Link</button>
    </main>
  );
}
