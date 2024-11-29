import "./skills.css";
import { education, skills } from "@/app/Constant";

const page = () => {
  return (
    <section className="padding skills-section">
      <div className="flex__center">
        <h1 className="head_text">
          More <span style={{ color: "var(--blue)" }}> About </span> Me
        </h1>
      </div>

      {/* Education */}
      <div className="app__info-overley padding max-container">
        <div className="app__education-info-content">
          <h2 className="app__education-heading">My Education</h2>
          {education.map(({ year, name, institute }, index) => (
            <div key={index}>
              <p className="app__education-year">{year}</p>
              <h4 className="app__education-subHeading">{name}</h4>
              <p className="app__education-para">{institute}</p>
            </div>
          ))}
        </div>
        {/* Skills */}
        <div className="app__skills-info-content">
          <h2 className="app__education-heading">My Skills</h2>

          {skills.map(({ name, percentage, maxWidth }, index) => (
            <div key={index} className="app__skills-div-overley">
              <div className="app__skills-div-content">
                <p className="app__skills-para-div">{name}</p>
                <p className="app__skills-percentage">{percentage}%</p>
              </div>

              {/* progress bar */}
              <div className="app__skills-scaleline-overley">
                <div
                  className="app__skills-scaleline"
                  style={{
                    width: `calc(${percentage}%)`, // Scale width according to percentage
                    maxWidth: maxWidth, // Apply maxWidth for large screens
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
