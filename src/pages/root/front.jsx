import "./root.css";
export default function Root() {
  const myString = "Hello, World!";

  // Convert the string to a Uint8Array
  const encoder = new TextEncoder();
  const myUint8Array = encoder.encode(myString);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="fullName">
            <span className="bold" style={{ fontSize: "24px", marginBottom: "4px" }}>HOSSEIN KHAN BEIGI</span>
            <span style={{ fontSize: "14px", marginBottom: "2px" }}>hoseinkhanbeigi@gmail.com</span>
            <span style={{ fontSize: "14px" }}>+989123979838</span>
          </div>
        </div>

        <div className="section" style={{ marginTop: "16px" }}>
          <div style={{ fontSize: "16px", marginBottom: "8px" }} className="bold">
            SUMMARY
          </div>
          <div style={{ fontSize: "0.91rem", lineHeight: "1.5" }}>
            Front-end Developer with 8 years of experience in building scalable web applications using JavaScript, ReactJS, NextJS, and TypeScript. Specialized in blockchain development with Solidity and web3.js. Successfully delivered 15+ enterprise applications, achieving 40% performance improvements through optimized code and modern architecture. Led teams of up to 8 developers in implementing complex features while maintaining 95% code coverage through comprehensive testing.
          </div>
        </div>

        <div className="section" style={{ marginTop: "16px" }}>
          <div style={{ fontSize: "16px", marginBottom: "12px" }} className="bold">
            WORK EXPERIENCE
          </div>

          <div className="section" style={{ marginBottom: "20px" }}>
            <div className="company-date">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <div className="bold" style={{ fontSize: "15px" }}>Lead Front-end Developer</div>
                <div style={{ color: "#686767" }}>Jan 2022 - Present</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ color: "#686767" }}>kian Digital</div>
                <div style={{ color: "#686767" }}>Tehran</div>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.91rem", lineHeight: "1.5" }}>
              {[
                "Led frontend implementation of 3 major projects, reducing average page load time by 45% and increasing user engagement by 30% through optimized Angular framework implementation.",
                "Partnered with back-end developers and designers to translate business requirements into technical solutions, resulting in 20% faster feature delivery and 15% reduction in production bugs.",
                "Deployed modern authentication mechanisms and connected RESTful APIs, reducing security incidents by 90% and improving API response times by 40%.",
                "Conducted thorough testing using Karma and Jasmine, achieving 95% code coverage and reducing post-deployment issues by 60%.",
              ].map((e) => (
                <li key={e} style={{ marginBottom: "8px" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="section" style={{ marginBottom: "20px" }}>
            <div className="company-date">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <div className="bold" style={{ fontSize: "15px" }}>Senior Front-end Developer</div>
                <div style={{ color: "#686767" }}>Jan 2020 - Dec 2023</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ color: "#686767" }}>Supnex</div>
                <div style={{ color: "#686767" }}>Dubai Remote</div>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.91rem", lineHeight: "1.5" }}>
              {[
                "Accelerated team productivity by 10% through refactoring the project's resources, cutting feature implementation cycles by 25% and increasing code reusability by 40%.",
                "Established and enhanced a customized UI library incorporating Material Design principles, resulting in a 40% reduction in bundle size and a 70% increase in personalization metrics.",
                "Streamlined admin panel for product management, leading to a 10% support team efficiency improvement and reducing customer ticket resolution time by 35%.",
                "Coordinated with DevOps teams to containerize Gin applications using Docker, enhancing deployment efficiency by 25%, reducing deployment failures by 80%, and orchestrating seamless deployments with Kubernetes.",
              ].map((e) => (
                <li key={e} style={{ marginBottom: "8px" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="section" style={{ marginBottom: "20px" }}>
            <div className="company-date">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <div className="bold" style={{ fontSize: "15px" }}>Front-end Developer</div>
                <div style={{ color: "#686767" }}>Jan 2017 - Dec 2020</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ color: "#686767" }}>Elevāt</div>
                <div style={{ color: "#686767" }}>US Remote</div>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.91rem", lineHeight: "1.5" }}>
              {[
                "Developed and maintained a scalable admin panel that improved data processing efficiency by 40% through enhanced querying and visualization features, reducing report generation time from 2 hours to 30 minutes.",
                "Directed a team of 8 developers across 2 high-impact projects, delivering a 30% improvement in API response times through refined database schema design and efficient CRUD operations, resulting in 50% faster data retrieval.",
              ].map((e) => (
                <li key={e} style={{ marginBottom: "8px" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="section" style={{ marginBottom: "20px" }}>
            <div className="company-date">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <div className="bold" style={{ fontSize: "15px" }}>FrontEnd Developer</div>
                <div style={{ color: "#686767" }}>Jan 2017 - Dec 2019</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ color: "#686767" }}>Round Table Apps</div>
                <div style={{ color: "#686767" }}>Sydney, Australia Remote</div>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.91rem", lineHeight: "1.5" }}>
              {[
                "Created and launched a comprehensive network security dashboard that reduced incident response time by 35% through real-time data visualization and advanced filtering capabilities, processing 1M+ security events daily.",
                "Incorporated the library into projects developed with Polymer.js, Angular 2, React, and Vue 1, enhancing data visualization across diverse frameworks and accelerating feature delivery by 25%.",
              ].map((e) => (
                <li key={e} style={{ marginBottom: "8px" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>

          <div className="section" style={{ marginBottom: "20px" }}>
            <div className="company-date">
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <div className="bold" style={{ fontSize: "15px" }}>JavaScript Developer</div>
                <div style={{ color: "#686767" }}>Jan 2015 - Dec 2017</div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <div style={{ color: "#686767" }}>Datis Pars Java Solutions Co</div>
                <div style={{ color: "#686767" }}>Germany Remote</div>
              </div>
            </div>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "0.91rem", lineHeight: "1.5" }}>
              {[
                "Engineered a scalable security monitoring system that processed 2M+ daily events, reducing false positives by 40% and improving threat detection accuracy by 30%.",
                "Architected and deployed cross-framework visualization components that reduced development time by 35% and improved data rendering performance by 50% across multiple platforms.",
              ].map((e) => (
                <li key={e} style={{ marginBottom: "8px" }}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="section" style={{ marginTop: "16px" }}>
          <div style={{ fontSize: "16px", marginBottom: "12px" }} className="bold">
            SKILLS
          </div>
          <div style={{ fontSize: "0.91rem", lineHeight: "1.5" }}>
            <div style={{ marginBottom: "8px" }}>
              <span className="bold">Languages:</span> JavaScript, TypeScript, PHP
            </div>
            <div>
              <span className="bold">Frameworks/Libraries:</span> React, Next.js, Angular, Vue.js, Polymer.js, web3.js, Solidity
            </div>
            <div style={{ marginTop: "8px" }}>
              <span className="bold">Tools & Technologies:</span> Docker, Kubernetes, Jest, Karma, Jasmine, RESTful APIs, Material Design
            </div>
          </div>
        </div>

        <div className="section" style={{ marginTop: "16px" }}>
          <div style={{ fontSize: "16px", marginBottom: "12px" }} className="bold">
            EDUCATION
          </div>
          <div style={{ fontSize: "0.91rem", lineHeight: "1.5" }}>
            <div style={{ marginBottom: "4px" }}>
              <span className="bold">University of Sharif</span>
            </div>
            <div style={{ marginBottom: "4px" }}>
              Master in Artificial Intelligence
            </div>
            <div style={{ color: "#686767" }}>
              2013 - 2016
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// "I am particularly drawn to Epilot's dedication to minimizing environmental impact through innovative engineering solutions. The company's emphasis on sustainability aligns with my belief that engineering should solve immediate challenges and contribute to a more sustainable and eco-friendly future. The prospect of working with a team that values environmental stewardship excites me because it presents an opportunity to apply my skills toward creating solutions that meet technical requirements and contribute to a greener and more responsible future.";
// new Promise();
