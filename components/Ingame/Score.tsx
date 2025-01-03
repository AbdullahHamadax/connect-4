import { useAppContext } from "@/context/AppContext";
import { motion } from "framer-motion";
import Image from "next/image";

const Score = ({ player }: { player: number }) => {
  const { vsCPU, player1Score, player2Score } = useAppContext();
  let src = "";
  let text = "";
  let score;
  switch (player) {
    case 1:
      src = "/images/you-svg (1).svg";
      text = "YOU";
      score = player1Score;
      break;
    case 2:
      switch (vsCPU) {
        case 1:
          src = "/images/easy.svg";
          text = "EASY CPU";
          break;
        case 2:
          src = "/images/med.svg";
          text = "MED CPU";
          break;
        case 3:
          src = "/images/hard.svg";
          text = "HARD CPU";
          break;
        default:
          src = "";
          break;
      }
      score = player2Score;
      break;
  }

  return (
    <div
      className={`${
        player === 1 ? "sm:flex-row" : "sm:flex-row-reverse"
      } relative flex h-[5.0625rem] w-[8.875rem] flex-col items-center justify-between
      rounded-[1.25rem] border-[3px] border-black bg-white
      py-2 shadow-custom sm:h-[6.25rem] sm:w-[17rem] sm:justify-around lg:h-40 lg:w-[8.8125rem]
      lg:flex-col lg:justify-end`}
    >
      <div
        className={`absolute top-1/2 h-[3.6875rem] w-[3.375rem] -translate-y-1/2
        lg:left-1/2 lg:top-0 lg:-translate-x-1/2
        ${
          player === 1
            ? "right-full translate-x-1/2"
            : "left-full -translate-x-1/2"
        }
        `}
      >
        <Image src={src} alt={text} fill />
      </div>
      <h2 className="font-bold sm:text-sm">{text}</h2>
      <motion.h2
        key={score}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          duration: 0.5,
          times: [0, 0.5, 1],
        }}
        className="font-bold sm:text-lg"
      >
        {score}
      </motion.h2>
    </div>
  );
};

export default Score;
