import { useAppContext } from "@/context/AppContext";
const TurnIndicator = () => {
  const { isPlayer1Turn, timer, gameOver, restart } = useAppContext();
  let indicatorText = "";
  let indicatorBg = "";
  if (isPlayer1Turn) {
    indicatorText = "Your TURN";
    indicatorBg = "bg-[url('/images/turn-background-blue.svg')]";
  } else {
    indicatorText = "CPU's TURN";
    indicatorBg = "bg-[url('/images/turn-background-red.svg')]";
  }
  if (gameOver.winner)
    return (
      <div
        className="absolute bottom-0 left-1/2 z-40 flex -translate-x-1/2
        translate-y-[55%] flex-col rounded-[1.25rem] border-[3px]
        border-black bg-white p-1 px-10 text-center shadow-custom"
      >
        <h3 className="text-sm font-bold">
          {gameOver.winner === 1 ? "YOU" : "CPU"}
        </h3>
        <h2 className="text-mm font-bold">WIN</h2>
        <button
          className="rounded-[1.25rem] px-4 py-2 text-xs
        font-bold text-white transition-all bg-cButton hover:bg-cbrall"
        onClick={() => {
          const againSound = new Audio('/audio/Ah Shit Here We Go Again GTA - QuickSounds.com.mp3');
          againSound.play();
          restart();
        }}
        >
          PLAY AGAIN
        </button>
      </div>
    );
  return (
    <div
      className={`absolute bottom-0 left-1/2 z-40 h-[7.375rem] w-[11.9375rem]
-translate-x-1/2 translate-y-[55%] py-10 text-center
${indicatorBg} bg-[length:11.9375rem_7.375rem]`}
    >
      <h3 className="text-sm font-bold text-white">{indicatorText}</h3>
      <h2 className="text-mm font-bold text-white">{timer}s</h2>
    </div>
  );
};
export default TurnIndicator;
