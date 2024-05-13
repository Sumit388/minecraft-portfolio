//* Components Imports */
import DataGrid from "../components/About/DataGrid";
import CommonHeading from "../components/Common/CommonHeading";

//* Data Imports */
import { PAGE_DESCRIPTION } from "../data/About/aboutData";

//* Assets Imports */
import pixar from "../images/pixarBabyMe.jpg";

//* Styles Imports */
import Styles from "../styles/About/About.module.scss";

const About = () => {
  return (
    <div className={Styles.about}>
      <CommonHeading description={PAGE_DESCRIPTION} />
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
