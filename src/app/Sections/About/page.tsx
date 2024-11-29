import "./about.css";

const page = () => {
  return (
    <section className="about__section">
      <div className="app__about padding">
        <div className="about__overlay-div">
          <h1 className="head_text">
            <span style={{ color: "var(--blue)" }}> About</span> Me
          </h1>
          <p className="about__para">
            Hi, I’m Areesha Khan, a passionate developer with a strong
            foundation in frontend development and UI/UX design. Over time, I’ve
            worked on multiple projects, refining my skills and bringing
            creative ideas to life. and UI UX designning <br />
            Now, I’m expanding my expertise by exploring backend technologies,
            aiming to build more dynamic and robust web applications. My journey
            is all about learning, growing, and turning ideas into reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
