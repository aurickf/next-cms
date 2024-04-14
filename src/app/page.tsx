import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2">
      <h3>What is it?</h3>
      <div>This is a CMS Mockup implementation using Daisy UI and Next.JS</div>
      <h3>Can I get the source?</h3>
      <div>
        Yes, you can clone it from my{" "}
        <Link className="underline" href="https://www.github.com/aurickf">
          github
        </Link>
      </div>
    </main>
  );
}
