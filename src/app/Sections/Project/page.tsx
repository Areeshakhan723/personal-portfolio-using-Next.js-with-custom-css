import { projectsCards } from "@/app/Constant/index";
import ProjectsCards from "@/app/Component/ProjectCards/ProjecrCards";
import "./project.css"
const page = () => {
  return (
    <section style={{background : "var(--custom-dark-gradient)"}}>
      <div className="app__project-overley-div padding">
        <h1 className="head_text">
          My <span style={{color: "var(--blue)"}}>Portfolio</span>
        </h1>
        <div className="app__projectCards-overley padding-x max-container">
          {projectsCards.map((project) => (
            <ProjectsCards key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
