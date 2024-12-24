"use client";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import Board from "./Board";
import Modal from "./Modal";
import Score from "./Score";

const Ingame = () => {
  const { restart, togglePause, gameOver } = useAppContext();
  let bgColor = "";
  switch (gameOver.winner) {
    case 0:
      bgColor = "bg-cbar";
      break;
    case 1:
      bgColor = "bg-cPlay";
      break;
    case 2:
      bgColor = "bg-cCpu";
      break;
  }

  
  return (
    <>
      <Modal />
      <div
        className={`absolute bottom-0 h-1/5 w-full rounded-t-[3.75rem] sm:h-[12.5rem] ${bgColor}`}
      />
      <div
        className="mx-auto flex w-[39.5rem] max-w-[90%] items-center
      justify-between py-4 tall:pb-14 tall:pt-8"
      >
        <button
          className="w-[6.75rem] rounded-[1.25rem] bg-cButton py-2 text-xs
        font-bold text-white transition-all hover:bg-cbrall"
          onClick={togglePause}
        >
          MENU
        </button>
        <div className="relative size-10 sm:size-[3.25rem]">
          <Image src="images/logo.svg" alt="logo" fill />
        </div>
        <button
          className="w-[6.75rem] rounded-[1.25rem] bg-cButton py-2 text-xs
        font-bold text-white transition-all hover:bg-cbrall"
          onClick={restart}
        >
          RESTART
        </button>
      </div>
      <div className="flex h-full flex-col items-center gap-4 lg:hidden tall:gap-10">
        <div className="flex max-w-[90%] gap-4 sm:gap-8">
          <Score player={1} />
          <Score player={2} />
        </div>
        <Board />
      </div>
      <div className="hidden items-center justify-center gap-10 lg:flex">
        <Score player={1} />
        <Board />
        <Score player={2} />
      </div>
    </>
  );
};

export default Ingame;
