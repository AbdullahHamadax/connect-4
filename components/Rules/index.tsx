import Image from "next/image";
import Link from "next/link";
const Rules = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cbgBlue">
      <div
        className="relative flex w-[30rem] flex-col gap-8
  rounded-[2.5rem] border-[3px] border-black bg-white
  p-8 shadow-custom"
      >
        <h1 className="text-center text-lg font-bold">RULES</h1>
        <div className="flex flex-col gap-4">
          <h2 className="text-mm font-bold text-cbgBlue">OBJECTIVE</h2>
          <p>
            Be the first player to connect 4 of the same colored discs in a row
            (either vertically, horizontally, or diagonally).
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-mm font-bold text-cbgBlue">HOW TO PLAY</h2>{" "}
          <ol className="ol">
            <li className="li">Red goes first in the first game.</li>
            <li className="li">
              Players must alternate turns, and only one disc can be dropped in
              each turn.
            </li>
            <li className="li">
              The game ends when there is a 4-in-a-row or a stalemate.
            </li>
            <li className="li">
              The starter of the previous game goes second on the next game.
            </li>
          </ol>
        </div>
        <Link
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2  rounded-full border-[3px] border-black bg-cButton  p-[0.1rem]"
          href="/"
        >
          <Image src="/images/check.svg" alt="Confirm" width={64} height={64} />
        </Link>
      </div>
    </main>
  );
};

export default Rules;
