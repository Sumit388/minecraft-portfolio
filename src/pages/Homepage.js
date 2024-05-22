//* Packages Imports */
import { Fragment, useEffect, useState } from "react";
import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

//* Components Imports */
import { Ground } from "../components/Ground";
import { Player } from "../components/Player";
import { FPV } from "../components/FPV";
import { Cubes } from "../components/Cubes";
import { TextureSelector } from "../components/TextureSelector";
import { Menu } from "../components/Menu";
import { Banner } from "../components/Banner";
import Modal from "../components/Common/Modal";

//* Data Imports */
import { BANNER_DATA } from "../data/Homepage/bannerData";

//* Styles Imports */
import Styles from "../styles/Home/Homepage.module.scss";

function Homepage() {
  const [sunPosition, setSunPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const [openPopper, setOpenPopper] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSunPosition((prevPosition) => {
        if (prevPosition === 500) {
          setDirection(-1);
          return prevPosition - 0.1;
        } else if (prevPosition === -500) {
          setDirection(1);
          return prevPosition + 0.1;
        } else {
          return prevPosition + direction;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div
      className={Styles.homepageContainer}
      onClick={() => setOpenPopper(false)}
    >
      <Canvas>
        <Sky sunPosition={[200, sunPosition, 20]} distance={500} />
        <ambientLight intensity={0.5} />
        <FPV />
        <Physics>
          <Player />
          <Cubes />
          {BANNER_DATA.map((data) => (
            <Fragment key={data.id}>
              <Banner data={data} />
            </Fragment>
          ))}
          <Ground />
        </Physics>
      </Canvas>
      <div className="absolute centered cursor">+</div>
      <TextureSelector />
      <Menu
        setOpenModal={setOpenModal}
        openPopper={openPopper}
        setOpenPopper={setOpenPopper}
      />
      {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  );
}

export default Homepage;
