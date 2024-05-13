//* Components Imports */
import CommonHeading from "../components/Common/CommonHeading";

//* Data Imports */
import { PROJECTS_PAGE_DESCRIPTION } from "../data/Projects/projectsData";

//* Styles Imports */
import Styles from "../styles/Projects/ProjectPage.module.scss";

const Projects = () => (
  <div className={Styles.projectsContainer}>
    <CommonHeading description={PROJECTS_PAGE_DESCRIPTION} />
  </div>
);

export default Projects;
