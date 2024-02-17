import Styles from "../styles/About/About.module.scss";
import pixar from "../images/pixarBabyMe.jpg";
import { Linkedin, GitHub, Twitter, Mail } from "react-feather";

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
      <p>
        I specialize in crafting intuitive web applications that prioritize user
        experience, drawing on my proficiency in Full-Stack Development. Eager
        to apply Front-end Development principles alongside seamless RESTful API
        integration, I aim to deliver cutting-edge and user-centric interfaces.
      </p>
      <div className={Styles.contactDetailsConatiner}>
        <button>
          <Linkedin /> LinkedIn
        </button>
        |{" "}
        <button>
          <GitHub />
          Github{" "}
        </button>
        |
        <button>
          {" "}
          <Twitter />
          Twitter{" "}
        </button>
        |{" "}
        <button>
          <Mail /> Email
        </button>
      </div>
      <div className={Styles.imageConatiner}>
        <img src={pixar} alt="my pxar version" />
      </div>
    </div>
  );
};

export default About;
