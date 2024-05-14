//* Data Imports */
import { CARD_LINKS } from "../../data/Projects/projectsData";

//* Styles Imports */
import Styles from "../../styles/Projects/ProjectsCard.module.scss";

const ProjectsCards = ({ details }) => (
  <div className={Styles.cardContainer}>
    <div className={Styles.imageContainer}>
      <img src={details?.imageUrl} />
    </div>
    <div className={Styles.detailsConatiner}>
      <div className={Styles.heading}>
        <h2>{details.title}</h2>
      </div>
      <div className={Styles.links}>
        {CARD_LINKS.map((link) => (
          <a
            key={link?.id}
            href={details?.[link?.slug]}
            target="_blank"
            rel="noreferrer"
          >
            {link.title}
          </a>
        ))}
      </div>
      <div className={Styles.description}>{details.description}</div>
    </div>
  </div>
);

export default ProjectsCards;
