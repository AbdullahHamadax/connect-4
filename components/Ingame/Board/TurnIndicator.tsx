import { useAppContext } from "@/context/AppContext";
import confetti from "canvas-confetti";
import { useEffect } from "react";

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

  useEffect(() => {
    if (gameOver.winner === 1) {
      const duration = 5000; // Confetti duration
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
      };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
          clearInterval(interval);
          return;
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [gameOver]);

  let winnerText = "";
  let WINTEXT = "";
  switch (gameOver.winner) {
    case 1:
      winnerText = "YOU";
      WINTEXT = "WIN";
      break;
    case 2:
      winnerText = "CPU";
      WINTEXT = "WIN";

      break;
    case 3:
      winnerText = "NO ONE WON";
      WINTEXT = "";
      break;
  }

  if (gameOver.winner)
    return (
      <div
        className="absolute bottom-0 left-1/2 z-40 flex -translate-x-1/2
        translate-y-[55%] flex-col rounded-[1.25rem] border-[3px]
        border-black bg-white p-1 px-10 text-center shadow-custom"
      >
        <h3 className="text-sm font-bold">{winnerText}</h3>
        <h2 className="text-mm font-bold">{WINTEXT}</h2>
        <button
          className="rounded-[1.25rem] bg-cButton px-4 py-2
        text-xs font-bold text-white transition-all hover:bg-cbrall"
          onClick={() => {
            const againSound = new Audio(
              "/audio/mixkit-completion-of-a-level-2063.wav"
            );
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
