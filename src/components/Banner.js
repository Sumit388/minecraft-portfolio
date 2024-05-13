import { useBox } from "@react-three/cannon";
import { blankTexture } from "../images/textures";

export const Banner = ({ data }) => {
  const [ref] = useBox(() => ({
    rotation: data.rotation,
    position: data.position,
    type: "Static",
  }));

  data.texture.repeat.set(1, 1);

  return (
    <mesh
      onClick={(e) => {
        e.stopPropagation();
        window.open(data.url);
      }}
      ref={ref}
      style={{ cursor: "pointer" }}
    >
      <boxBufferGeometry attach="geometry" args={data.size} />
      {[0, 1, 2, 3, 4, 5].map((val) => (
        <meshStandardMaterial
          key={val}
          attachArray="material"
          map={val === 5 || val === 4 ? data.texture : blankTexture}
          roughness={0.1}
          metalness={1.65}
        />
      ))}
    </mesh>
  );
};
