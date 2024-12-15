import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import React, { useState } from "react";

const Board = () => {
  const { isMobile, isPlayer1Turn, play } = useAppContext();
  let indicatorText = "";
  let indicatorBg = "";
  let markerSrc = "";
  const [markerPosition, setMarkerPosition] = useState("lg:hidden");
  if (isPlayer1Turn) {
    indicatorText = "PLAYER 1'S TURN";
    indicatorBg = "bg-[url('/images/turn-background-red.svg')]";
    markerSrc = "images/marker-red.svg";
  } else {
    indicatorText = "PLAYER 2'S TURN";
    indicatorBg = "bg-[url('/images/turn-background-yellow.svg')]";
    markerSrc = "images/marker-yellow.svg";
  }
  const handleOnMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.pageX - currentTargetRect.left;
    switch (true) {
      case eventOffsetX > 17 && eventOffsetX < 105:
        setMarkerPosition("left-[calc(17px+88px*0)]");
        break;
      case eventOffsetX > 105 && eventOffsetX < 193:
        setMarkerPosition("left-[calc(17px+88px*1)]");
        break;
      case eventOffsetX > 193 && eventOffsetX < 281:
        setMarkerPosition("left-[calc(17px+88px*2)]");
        break;
      case eventOffsetX > 281 && eventOffsetX < 369:
        setMarkerPosition("left-[calc(17px+88px*3)]");
        break;
      case eventOffsetX > 369 && eventOffsetX < 457:
        setMarkerPosition("left-[calc(17px+88px*4)]");
        break;
      case eventOffsetX > 457 && eventOffsetX < 545:
        setMarkerPosition("left-[calc(17px+88px*5)]");
        break;
      case eventOffsetX > 545 && eventOffsetX < 633:
        setMarkerPosition("left-[calc(17px+88px*6)]");
        break;
    }
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.pageX - currentTargetRect.left;
    switch (true) {
      case eventOffsetX > 17 && eventOffsetX < 105:
        play(0);
        break;
      case eventOffsetX > 105 && eventOffsetX < 193:
        play(1);
        break;
      case eventOffsetX > 193 && eventOffsetX < 281:
        play(2);
        break;
      case eventOffsetX > 281 && eventOffsetX < 369:
        play(3);
        break;
      case eventOffsetX > 369 && eventOffsetX < 457:
        play(4);
        break;
      case eventOffsetX > 457 && eventOffsetX < 545:
        play(5);
        break;
      case eventOffsetX > 545 && eventOffsetX < 633:
        play(6);
        break;
    }
  };

  return (
    <div
      className="relative order-last h-[19.375rem] w-[20.9375rem] cursor-pointer sm:order-none sm:h-[36.5rem] sm:w-[39.5rem]"
      onMouseLeave={() => setMarkerPosition("left-[-99rem]")}
      onMouseMove={handleOnMouseMove}
      onClick={handleClick}
    >
      <Image
        src={
          isMobile
            ? "images/board-layer-black-small.svg"
            : "images/board-layer-black-large.svg"
        }
        alt="Board"
        width={isMobile ? 335 : 632}
        height={isMobile ? 310 : 584}
        className="absolute z-10"
      />
      <Image
        src={
          isMobile
            ? "images/board-layer-white-small.svg"
            : "images/board-layer-white-large.svg"
        }
        alt="Board"
        width={isMobile ? 335 : 632}
        height={isMobile ? 310 : 584}
        className="absolute z-30"
      />
      <div
        className="absolute bottom-[calc(27px+47px*5)] left-[calc(9px+46.5px*6)] z-20
          h-[40px] w-[38px] sm:bottom-[calc(52px+88px*5)] sm:left-[calc(17px+88px*6)] sm:h-[75px] sm:w-[70px]"
      >
        <Image
          src={
            isMobile
              ? "images/counter-red-small.svg"
              : "images/counter-red-large.svg"
          }
          alt="Chip"
          fill
        />
      </div>
      <div
        className={`absolute bottom-0 left-1/2 z-40 h-[9.375rem] w-[11.9375rem]
      -translate-x-1/2 translate-y-[90%] py-10 text-center
      ${indicatorBg} bg-[length:11.9375rem_9.375rem]`}
      >
        <h3 className="text-xs font-bold">{indicatorText}</h3>
        <h2 className="text-lg font-bold">15s</h2>
      </div>
      <Image
        src={markerSrc}
        alt="Active Column Marker"
        height={26}
        width={32}
        className={`absolute ${markerPosition} top-0 hidden -translate-y-full translate-x-[60%] lg:block`}
      />
    </div>
  );
};
export default Board;
