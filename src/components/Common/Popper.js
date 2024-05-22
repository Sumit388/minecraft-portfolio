//* Data Imports */
import { QUICK_LINKS } from "../../data/About/aboutData";

import Styles from "../../styles/Common/Popper.module.scss";

const Popper = () => {
  return (
    <div className={Styles.popperContainer}>
      {QUICK_LINKS.map((entry) => (
        <a key={entry?.id} href={entry.link} target="_blank" rel="noreferrer">
          {entry.name}
        </a>
      ))}
    </div>
  );
};

export default Popper;
