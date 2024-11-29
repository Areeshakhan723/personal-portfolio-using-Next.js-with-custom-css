import Image, { StaticImageData } from "next/image";
import "./servicesCards.css";
const ServicesCards = ({
  imgURL,
  name,
}: {
  imgURL: string | StaticImageData;
  name: string;
}) => {
  return (
    <div>
      {/* card */}
      <div className="servicesCards__cards-overley">
        {/* Background Layer */}
        <div className="servicesCards__cards-bg-layer"></div>
        {/* content layer */}
        <div className="servicesCards__content-overley">
          <div className="servicesCards__content">
            <h3 className="servicesCards__heading">{name}</h3>
            <div className="servicesCards__Cards-imgs-overley" />
            <Image
              src={imgURL}
              alt="Services Cards"
              width={300}
              className="servicesCards__Cards-imgs"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCards;
