import "./root.css";
export default function Root() {
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="fullName">HOSSEIN KHAN BEIGI</div>
        </div>
        <div className="section">
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="line">Skills</div>
              <div className="contact">
                <div style={{ color: "rgb(0 56 127)" }}>me-h.vercel.app</div>
                <div style={{ color: "rgb(0 56 127)" }}>
                  hoseinkhanbeigi@gmail.com
                </div>
                <div style={{ color: "rgb(0 56 127)" }}>
                  github.com/HoseinKhanBeigi
                </div>
              </div>
            </div>
            <div className="boldspan"></div>
          </div>
          <div style={{ fontSize: "20px" }}>
            javascript - typescript - react - nextjs - vue - angular - redux -
            graphql - ngRx - Rxjs - vueX - service worker/PWA - nodejs - nestjs
            - git - docker - nosql/sql - mongodb - microservices - gRPC - golang
            - gin - mysql - mui - antd - pdf-lib puppeteer - animejs - gsap -
            unit-test
          </div>
        </div>
        <div className="section">
          <div className="line">Experience</div>
          <div className="boldspan"></div>
        </div>

        <div className="section">
          <div className="company-date">
            <div className="bold" style={{ fontSize: "20px" }}>
              {" "}
              Sr fullstack developer
            </div>
            <div className="bold">kian Digital</div>
            <div>Tehran-Iran remote</div>
            <div className="bold">05/2023 to Now</div>
          </div>

          <div className="decs">
            {`
-Led the successful front-end migration of a legacy project to Next.js, Typescript, and React, resulting in a 40% improvement in performance and scalability metrics.
`}
          </div>
          <div className="decs">
            {`
-  Spearheaded the implementation of RESTful APIs and microservices architecture, resulting in a 40% reduction in system downtime and improving overall system performance and reliability
`}
          </div>
          <div className="decs">
            {`
-Spearheaded the successful migration from a legacy relational database system to MongoDB, optimizing data storage and retrieval processes, leading to a 50% reduction in storage costs and a 30% increase in data processing speed.`}
          </div>
        </div>
        <div className="section">
          <div className="company-date">
            <div className="bold" style={{ fontSize: "20px" }}>
              {" "}
              Sr fullstack developer
            </div>
            <div className="bold">Supnex</div>
            <div>Dubai-UAE</div>
            <div className="bold">05/2020 to 02/2023</div>
          </div>
          <div className="achivments">
            <div className="decs">
              {`-Achieved a 20% improvement in codebase cleanliness and scalability by implementing best practices in Gin, including effective dependency injection and systematic code organization`}
            </div>
            <div className="decs">
              {`
-Seamless integration of gRPC services with the Gin framework, resulting in a 30% increase in backend architecture flexibility and comprehensiveness.
`}
            </div>
            <div className="decs">
              {`
-Collaborated with DevOps teams to containerize Gin applications using Docker, leading to a 25% improvement in deployment efficiency, and orchestrated seamless deployments with tools like Kubernetes.`}
            </div>
          </div>
        </div>
        <div className="section">
          <div className="company-date">
            <div className="bold" style={{ fontSize: "20px" }}>
              {" "}
              FrontEnd Developer
            </div>
            <div className="bold">Round Table Apps</div>
            <div>Sydney-NSW</div>
            <div className="bold">05/2017 to 02/2020</div>
          </div>

          <div className="achivments">
            <div className="decs">
              {`-Drove a 25% improvement in website performance by optimizing critical rendering paths, reducing page load times, and implementing lazy loading techniques.`}
            </div>
            <div className="decs">
              {`-Orchestrated effective teamwork among designers, back-end developers, and project managers, ensuring timely delivery of high-quality web solutions; achieved an outstanding 95% on-time project completion rate, exceeding industry benchmarks.`}
            </div>
          </div>
        </div>
        <div className="section">
          <div className="company-date">
            <div className="bold" style={{ fontSize: "20px" }}>
              {" "}
              javascript Developer
            </div>
            <div className="bold">Datis Pars Java Solutions Co</div>
            <div>Tehran - Munich</div>
            <div className="bold">05/2015 to 05/2017</div>
          </div>
          <div className="achivments">
            <div className="decs">
              {`-Took part in creating a complex admin panel for querying, manipulating, filtering, and visualizing data from a network security device.
`}
            </div>
            <div className="decs">
              {`
- Developed a custom chart library using D3.js.
`}
            </div>
            <div className="decs">
              {`
- Integrated the library into projects built with Polymer.js, Angular 2, React, and Vue 1, enhancing data visualization across diverse frameworks.`}
            </div>
          </div>
        </div>
        <div className="section">
          <div>
            <div className="line">Education</div>
            <div className="boldspan"></div>
          </div>
          <div className="company-date">
            <div className="bold">sharif univercity</div>

            <div>Tehran - Iran</div>
            <div className="bold">2010 to 2014</div>
          </div>
          <div> Major in computer engineering</div>
        </div>
      </div>
    </>
  );
}
