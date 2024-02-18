import { FIXED_BLOCKS } from "../data/Homepage/fixedBlocks";
import { useStore } from "../hooks/useStore";
import { Cube } from "./Cube";

export const Cubes = () => {
  const [cubes] = useStore((state) => [state.cubes]);
  return (
    <>
      {FIXED_BLOCKS.map(({ key, pos, texture }) => (
        <Cube key={key} position={pos} texture={texture} />
      ))}
      {cubes.map(({ key, pos, texture }) => (
        <Cube key={key} position={pos} texture={texture} />
      ))}
    </>
  );
};
