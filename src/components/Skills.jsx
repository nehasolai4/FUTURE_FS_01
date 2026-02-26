import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaJava 
} from "react-icons/fa";

function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills-heading">SKILLS</h2>

      <div className="skills-grid">
        <div className="skill-card">
          <FaReact size={45} />
          <div className="overlay">React</div>
        </div>

        <div className="skill-card">
          <FaHtml5 size={45} />
          <div className="overlay">HTML</div>
        </div>

        <div className="skill-card">
          <FaCss3Alt size={45} />
          <div className="overlay">CSS</div>
        </div>

        <div className="skill-card">
          <FaJs size={45} />
          <div className="overlay">JavaScript</div>
        </div>

        <div className="skill-card">
            <FaPython size={45} />
            <div className="overlay">Python</div>
            </div>

            <div className="skill-card">
            <FaJava size={45} />
            <div className="overlay">Java</div>
        </div>
      </div>
    </section>
  );
}

export default Skills;