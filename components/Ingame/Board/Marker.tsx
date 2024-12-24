import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
const Marker = ({ markerPosition }: { markerPosition: string }) => {
  const { isPlayer1Turn, gameOver } = useAppContext();
  let markerSrc = "";
  if (isPlayer1Turn) {
    markerSrc = "images/marker-blue.svg";
  } else {
    markerSrc = "images/marker-red.svg";
  }

  if (gameOver.winner) return <></>;

  return (
    <Image
      src={markerSrc}
      alt="Active Column Marker"
      height={26}
      width={32}
      className={`absolute ${markerPosition} top-0 hidden -translate-y-[110%] translate-x-[10%] lg:block`}
    />
  );
};
export default Marker;
