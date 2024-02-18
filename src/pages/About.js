import Styles from "../styles/About/About.module.scss";
import pixar from "../images/pixarBabyMe.jpg";

import { SOCIAL_LINKS } from "../data/About/aboutData";
import DataGrid from "../components/About/DataGrid";

const About = () => {
  return (
    <div className={Styles.about}>
      <div className={Styles.headingContainer}>
        <h1>Sumit Mishra</h1>
        <button>Download C.V.</button>
      </div>
      <div className={Styles.subHeadingContainer}>
        <h2>Frontend Engineer | Software Developer</h2>
      </div>
      <p className={Styles.mainDescriptionPara}>
        I am highly motivated React Developer, proficient in building responsive
        and user-friendly web applications using React.js and modern web
        technologies.I have strong understanding of front-end development
        principles and best practices, with a keen eye for detail and a passion
        for creating seamless user experiences.
      </p>
      <div className={Styles.contactDetailsConatiner}>
        {SOCIAL_LINKS.map((social) => (
          <a href={social.link} alt={social.name} key={social.id}>
            <span>{social.icon} </span>
            <span>{social.name}</span>
          </a>
        ))}
      </div>
      <div className={Styles.infoSection}>
        <DataGrid />
      </div>
      <div className={Styles.imageConatiner}>
        <img src={pixar} alt="my pxar version" />
      </div>
    </div>
  );
};

export default About;
