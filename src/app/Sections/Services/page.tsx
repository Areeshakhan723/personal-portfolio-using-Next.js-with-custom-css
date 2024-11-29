import ServicesCards from "@/app/Component/ServicesCards/ServicesCards";
import { services } from "@/app/Constant/index";
import "./services.css";


const page = () => {
  return (
    <section className="app__services-section padding">
      <div className="app__services-div-overlay flex__center">
        <h1 className="head_text" style={{color: "#0d98ba"}}>
          Services
        </h1>

        <div className="app__servicesCards-overlay">
          {services.map((cards) => (
            <ServicesCards key={cards.name} {...cards} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
