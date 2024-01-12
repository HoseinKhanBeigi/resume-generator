import "./root.css";
export default function Root() {
  const myString = "Hello, World!";

  // Convert the string to a Uint8Array
  const encoder = new TextEncoder();
  const myUint8Array = encoder.encode(myString);

  console.log(myUint8Array.buffer);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="fullName">
            <span className="bold">HOSSEIN KHAN BEIGI</span>
            <span>hoseinkhanbeigi@gmail.com 09123979838</span>
          </div>
          <div className="fullName"></div>
        </div>
        {/* <div className="section">
          <div style={{ fontSize: "16px" }} className="bold">
            SUMMARY
          </div>
        </div> */}
        {/* <div className="section" style={{ marginBottom: "8px" }}>
          self-educated front-end developer with over 8 years of experience in
          javascript language and front-end technologies and a strong background
          in developing user interfaces and optimizing web performance across
          various industries, including Fintech, e-commerce, and Management
          Systems.
        </div> */}

        <div className="section">
          <div style={{ fontSize: "16px", color: "#686767" }}>
            Work Experience
          </div>
        </div>

        <div className="section">
          <div className="company-date">
            <div className="bold">Senior Fornt-end Developer</div>
            <div style={{ color: "#686767" }}>kian Digital</div>
            <div style={{ marginBottom: "6px", color: "#686767" }}>
              September 2023 - current
            </div>
          </div>
          <div style={{ marginBottom: "6px" }}>
            {[
              "Pioneered the introduction and implementation of Next.js as a cutting-edge technology within the company, driving its adoption across all projects and achieving a 50% reduction in load times.",
              "Led the successful front-end migration of a legacy project to Next.js, Typescript, and React, resulting in a 40% improvement in performance and scalability metrics.",
              "Spearheaded the adoption of a Design System Manager (DSM) to streamline UI component management, resulting in a 50% increase in development efficiency and ensuring consistent user experience throughout projects.",
              "Led team of 3 front-end developers in a project, applying SOLID principles and using advanced Next.js features for optimized performance and SEO.",
            ].map((e) => (
              <li className="desc" key={e}>
                {e}
              </li>
            ))}
          </div>
        </div>
        <div className="section">
          <div className="company-date">
            <div className="bold">Senior Front-end Developer</div>
            <div style={{ color: "#686767" }}>Supnex</div>
            <div style={{ marginBottom: "6px", color: "#686767" }}>
              June 2020 to December 2023
            </div>
          </div>

          <div style={{ marginBottom: "6px" }}>
            {[
              "spread team productivity by 10% through refactoring the project’s resources.",
              "Established the customized UI library with Material Design context, while bundle size was reduced by 40% personalization was increased to 70%. Transitioned from Webpack to Vite, resulting in a 3x application speed boost",
              "Enhanced admin panel for streamlined product management, leading to a 10% support team effciency addition.",
              "Collaborated with DevOps teams to containerize Gin applications using Docker, enhancing deployment efficiency by 25%, and orchestrating seamless deployments with Kubernetes.",
            ].map((e) => (
              <li className="desc" key={e}>
                {e}
              </li>
            ))}
          </div>
        </div>
        <div className="section">
          <div className="company-date">
            <div className="bold">Front-end Developer</div>
            <div style={{ color: "#686767" }}>Elevāt</div>
            <div style={{ marginBottom: "6px", color: "#686767" }}>
              June 2017 to December 2020
            </div>
          </div>

          <div style={{ marginBottom: "6px" }}>
            {[
              "developed services to send API requests, React components, snapshot and service tests for UI project.",
              " Collaborated with 8 developers on 2 high-impact projects, taking ownership of database schema design, API endpoint development, authentication implementation, and database CRUD operations.",
            ].map((e) => (
              <li className="desc" key={e}>
                {e}
              </li>
            ))}
          </div>
        </div>
        <div className="section">
          <div className="company-date">
            <div className="bold">FrontEnd Developer</div>
            <div style={{ color: "#686767" }}>Round Table Apps</div>
            <div style={{ marginBottom: "6px", color: "#686767" }}>
              June 2017 to December 2019
            </div>
          </div>

          <div style={{ marginBottom: "6px" }}>
            {[
              "Drove a 25% improvement in website performance by optimizing critical rendering paths, reducing page load times, and implementing lazy loading techniques.",
              "Orchestrated effective teamwork among designers, back-end developers, and project managers, ensuring timely delivery of high-quality web solutions; achieved an outstanding 95% on-time project completion rate, exceeding industry benchmarks.",
            ].map((e) => (
              <li className="desc" key={e}>
                {e}
              </li>
            ))}
          </div>
        </div>
        <div className="section" style={{ marginBottom: "8px" }}>
          <div className="company-date">
            <div className="bold">javascript Developer</div>
            <div style={{ color: "#686767" }}>Datis Pars Java Solutions Co</div>
            <div style={{ marginBottom: "6px", color: "#686767" }}>
              June 2015 to December 2017
            </div>
          </div>

          <div>
            {[
              "Took part in creating a complex admin panel for querying, manipulating, filtering, and visualizing data from a network security device.",
              "Integrated the library into projects built with Polymer.js, Angular 2, React, and Vue 1, enhancing data visualization across diverse frameworks",
            ].map((e) => (
              <li className="desc" key={e}>
                {e}
              </li>
            ))}
          </div>
        </div>
        <div className="section">
          <div style={{ fontSize: "16px" }} className="bold">
            SKILLS
          </div>
        </div>
        <div className="section">
          <div style={{ fontSize: "16px", marginBottom: "32px" }}>
            javascript - typescript - react - nextjs - vue - angular - redux -
            graphql - ngRx - Rxjs - vueX - service worker/PWA - nodejs - nestjs
            - git - docker - nosql/sql - mongodb - microservices - gRPC - golang
            - gin - mysql - mui - antd - pdf-lib puppeteer - animejs - gsap -
            unit-test
          </div>
        </div>
        <div className="section">
          <div className="section">
            <div style={{ fontSize: "16px" }} className="bold">
              Education
            </div>
          </div>

          <div className="company-date">
            <div>sharif univercity</div>
            <div>2013 to 2016</div>
          </div>
          <div> master in AI</div>
        </div>
      </div>
    </>
  );
}
