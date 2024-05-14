//* Components Imports */
import { Fragment } from "react/cjs/react.production.min";
import CommonHeading from "../components/Common/CommonHeading";
import ProjectsCards from "../components/Projects/ProjectsCards";

//* Data Imports */
import {
  PROJECTS_PAGE_DESCRIPTION,
  PROJECT_DETAILS,
} from "../data/Projects/projectsData";

//* Styles Imports */
import Styles from "../styles/Projects/ProjectPage.module.scss";

const Projects = () => (
  <div className={Styles.projectsContainer}>
    <CommonHeading description={PROJECTS_PAGE_DESCRIPTION} />
    {PROJECT_DETAILS.map((project) => (
      <Fragment key={project?.id}>
        <ProjectsCards details={project} />
      </Fragment>
    ))}
  </div>
);

export default Projects;
