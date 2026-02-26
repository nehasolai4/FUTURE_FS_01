function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-heading">MY WORKS</h2>

      <div className="projects-container">

        <div className="project-card">
          <div className="project-content">
            <h3>Developer Portfolio</h3>
            <p>
              A responsive portfolio built using React and modern CSS
              with reusable components and smooth UI interactions.
            </p>
          </div>
          <a href="#" className="project-btn">Check It Out</a>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>Quiz Web Application</h3>
            <p>
              An interactive React quiz that matches users to results
              using dynamic state and conditional rendering.
            </p>
          </div>
          <a href="#" className="project-btn">Check It Out</a>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>Moments in Envelopes</h3>
            <p>
              A React-based interactive UI with animated clickable
              elements that reveal dynamic content.
            </p>
          </div>
          <a href="#" className="project-btn">Check It Out</a>
        </div>

      </div>
    </section>
  );
}

export default Projects;