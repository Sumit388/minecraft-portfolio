//* Components Imports */
import CommonHeading from "../components/Common/CommonHeading";
import SkillList from "../components/Skills/SkillList";

//* Data Imports */
import { SKILLS_PAGE_DESCRIPTION } from "../data/Skills/skillsData";

//* Styles Imports */
import Styles from "../styles/Skills/Skills.module.scss";

const Skills = () => (
  <div className={Styles.skillsContainer}>
    <CommonHeading description={SKILLS_PAGE_DESCRIPTION} activeTab="Skills" />
    <SkillList />
  </div>
);

export default Skills;
