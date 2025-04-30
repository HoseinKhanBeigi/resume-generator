import "./root.css";
export default function Root() {
  const myString = "Hello, World!";

  // Convert the string to a Uint8Array
  const encoder = new TextEncoder();
  const myUint8Array = encoder.encode(myString);
  return (
    <>
      <div className="container" style={{ maxWidth: "800px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#ffffff" }}>
        <div className="section" style={{ marginBottom: "24px" }}>
          <div className="fullName" style={{ textAlign: "center", paddingBottom: "16px", borderBottom: "2px solid #2c3e50" }}>
            <h1 style={{ fontSize: "28px", marginBottom: "8px", fontWeight: "bold", color: "#2c3e50", letterSpacing: "0.5px" }}>HOSSEIN KHAN BEIGI</h1>
            <div style={{ fontSize: "14px", color: "#666", marginBottom: "4px" }}>hoseinkhanbeigi@gmail.com</div>
            <div style={{ fontSize: "14px", color: "#666" }}>+989123979838</div>
          </div>
        </div>

        <div className="section" style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "18px", marginBottom: "12px", fontWeight: "bold", color: "#2c3e50", borderBottom: "2px solid #2c3e50", paddingBottom: "4px", textTransform: "uppercase" }}>Professional Summary</h2>
          <div style={{ fontSize: "14px", lineHeight: "1.6", color: "#333", textAlign: "justify" }}>
            Front-end Developer with 8 years of experience in building scalable web applications using JavaScript, ReactJS, NextJS, and TypeScript. Specialized in blockchain development with Solidity and web3.js. Successfully delivered 15+ enterprise applications, achieving 40% performance improvements through optimized code and modern architecture. Led teams of up to 8 developers in implementing complex features while maintaining 95% code coverage through comprehensive testing.
          </div>
        </div>

        <div className="section" style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "18px", marginBottom: "16px", fontWeight: "bold", color: "#2c3e50", borderBottom: "2px solid #2c3e50", paddingBottom: "4px", textTransform: "uppercase" }}>Professional Experience</h2>

          <div className="section" style={{ marginBottom: "20px", padding: "12px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
            <div className="company-date" style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#2c3e50" }}>Lead Front-end Developer</h3>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>January 2022 - Present</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>kian Digital</div>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>Tehran, Iran</div>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", lineHeight: "1.6", color: "#333" }}>
              {[
                "Led frontend implementation of 3 major projects, reducing average page load time by 45% and increasing user engagement by 30% through optimized Angular framework implementation.",
                "Partnered with back-end developers and designers to translate business requirements into technical solutions, resulting in 20% faster feature delivery and 15% reduction in production bugs.",
                "Deployed modern authentication mechanisms and connected RESTful APIs, reducing security incidents by 90% and improving API response times by 40%.",
                "Conducted thorough testing using Karma and Jasmine, achieving 95% code coverage and reducing post-deployment issues by 60%.",
              ].map((e) => (
                <li key={e} style={{ marginBottom: "8px", position: "relative" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="section" style={{ marginBottom: "20px", padding: "12px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
            <div className="company-date" style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#2c3e50" }}>Senior Front-end Developer</h3>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>January 2020 - December 2023</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>Supnex</div>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>Dubai, UAE (Remote)</div>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", lineHeight: "1.6", color: "#333" }}>
              {[
                "Accelerated team productivity by 10% through refactoring the project's resources, cutting feature implementation cycles by 25% and increasing code reusability by 40%.",
                "Established and enhanced a customized UI library incorporating Material Design principles, resulting in a 40% reduction in bundle size and a 70% increase in personalization metrics.",
                "Streamlined admin panel for product management, leading to a 10% support team efficiency improvement and reducing customer ticket resolution time by 35%.",
                "Coordinated with DevOps teams to containerize Gin applications using Docker, enhancing deployment efficiency by 25%, reducing deployment failures by 80%, and orchestrating seamless deployments with Kubernetes.",
              ].map((e) => (
                <li key={e} style={{ marginBottom: "8px", position: "relative" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="section" style={{ marginBottom: "20px", padding: "12px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
            <div className="company-date" style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#2c3e50" }}>Front-end Developer</h3>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>January 2017 - December 2020</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>Elevāt</div>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>United States (Remote)</div>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", lineHeight: "1.6", color: "#333" }}>
              {[
                "Developed and maintained a scalable admin panel that improved data processing efficiency by 40% through enhanced querying and visualization features, reducing report generation time from 2 hours to 30 minutes.",
                "Directed a team of 8 developers across 2 high-impact projects, delivering a 30% improvement in API response times through refined database schema design and efficient CRUD operations, resulting in 50% faster data retrieval.",
              ].map((e) => (
                <li key={e} style={{ marginBottom: "8px", position: "relative" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="section" style={{ marginBottom: "20px", padding: "12px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
            <div className="company-date" style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#2c3e50" }}>FrontEnd Developer</h3>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>January 2017 - December 2019</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>Round Table Apps</div>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>Sydney, Australia (Remote)</div>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", lineHeight: "1.6", color: "#333" }}>
              {[
                "Created and launched a comprehensive network security dashboard that reduced incident response time by 35% through real-time data visualization and advanced filtering capabilities, processing 1M+ security events daily.",
                "Incorporated the library into projects developed with Polymer.js, Angular 2, React, and Vue 1, enhancing data visualization across diverse frameworks and accelerating feature delivery by 25%.",
              ].map((e) => (
                <li key={e} style={{ marginBottom: "8px", position: "relative" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="section" style={{ marginBottom: "20px", padding: "12px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
            <div className="company-date" style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "bold", color: "#2c3e50" }}>JavaScript Developer</h3>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>January 2015 - December 2017</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>Datis Pars Java Solutions Co</div>
                <div style={{ color: "#666", fontSize: "14px", fontWeight: "500" }}>Germany (Remote)</div>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", lineHeight: "1.6", color: "#333" }}>
              {[
                "Engineered a scalable security monitoring system that processed 2M+ daily events, reducing false positives by 40% and improving threat detection accuracy by 30%.",
                "Architected and deployed cross-framework visualization components that reduced development time by 35% and improved data rendering performance by 50% across multiple platforms.",
              ].map((e) => (
                <li key={e} style={{ marginBottom: "8px", position: "relative" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section" style={{ marginBottom: "24px" }}>
          <h2 style={{ fontSize: "18px", marginBottom: "12px", fontWeight: "bold", color: "#2c3e50", borderBottom: "2px solid #2c3e50", paddingBottom: "4px", textTransform: "uppercase" }}>Technical Skills</h2>
          <div style={{ fontSize: "14px", lineHeight: "1.6", color: "#333" }}>
            <div style={{ marginBottom: "8px" }}>
              <span style={{ fontWeight: "bold", color: "#2c3e50" }}>Programming Languages:</span> JavaScript, TypeScript, PHP
            </div>
            <div style={{ marginBottom: "8px" }}>
              <span style={{ fontWeight: "bold", color: "#2c3e50" }}>Frontend Frameworks:</span> React, Next.js, Angular, Vue.js, Polymer.js
            </div>
            <div style={{ marginBottom: "8px" }}>
              <span style={{ fontWeight: "bold", color: "#2c3e50" }}>Blockchain Development:</span> Solidity, web3.js
            </div>
            <div>
              <span style={{ fontWeight: "bold", color: "#2c3e50" }}>DevOps & Tools:</span> Docker, Kubernetes, Jest, Karma, Jasmine, RESTful APIs, Material Design
            </div>
          </div>
        </div>

        <div className="section">
          <h2 style={{ fontSize: "18px", marginBottom: "12px", fontWeight: "bold", color: "#2c3e50", borderBottom: "2px solid #2c3e50", paddingBottom: "4px", textTransform: "uppercase" }}>Education</h2>
          <div style={{ fontSize: "14px", lineHeight: "1.6", color: "#333" }}>
            <div style={{ marginBottom: "4px" }}>
              <span style={{ fontWeight: "bold", color: "#2c3e50" }}>University of Sharif</span>
            </div>
            <div style={{ marginBottom: "4px" }}>
              Master of Science in Artificial Intelligence
            </div>
            <div style={{ color: "#666", fontWeight: "500" }}>
              January 2013 - December 2016
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// "I am particularly drawn to Epilot's dedication to minimizing environmental impact through innovative engineering solutions. The company's emphasis on sustainability aligns with my belief that engineering should solve immediate challenges and contribute to a more sustainable and eco-friendly future. The prospect of working with a team that values environmental stewardship excites me because it presents an opportunity to apply my skills toward creating solutions that meet technical requirements and contribute to a greener and more responsible future.";
// new Promise();
