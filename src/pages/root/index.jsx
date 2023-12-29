import "./root.css";
export default function Root() {
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="fullName">HOSSEIN KHAN BEIGI</div>
        </div>
        <div className="section">
          <div style={{ fontSize: "16px" }} className="bold">
            SUMMARY
          </div>
        </div>
        <div className="section" style={{ marginBottom: "8px" }}>
          self-educated front-end developer with over 8 years of experience in
          javascript language and front-end technologies and a strong background
          in developing user interfaces and optimizing web performance across
          various industries, including Fintech, e-commerce, and Management
          Systems.
        </div>

        <div className="section">
          <div style={{ fontSize: "16px" }} className="bold">
            EXPERIENCE
          </div>
        </div>

        <div className="section">
          <div className="company-date">
            <div style={{ fontSize: "20px" }}>
              Sr fullstack developer - kian Digital
            </div>
            <div>05/2023 - current</div>
          </div>
          <ul>
            {[
              "Pioneered the introduction and implementation of Next.js as a cutting-edge technology within the company, driving its adoption across all projects and achieving a 50% reduction in load times.",
              "Led the successful front-end migration of a legacy project to Next.js, Typescript, and React, resulting in a 40% improvement in performance and scalability metrics.",
              "•  Spearheaded the adoption of a Design System Manager (DSM) to streamline UI component management, resulting in a 50% increase in development efficiency and ensuring consistent user experience throughout projects.",
              "Led team of 3 front-end developers in a project, applying SOLID principles and using advanced Next.js features for optimized performance and SEO.",
            ].map((e) => (
              <li className="desc" key={e}>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="section">
          <div className="company-date">
            <div style={{ fontSize: "20px" }}>
              Sr fullstack developer - Supnex
            </div>
            <div>05/2020 - 02/2023</div>
          </div>

          <ul>
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
          </ul>
        </div>
        <div className="section">
          <div className="company-date">
            <div style={{ fontSize: "20px" }}>fullstack Developer - Elevāt</div>
            <div>05/2019 - 02/2020</div>
          </div>

          <ul>
            {[
              "developed services to send API requests, React components, snapshot and service tests for UI project.",
              " Collaborated with 8 developers on 2 high-impact projects, taking ownership of database schema design, API endpoint development, authentication implementation, and database CRUD operations.",
            ].map((e) => (
              <li className="desc" key={e}>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="section">
          <div className="company-date">
            <div style={{ fontSize: "20px" }}>
              FrontEnd Developer - Round Table Apps
            </div>
            <div>05/2017 - 02/2020</div>
          </div>

          <ul>
            {[
              "Drove a 25% improvement in website performance by optimizing critical rendering paths, reducing page load times, and implementing lazy loading techniques.",
              "Orchestrated effective teamwork among designers, back-end developers, and project managers, ensuring timely delivery of high-quality web solutions; achieved an outstanding 95% on-time project completion rate, exceeding industry benchmarks.",
            ].map((e) => (
              <li className="desc" key={e}>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="section" style={{ marginBottom: "8px" }}>
          <div className="company-date">
            <div style={{ fontSize: "20px" }}>
              javascript Developer - Datis Pars Java Solutions Co
            </div>
            <div>05/2015 - 05/2017</div>
          </div>

          <ul>
            {[
              "Took part in creating a complex admin panel for querying, manipulating, filtering, and visualizing data from a network security device.",
              "Integrated the library into projects built with Polymer.js, Angular 2, React, and Vue 1, enhancing data visualization across diverse frameworks",
            ].map((e) => (
              <li className="desc" key={e}>
                {e}
              </li>
            ))}
          </ul>
        </div>
        <div className="section">
          <div style={{ fontSize: "16px" }} className="bold">
            SKILLS
          </div>
        </div>
        <div className="section">
          <div style={{ fontSize: "16px" }}>
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
            <div>2010 to 2014</div>
          </div>
          <div> Major in computer engineering</div>
        </div>
      </div>
    </>
  );
}
