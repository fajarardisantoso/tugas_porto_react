import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-white to-[#fdf6e3]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-8 bg-gradient-to-r from-[#c97500] to-[#ffcc00] bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-[#c97500]/30 bg-[#1a1a1a] hover:border-[#ffcc00] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,204,0,0.3)] transition">
              <h3 className="text-xl font-extrabold mb-2 text-[#ffcc00]">
                {" "}
                Cloud Platform
              </h3>
              <p className="text-[#e6e6e6] mb-4">
                Scalable cloud infrastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#c97500]/10 text-[#c97500] font-bold py-1 px-3 rounded-full text-sm hover:bg-[#c97500]/20 hover:text-white hover:shadow-[0_2px_8px_rgba(255,204,0,0.5)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.instagram.com/fajjardi_/"
                  target="_blank"
                  className="text-[#ffcc00] hover:text-white transition-colors my-4 font-bold"
                >
                  View Project → (bisa dipencet)
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-[#c97500]/30 bg-[#1a1a1a] hover:border-[#ffcc00] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,204,0,0.3)] transition">
              <h3 className="text-xl font-extrabold mb-2 text-[#ffcc00]">
                AI Analytics Dashboard
              </h3>
              <p className="text-[#e6e6e6] mb-4">
                ML-powered data visualization platform with predictive analytics
                and interactive reports.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#c97500]/10 text-[#c97500] font-bold py-1 px-3 rounded-full text-sm hover:bg-[#c97500]/20 hover:text-white hover:shadow-[0_2px_8px_rgba(255,204,0,0.5)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.instagram.com/fajjardi_/"
                  target="_blank"
                  className="text-[#ffcc00] hover:text-white transition-colors my-4 font-bold"
                >
                  View Project → (bisa dipencet)
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-[#c97500]/30 bg-[#1a1a1a] hover:border-[#ffcc00] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,204,0,0.3)] transition">
              <h3 className="text-xl font-extrabold mb-2 text-[#ffcc00]">
                E-Commerce Web App
              </h3>
              <p className="text-[#e6e6e6] mb-4">
                Full-stack e-commerce with modern UI, secure payment
                integration, and customizable product inventory.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-[#c97500]/10 text-[#c97500] font-bold py-1 px-3 rounded-full text-sm hover:bg-[#c97500]/20 hover:text-white hover:shadow-[0_2px_8px_rgba(255,204,0,0.5)] transition"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.instagram.com/fajjardi_/"
                  target="_blank"
                  className="text-[#ffcc00] hover:text-white transition-colors my-4 font-bold"
                >
                  View Project → (bisa dipencet)
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-[#c97500]/30 bg-[#1a1a1a] hover:border-[#ffcc00] hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(255,204,0,0.3)] transition">
              <h3 className="text-xl font-extrabold mb-2 text-[#ffcc00]">
                Real-Time Chat App
              </h3>
              <p className="text-[#e6e6e6] mb-4">
                Scalable chat platform supporting real-time messaging, presence,
                and group chat features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-[#c97500]/10 text-[#c97500] font-bold py-1 px-3 rounded-full text-sm hover:bg-[#c97500]/20 hover:text-white hover:shadow-[0_2px_8px_rgba(255,204,0,0.5)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://www.instagram.com/fajjardi_/"
                  target="_blank"
                  className="text-[#ffcc00] hover:text-white transition-colors my-4 font-bold"
                >
                  View Project → (bisa dipencet)
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
