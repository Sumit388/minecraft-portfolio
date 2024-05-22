//* Packages Imports */
import { useStore } from "../hooks/useStore";

//* Styles Imports */
import Styles from "../styles/Home/Menu.module.scss";
import Popper from "./Common/Popper";

export const Menu = ({ setOpenModal, openPopper, setOpenPopper }) => {
  const [saveWorld, resetWorld] = useStore((state) => [
    state.saveWorld,
    state.resetWorld,
  ]);

  const handleModalOpen = (e) => {
    setOpenModal(true);
    e.stopPropagation();
  };

  const handlePopperOpen = (e) => {
    setOpenPopper((openPopper) => !openPopper);
    e.stopPropagation();
  };

  return (
    <div className={Styles.menuContainer}>
      <button onClick={(e) => saveWorld(e)} className={Styles.menuButtonStyles}>
        Save
      </button>
      <button
        onClick={(e) => resetWorld(e)}
        className={Styles.menuButtonStyles}
      >
        Reset
      </button>
      <button onClick={handleModalOpen} className={Styles.menuButtonStyles}>
        Instructions
      </button>
      <div className={Styles.helpContainer}>
        <button onClick={handlePopperOpen} className={Styles.menuButtonStyles}>
          Not working? Click Here.
        </button>
        {openPopper && <Popper />}
      </div>
    </div>
  );
};
