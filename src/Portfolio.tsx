import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Portfolio() {
  return (
    <main className="bg-black text-white font-sans min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-5xl font-bold mb-4">Kasper Leng</h1>
        <p className="text-xl mb-6">Computer Science Student @ UBC / Software Developer</p>
        <div className="flex space-x-6 text-white">
          <a href="https://github.com/KasperLeng" target="_blank" className="hover:text-gray-400">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/kasper-leng/" target="_blank" className="hover:text-gray-400">
            <Linkedin size={28} />
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Volvo Sales Dashboard</h3>
            <p className="mb-2">Designed in Figma for Microsoft Delivery Team and Volvo China sales.</p>
            <a href="https://www.figma.com/proto/dPWZ89dMNS9ZZBNGFXFDCm/Figma-basics?node-id=2392-2465" className="text-blue-400">View Figma</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Prompt Engineering Platform</h3>
            <p>Custom AI prompt system to summarize and extract insights from customer feedback.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Battleship Game</h3>
            <p className="mb-2">Built with Java using OOP. Won best UI and Game Design award.</p>
            <a href="https://github.com/KasperLeng/Battleship" className="text-blue-400">View GitHub</a>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-2">Microsoft GPT Hackathon</h3>
            <p>Designed a car sales system with GPT-based insights and lead tracking features.</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-4">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-medium">Software Engineer Intern @ Microsoft</h3>
            <p className="text-sm text-gray-400">May 2024 – Sep 2024</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Built web apps with ChatGPT API and Azure.</li>
              <li>Prompt engineering in English and Mandarin.</li>
              <li>Designed dashboards in Figma and coded in C# / C++.</li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-medium">Data Analyst @ Liuyang 5th Hospital</h3>
            <p className="text-sm text-gray-400">Jun 2019 – Sep 2019</p>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Recorded patient statistics and created trend reports.</li>
              <li>Managed the database and improved reporting efficiency.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="text-center py-12">
        <a href="/Kasper%20Leng%20Resume.pdf" download className="text-white border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">Download Resume</a>
      </section>
    </main>
  );
}
