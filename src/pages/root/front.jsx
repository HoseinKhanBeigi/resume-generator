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
            <span className="bold">HOSSEIN KHAN BEIGI</span>
            <span>hoseinkhanbeigi@gmail.com</span>
            <span>+989123979838</span>
          </div>
          <div className="fullName"></div>
        </div>
        <div className="section">
          <div style={{ fontSize: "16px" }} className="bold">
            SUMMARY
          </div>
        </div>
        <div
          className="section"
          style={{
            marginBottom: "8px",
            fontSize: "0.91rem",
          }}
        >
          Experienced Front-end Developer with over 8 years of professional
          experience, specializing in{" "}
          <span className="RobotoRegular">
            JavaScript, ReactJS, NextJS, TypeScript - Solidity - web3.js
          </span>{" "}
          . Passionate about building engaging user interfaces and enhancing
          user experiences, particularly in the travel industry. Adept at
          working in dynamic, agile environments and leveraging technical
          expertise to drive product improvements and innovations.
          {/* Experienced Frontend Developer with a strong background in<span className="RobotoRegular"> Svelte and
          SvelteKit/Sapper - React - Next.</span> Proficient in building
          high-performance web applications and implementing complex frontend
          solutions. Skilled in data-intensive frontend development and managing
          user interactions. Passionate about delivering exceptional user
          experiences and contributing to innovative projects in the crypto and
          Web3 space. */}
        </div>

        <div className="section">
          <div style={{ fontSize: "16px", color: "#686767" }}>
            Work Experience
          </div>
        </div>

        <div className="section">
          <div className="company-date">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="bold">Lead Front-end Developer</div>
              <div style={{ marginBottom: "6px", color: "#686767" }}>
                2022-current
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ color: "#686767" }}>kian Digital</div>
              <div style={{ color: "#686767" }}>Tehran</div>
            </div>
          </div>
          <div style={{ marginBottom: "6px", fontSize: "0.91rem" }}>
            {[
              "Led frontend implementation projects, ensuring efficient and user-friendly web interfaces using Angular framework.",
              "Collaborated with back-end developers and designers to translate business requirements into technical solutions.",
              "Implemented modern authentication mechanisms and integrated RESTful APIs to enhance application functionality.",
              "Conducted thorough testing using Karma and Jasmine to ensure code quality and reliability.",
              // "Developed user-facing features using React.js, ensuring high performance and responsiveness across various devices and browsers.",
              // "Developed and implemented new software programs using React.js and Node.js, contributing to the enhancement of the company's web applications.",
              // "Collaborated closely with department heads, developers, and tech support colleagues to communicate project requirements and resolve technical issues.",
              // "Conducted thorough testing of software products to identify and address bugs, ensuring high-quality deliverables.",
              // "Recommended improvements to existing software programs to enhance user experience and optimize performance.",
              // "Participated in cross-functional team meetings to ideate software solutions and contribute to product development strategies.",
              // "Led frontend development projects using Svelte and SvelteKit/Sapper, contributing to the maintenance and enhancement of existing codebase.",
              // "Implemented data-intensive features and managed complex user interactions to improve overall application performance",
              // "Collaborated with cross-functional teams to design and implement frontend solutions aligned with project requirements and timelines.",
              // "Conducted code reviews and provided constructive feedback to team members to ensure code quality and adherence to best practices.",
              // "Actively participated in architectural discussions and decision-making processes to drive frontend design improvements and innovation.",
              // "Pioneered the introduction and implementation of Next.js application as a cutting-edge technology within the company, driving its adoption across all projects and achieving a 50% reduction in load times.",
              // "Orchestrated the migration of three front-end applications from a legacy project to Next.js, Typescript, and React, resulting in a significant 40% boost in performance and scalability metrics, enhancing user experience and driving business growth.",
              // "Built Developed and Maintained 2 front-end applications from scratch with Next.js 13, Typescript",
              // "Led team of 3 front-end developers in a project, applying SOLID principles and using advanced Next.js features for optimized performance and SEO.",
            ].map((e) => (
              <li className="desc" key={e}>
                {e}
              </li>
            ))}
          </div>
        </div>
        <div className="section">
          <div className="company-date">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="bold">Senior Front-end Developer</div>
              <div>Parent {String.fromCharCode(62)} Children</div>
              <div style={{ marginBottom: "6px", color: "#686767" }}>
                2020-2023
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ color: "#686767" }}>Supnex</div>
              <div style={{ color: "#686767" }}> Dubai Remote</div>
            </div>
          </div>

          <div
            style={{
              marginBottom: "6px",
              fontSize: "0.91rem",
            }}
          >
            {[
              "spread team productivity by 10% through refactoring the project’s resources.",
              "Established and optimized a customized UI library incorporating Material Design principles, resulting in a 40% reduction in bundle size and a 70% increase in personalization metrics.",
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="bold">Front-end Developer</div>

              <div style={{ marginBottom: "6px", color: "#686767" }}>
                2017-2020
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ color: "#686767" }}>Elevāt</div>
              <div style={{ color: "#686767" }}> US Remote</div>
            </div>
          </div>

          <div
            style={{
              marginBottom: "6px",
              fontSize: "0.91rem",
            }}
          >
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="bold">FrontEnd Developer</div>
              <div style={{ marginBottom: "6px", color: "#686767" }}>
                2017-2019
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ color: "#686767" }}>Round Table Apps</div>
              <div style={{ color: "#686767" }}>Sydney, Australia Remote</div>
            </div>
          </div>

          <div
            style={{
              marginBottom: "6px",
              fontSize: "0.91rem",
            }}
          >
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
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="bold">javascript Developer</div>
              <div style={{ marginBottom: "6px", color: "#686767" }}>
                2015-2017
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ color: "#686767" }}>
                Datis Pars Java Solutions Co
              </div>
              <div style={{ color: "#686767" }}> Germany Remote</div>
            </div>
          </div>

          <div style={{ fontSize: "0.9rem" }}>
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
          <div
            style={{ fontSize: "0.9rem", marginBottom: "16px" }}
            className="RobotoRegular"
          >
            Languages: JavaScript - TypeScript - PHP
            <div className="RobotoRegular">
              Frameworks/Libraries: React - React - TypeScript - Styled
              components - web3.js - Apollo - Jest - React Testing Library -
              Chromatic - Cypress. - Next.js - Tailwind - CSS MongoDB -
              MariaDB/MySQL - Docker
            </div>
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

// "I am particularly drawn to Epilot's dedication to minimizing environmental impact through innovative engineering solutions. The company's emphasis on sustainability aligns with my belief that engineering should solve immediate challenges and contribute to a more sustainable and eco-friendly future. The prospect of working with a team that values environmental stewardship excites me because it presents an opportunity to apply my skills toward creating solutions that meet technical requirements and contribute to a greener and more responsible future.";
// new Promise();
