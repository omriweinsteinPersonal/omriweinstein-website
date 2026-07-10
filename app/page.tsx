import Image from "next/image";

const projects = [
  {
    name: "Nutrilens",
    date: "2026",
    description: "An AI-powered application for nutrition and food analysis.",
    url: "https://nutrilens.omriweinstein.com",
    tags: ["AI", "Nutrition", "Computer Vision"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#242932] text-white">
      <div className="signal-field" aria-hidden="true">
        <span className="signal-ring ring-one" />
        <span className="signal-ring ring-two" />
        <span className="signal-ring ring-three" />
        <span className="signal-line line-one" />
        <span className="signal-line line-two" />
        <span className="signal-line line-three" />
        <span className="signal-dot dot-one" />
        <span className="signal-dot dot-two" />
        <span className="signal-dot dot-three" />
        <span className="signal-dot dot-four" />
        <span className="venture-panel panel-one">
          <span />
          <span />
          <span />
        </span>
        <span className="venture-panel panel-two">
          <span />
          <span />
          <span />
        </span>
        <span className="build-orbit orbit-one" />
        <span className="build-orbit orbit-two" />
      </div>

      <section className="relative z-10 flex min-h-[88svh] items-center justify-center px-6 py-20 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <h1 className="font-sans text-6xl font-bold tracking-tight text-white md:text-8xl">
            Omri Weinstein
          </h1>

          <nav className="mt-10 flex w-full max-w-[180px] flex-col gap-4 font-mono text-base text-black">
            <a
              href="https://www.linkedin.com/in/omriweinstein/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#f59a45] px-6 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ffad5f]"
            >
              LinkedIn
            </a>
          </nav>
        </div>
      </section>

      <section id="projects" className="relative z-10 px-6 pb-24 pt-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="sr-only">Projects</h2>

          <div className="grid justify-items-center gap-10">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group w-full max-w-xl overflow-hidden rounded bg-white text-[#2f2f2f] shadow-[0_18px_40px_rgba(0,0,0,0.32)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.42)]"
              >
                <div className="px-7 pb-7 pt-6 text-center">
                  <h3 className="font-mono text-3xl tracking-wide">
                    {project.name}
                  </h3>
                  <p className="mt-2 font-mono text-base text-neutral-500">
                    {project.date}
                  </p>
                  <p className="mx-auto mt-8 max-w-sm font-mono text-sm leading-6 text-neutral-500">
                    {project.description}
                  </p>
                </div>

                <div className="nutrilens-photo-frame relative h-[420px] overflow-hidden bg-[#eee4d7] sm:h-[460px]">
                  <Image
                    src="/nutrilens-scan.png"
                    alt="Phone camera scanning a bowl of food"
                    fill
                    sizes="(min-width: 768px) 576px, calc(100vw - 48px)"
                    unoptimized
                    className="object-contain p-4 transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex items-center justify-between px-7 py-6 font-mono text-sm">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-neutral-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xl text-neutral-500 transition group-hover:translate-y-1">
                    ↓
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
