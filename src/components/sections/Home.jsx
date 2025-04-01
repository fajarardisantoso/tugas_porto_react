import { RevealOnScroll } from "../RevealOnScroll";
import myPhoto from "../../assets/fajarganteng.jpeg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-yellow-400 to-yellow-100"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-red-400 bg-clip-text text-transparent leading-tight">
            Hi, I'm Fajar Ardi
          </h1>

          <p className="text-gray-800 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex justify-center mt-8">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-yellow-500 shadow-lg">
              <img
                src={myPhoto}
                alt="Fajar Ardi"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="#projects"
              className="bg-yellow-500 text-white py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(245, 158, 11, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-yellow-600 text-yellow-700 py-3 px-6 rounded font-medium transition-all duration-200 
              hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(245, 158, 11, 0.2)] hover:bg-yellow-100"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
