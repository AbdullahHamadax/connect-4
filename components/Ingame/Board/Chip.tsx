import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
const Chip = ({
  col,
  row,
  color,
}: {
  col: number;
  row: number;
  color: string;
}) => {
  const { isMobile, gameOver } = useAppContext();
  let xPosition = "";
  let yPosition = "";
  switch (row) {
    case 0:
      yPosition = "bottom-[calc(24px+46.8px*0)] sm:bottom-[calc(52px+88px*0)]";
      break;
    case 1:
      yPosition = "bottom-[calc(24px+46.8px*1)] sm:bottom-[calc(52px+88px*1)]";
      break;
    case 2:
      yPosition = "bottom-[calc(24px+46.8px*2)] sm:bottom-[calc(52px+88px*2)]";
      break;
    case 3:
      yPosition = "bottom-[calc(24px+46.8px*3)] sm:bottom-[calc(52px+88px*3)]";
      break;
    case 4:
      yPosition = "bottom-[calc(24px+46.8px*4)] sm:bottom-[calc(52px+88px*4)]";
      break;
    case 5:
      yPosition = "bottom-[calc(24px+46.8px*5)] sm:bottom-[calc(52px+88px*5)]";
      break;
  }
  switch (col) {
    case 0:
      xPosition = "left-[calc(7px+46.8px*0)] sm:left-[calc(17px+88px*0)]";
      break;
    case 1:
      xPosition = "left-[calc(7px+46.8px*1)] sm:left-[calc(17px+88px*1)]";
      break;
    case 2:
      xPosition = "left-[calc(7px+46.8px*2)] sm:left-[calc(17px+88px*2)]";
      break;
    case 3:
      xPosition = "left-[calc(7px+46.8px*3)] sm:left-[calc(17px+88px*3)]";
      break;
    case 4:
      xPosition = "left-[calc(7px+46.8px*4)] sm:left-[calc(17px+88px*4)]";
      break;
    case 5:
      xPosition = "left-[calc(7px+46.8px*5)] sm:left-[calc(17px+88px*5)]";
      break;
    case 6:
      xPosition = "left-[calc(7px+46.8px*6)] sm:left-[calc(17px+88px*6)]";
      break;
  }
  return (
    <div
      className={`absolute ${xPosition} ${yPosition} z-20 h-[45px] w-[40px] sm:h-[75px] sm:w-[70px]`}
    >
      {gameOver.winningChips.includes(`${col} ${row}`) && (
        <div
          className="absolute z-30 size-5 translate-x-1/2 translate-y-1/2 rounded-[50%]
      border-[6px] border-white sm:size-[2.125rem]"
        />
      )}
      <Image
        src={
          isMobile
            ? `images/counter-${color}-small.svg`
            : `images/counter-${color}-large.svg`
        }
        alt="Chip"
        fill
      />
    </div>
  );
};
export default Chip;
