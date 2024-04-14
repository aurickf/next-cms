import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <h3>What is it?</h3>
      <p>This is a CMS Mockup implementation using Daisy UI and Next.JS</p>
      <h3>Can I get the source?</h3>
      <p>
        Yes, you can clone it from my{" "}
        <Link href="https://www.github.com/aurickf">github</Link>
      </p>
    </main>
  );
}
