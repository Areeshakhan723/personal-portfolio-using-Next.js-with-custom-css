import Image from "next/image";
import { socialMedia } from "@/app/Constant";
import "./contact.css";

const page = () => {
  return (
    <section
      className="padding"
      style={{ background: "var(--custom-dark-gradient)" }}
    >
      <div className="max-container">
        <h1 className="head_text">
          <span style={{ color: "var(--blue)" }}> Contact </span> Me
        </h1>

        <div className="app__connect-overley padding-x">
          <div className="app__connect-div">
            <h1 className="app__connect-subHeading">Connect with me:</h1>
            <p>Satisfied with me? Please contact me</p>
            <div className="app__connect-links-div-overley">
              {socialMedia.map((icons) => (
                <div
                  className="app__connect-links-div flex__center"
                  key={icons.alt}
                >
                  <a
                    href={icons.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app__connect-links-img flex__center"
                  >
                    <Image
                      src={icons.src}
                      alt={icons.alt}
                      width={24}
                      height={24}
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="app__connect-input-div-overley">
            <div className="app__connect-input-div">
              <input
                type="text"
                placeholder="Full Name"
                className="app__connect-input"
              />
              <input
                type="email"
                placeholder="Email"
                className="app__connect-input"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="app__connect-input"
              />
              <textarea
                placeholder="Message"
                className="app__connect-input"
                style={{ height: "150px", fontSize: "medium" }}
              />
              <div className="app__connect-btn-overley">
                <button className="app__connect-btn">Send message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
