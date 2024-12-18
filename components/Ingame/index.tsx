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
      bgColor = "bg-cDark";
      break;
    case 1:
      bgColor = "bg-cRed";
      break;
    case 2:
      bgColor = "bg-cYellow";
      break;
  }
  return (
    <main className="relative flex min-h-screen flex-col items-center bg-cLight">
      <Modal />
      <div
        className={`absolute bottom-0 h-[12.5rem] w-full rounded-t-[3.75rem] ${bgColor}`}
      />
      <div className="absolute bottom-0 h-[12.5rem] w-full rounded-t-[3.75rem] bg-cDark" />
      <div className="mb-14 mt-8 flex w-[40rem] max-w-[90%] items-center justify-between">
        <button
          className="rounded-[1.25rem] bg-cDark px-4 py-2 text-xs
        font-bold text-white transition-all hover:bg-cRed"
          onClick={togglePause}
        >
          MENU
        </button>
        <Image src="images/logo.svg" alt="logo" width={48} height={48} />
        <button
          className="rounded-[1.25rem] bg-cDark px-4 py-2 text-xs
        font-bold text-white transition-all hover:bg-cRed"
          onClick={restart}
        >
          {" "}
          RESTART
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 lg:hidden">
        <div className="flex gap-4 sm:gap-8">
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
    </main>
  );
};

export default Ingame;
