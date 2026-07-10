const projects = [
  {
    name: "Nutrilens",
    description:
      "An AI-powered application for nutrition and food analysis.",
    url: "https://nutrilens.omriweinstein.com",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-4xl">
        <section className="py-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest">
            Software Engineer
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Omri Weinstein
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-neutral-600">
            I build backend systems, AI products and developer tools.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-black px-5 py-3 text-white"
            >
              View projects
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-neutral-300 px-5 py-3"
            >
              GitHub
            </a>
          </div>
        </section>

        <section id="projects" className="py-16">
          <h2 className="text-3xl font-semibold">Projects</h2>

          <div className="mt-8 grid gap-6">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-500"
              >
                <h3 className="text-2xl font-semibold">{project.name}</h3>
                <p className="mt-3 text-neutral-600">
                  {project.description}
                </p>
                <p className="mt-5 font-medium">Open project →</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
