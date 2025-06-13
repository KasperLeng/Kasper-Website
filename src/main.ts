import './css/style.css';

const app = document.querySelector<HTMLDivElement>('#app');

if (app) {
  app.innerHTML = `
    <main>
      <header class="hero">
        <h1>Kasper Leng</h1>
        <p>Computer Science Student @ UBC / Software Developer</p>
        <div class="links">
          <a href="https://github.com/KasperLeng" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/kasper-leng/" target="_blank">LinkedIn</a>
        </div>
      </header>

      <section class="section">
        <h2>Projects</h2>
        <div class="card">
          <h3>Volvo Sales Dashboard</h3>
          <p>Designed in Figma for Microsoft Delivery Team and Volvo China sales.</p>
          <a href="https://www.figma.com/proto/dPWZ89dMNS9ZZBNGFXFDCm/Figma-basics?node-id=2392-2465">View Figma</a>
        </div>
        <div class="card">
          <h3>Prompt Engineering Platform</h3>
          <p>AI prompt platform to analyze customer feedback and extract insights.</p>
        </div>
        <div class="card">
          <h3>Battleship Game</h3>
          <p>Built with Java. Won best UI and game design award.</p>
          <a href="https://github.com/KasperLeng/Battleship">GitHub Repo</a>
        </div>
        <div class="card">
          <h3>Microsoft GPT Hackathon</h3>
          <p>Helped build a GPT-based car sales insight and lead conversion platform.</p>
        </div>
      </section>

      <section class="section">
        <h2>Experience</h2>
        <div class="card">
          <h3>Software Engineer Intern @ Microsoft</h3>
          <ul>
            <li>Built web apps with ChatGPT API and Azure</li>
            <li>Prompt engineering in English and Mandarin</li>
            <li>Designed dashboards in Figma</li>
          </ul>
        </div>
        <div class="card">
          <h3>Data Analyst @ Liuyang 5th Hospital</h3>
          <ul>
            <li>Recorded patient statistics</li>
            <li>Created trend reports and managed hospital data</li>
          </ul>
        </div>
      </section>

      <footer class="footer">
        <a href="Kasper%20Leng%20Resume.pdf" download>Download My Resume</a>
      </footer>
    </main>
  `;
}
