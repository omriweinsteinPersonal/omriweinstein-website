const projects = [
  {
    name: "Nutrilens",
    date: "2026",
    description: "An AI-powered application for nutrition and food analysis.",
    url: "https://nutrilens.omriweinstein.com",
    tags: ["AI", "Nutrition", "Computer Vision"],
  },
];

const backgroundNodes = [
  { label: "AI", top: "9%", left: "10%" },
  { label: "{ }", top: "24%", left: "78%" },
  { label: "API", top: "32%", left: "15%" },
  { label: "ML", top: "43%", left: "63%" },
  { label: "DATA", top: "55%", left: "8%" },
  { label: "TS", top: "68%", left: "75%" },
  { label: "SQL", top: "79%", left: "25%" },
  { label: "UX", top: "86%", left: "58%" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#242932] text-white">
      <div className="site-constellation" aria-hidden="true">
        {backgroundNodes.map((node, index) => (
          <span
            key={node.label}
            className="constellation-node"
            style={{ top: node.top, left: node.left }}
          >
            <span className="node-mark">{node.label}</span>
            {index < backgroundNodes.length - 1 ? (
              <span className="node-line" />
            ) : null}
          </span>
        ))}
      </div>

      <section className="relative z-10 flex min-h-[88svh] items-center justify-center px-6 py-20 text-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center">
          <h1 className="font-sans text-6xl font-bold tracking-tight text-white md:text-8xl">
            Omri Weinstein
          </h1>

          <p className="mt-6 border-r-2 border-[#f59a45] pr-2 font-mono text-base font-bold tracking-wide text-white md:text-lg">
            Creative Coding
          </p>

          <p className="mt-6 max-w-2xl font-mono text-sm leading-7 text-white/70 md:text-base">
            I make AI products, backend systems and practical tools with a
            clean interface and a little bit of play.
          </p>

          <nav className="mt-10 flex w-full max-w-[180px] flex-col gap-4 font-mono text-base text-black">
            <a
              href="#projects"
              className="rounded-full bg-[#f59a45] px-6 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ffad5f]"
            >
              Projects
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#f59a45] px-6 py-3 shadow-[0_10px_20px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ffad5f]"
            >
              GitHub
            </a>
          </nav>
        </div>
      </section>

      <section id="projects" className="relative z-10 px-6 pb-24 pt-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="sr-only">Projects</h2>

          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group overflow-hidden rounded bg-white text-[#2f2f2f] shadow-[0_18px_40px_rgba(0,0,0,0.32)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(0,0,0,0.42)]"
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

                <div className="nutrilens-preview" aria-hidden="true">
                  <div className="nutrition-panel">
                    <div>
                      <span>Protein</span>
                      <strong>31g</strong>
                    </div>
                    <div>
                      <span>Carbs</span>
                      <strong>42g</strong>
                    </div>
                    <div>
                      <span>Score</span>
                      <strong>92</strong>
                    </div>
                  </div>
                  <div className="scan-orbit" />
                  <div className="food-chip chip-one" />
                  <div className="food-chip chip-two" />
                  <div className="food-chip chip-three" />
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
