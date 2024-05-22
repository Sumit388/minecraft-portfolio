//* Packages Imports */
import { FaXmark } from "react-icons/fa6";

//* Styles Imports */
import Styles from "../../styles/Common/Modal.module.scss";

const Modal = ({ openModal, setOpenModal }) => (
  <div className={Styles.modalConatiner} onClick={(e) => e.stopPropagation()}>
    <button className={Styles.closeButton} onClick={() => setOpenModal(false)}>
      <FaXmark />
    </button>
    <div className={Styles.contentConatiner}>
      <ul>
        <li>Use Escape button to show the cursor once you are in Play Mode.</li>
        <li>Use Buttons W,A,D to move up, left and right respectively </li>
        <li>Use mouse to control the camera for the character.</li>
        <li>Click on the Banner to open the respective pages.</li>
        <li>Click on any block or surface to add the new block to them. </li>
        <li>
          Click alt + right mouse button to remove the blocks that you have
          added.
        </li>
        <li>
          Use number buttons 1,2,3,4,5 to change the blocks you have selected.
        </li>
        <li>
          If nothing is working for you click on "Not Working? Click Here"
          Button to select the page you want ot visit manually.
        </li>
      </ul>
    </div>
  </div>
);

export default Modal;
