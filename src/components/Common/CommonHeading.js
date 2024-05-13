//* Data Imports */
import { SOCIAL_LINKS } from "../../data/About/aboutData";

//* Styles Imports */
import Styles from "../../styles/Common/CommonHeading.module.scss";

const CommonHeading = ({ description }) => (
  <div className={Styles.commonHeadingContainer}>
    {" "}
    <div className={Styles.headingContainer}>
      <h1>Sumit Mishra</h1>
      <button>Download C.V.</button>
    </div>
    <div className={Styles.subHeadingContainer}>
      <h2>Frontend Engineer | Software Developer</h2>
    </div>
    <p className={Styles.mainDescriptionPara}>{description}</p>
    <div className={Styles.contactDetailsConatiner}>
      {SOCIAL_LINKS.map((social) => (
        <a href={social.link} alt={social.name} key={social.id}>
          <span>{social.icon} </span>
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  </div>
);

export default CommonHeading;
