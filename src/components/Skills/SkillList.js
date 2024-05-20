//* Data Imports */
import { SKILL_LIST } from "../../data/Skills/skillsData";

//* Styles Imports */
import Styles from "../../styles/Skills/SkillList.module.scss";

const SkillList = () => (
  <div className={Styles.skillListContainer}>
    {SKILL_LIST.map((skill) => (
      <div className={Styles.skillCard} key={skill.key}>
        <span className={Styles.icons}>
          <skill.icon />
        </span>
        <span>{skill.name}</span>
      </div>
    ))}
  </div>
);

export default SkillList;
