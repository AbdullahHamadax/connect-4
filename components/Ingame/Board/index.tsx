import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import React, { useState } from "react";
import Chip from "./Chip";
import Marker from "./Marker";
import TurnIndicator from "./TurnIndicator";

const Board = () => {
  const { isMobile, play, board, vsCPU, isPlayer1Turn } = useAppContext();
  const [markerPosition, setMarkerPosition] = useState("lg:hidden");

  const handleOnMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.pageX - currentTargetRect.left;
    switch (true) {
      case eventOffsetX > 17 && eventOffsetX < 105:
        setMarkerPosition("left-[calc(35px+88px*0)]");
        break;
      case eventOffsetX > 105 && eventOffsetX < 193:
        setMarkerPosition("left-[calc(35px+88px*1)]");
        break;
      case eventOffsetX > 193 && eventOffsetX < 281:
        setMarkerPosition("left-[calc(35px+88px*2)]");
        break;
      case eventOffsetX > 281 && eventOffsetX < 369:
        setMarkerPosition("left-[calc(35px+88px*3)]");
        break;
      case eventOffsetX > 369 && eventOffsetX < 457:
        setMarkerPosition("left-[calc(35px+88px*4)]");
        break;
      case eventOffsetX > 457 && eventOffsetX < 545:
        setMarkerPosition("left-[calc(35px+88px*5)]");
        break;
      case eventOffsetX > 545 && eventOffsetX < 633:
        setMarkerPosition("left-[calc(35px+88px*6)]");
        break;
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    const currentTargetRect = event.currentTarget.getBoundingClientRect();
    const eventOffsetX = event.pageX - currentTargetRect.left;
    if (!(vsCPU && !isPlayer1Turn)) {
      if (isMobile) {
        switch (true) {
          case eventOffsetX > 9 && eventOffsetX < 55.6:
            play(0);
            break;
          case eventOffsetX > 55.6 && eventOffsetX < 102.2:
            play(1);
            break;
          case eventOffsetX > 102.2 && eventOffsetX < 148.8:
            play(2);
            break;
          case eventOffsetX > 148.8 && eventOffsetX < 195.4:
            play(3);
            break;
          case eventOffsetX > 195.4 && eventOffsetX < 242:
            play(4);
            break;
          case eventOffsetX > 242 && eventOffsetX < 288.6:
            play(5);
            break;
          case eventOffsetX > 288.6 && eventOffsetX < 335.2:
            play(6);
            break;
        }
      } else {
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
      }
    }
  };

  return (
    <div className="relative h-[19.375rem] w-[20.9375rem] cursor-pointer sm:order-none sm:h-[36.5rem] sm:w-[39.5rem]">
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
        onMouseLeave={() => setMarkerPosition("lg:hidden")}
        onMouseMove={handleOnMouseMove}
        onClick={handleClick}
      />
      <TurnIndicator />
      <Marker markerPosition={markerPosition} />
      {board.map((col, i) =>
        col
          .filter((chip) => chip !== 0)
          .map((chip, j) => (
            <Chip
              key={`${i}${j}`}
              col={i}
              row={j}
              color={chip === 1 ? "red" : "yellow"}
            />
          ))
      )}
    </div>
  );
};

export default Board;
