import Image, { StaticImageData } from "next/image";
import React from "react";
import "./ProjectCards.css";
const ProjectsCards = ({
  imgURL,
  name,
  href,
}: {
  imgURL: string | StaticImageData;
  name: string;
  href: string;
}) => {
  return (
    <div className="projectCards__overley flex__center">
      <div className="projectCards__content flex__center">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Image
            src={imgURL}
            alt={`Project image for ${name}`}
            width={300}
            height={200}
            className="projectCard__content-img"
          />
        </a>
        <div className="projectCards__names-overley">
          <h2 className="projectCards__names">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
