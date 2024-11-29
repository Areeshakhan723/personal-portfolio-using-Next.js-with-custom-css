import { socialMedia } from "@/app/Constant/index";
import Image from "next/image";
import { profile } from "@/public/assets/images/index";
import rightarrow from "@/public/assets/images/rightarrow.svg";
import "./header.css";
const page = () => {
  return (
    <section className="header padding">
      <div className="header-overlay padding-x max-container">
        {/* Left Section */}
        <div className="heading">
          <h1 className="heading__h1">{`I'm Areesha Khan`}</h1>
          <p className="header__para">
            A Frontend Developer and UI Designer, Building Responsive and
            User-Centric Interfaces
          </p>
          <div className="header__btn-overlay">
            <button className="header__btn flex__center">
              Connect with me
              <Image
                src={rightarrow}
                alt="icon"
                width={25}
                height={25}
                className="header__btn-icon"
              />
            </button>
            <div className="header__social-icons-div-overlay">
              {socialMedia.map((icons) => (
                <div
                  className="header__social-icons-overlay flex__center"
                  key={icons.alt}
                >
                  <a
                    href={icons.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-img flex__center"
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
        </div>

        {/* Right Section */}
        <div className="header__profile-overlay flex__center">
          <Image
            src={profile}
            alt="Areesha Khan's profile picture"
            className="profile-img"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
