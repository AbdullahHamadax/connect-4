"use client";
import checkWinCondition from "@/lib/checkWinCondition";
import minimax from "@/lib/minimax";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type ContextType = {
  board: number[][];
  player1Score: number;
  player2Score: number;
  timer: number;
  isPaused: boolean;
  gameOver: { winner: number; winningChips: string[] };
  player1Initiative: boolean;
  isPlayer1Turn: boolean;
  vsCPU: number;
  isMobile: boolean;
  start: (vsCPU: number) => void;
  play: (col: number) => void;
  restart: () => void;
  togglePause: () => void;
};

const defaultState = {
  board: [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ],
  player1Score: 0,
  player2Score: 0,
  timer: 30,
  isPaused: false,
  gameOver: { winner: 0, winningChips: [] },
  player1Initiative: true,
  isPlayer1Turn: true,
  vsCPU: 0,
  isMobile: false,
  start: function (_vsCPU: number) {},
  play: function (_col: number) {},
  restart: function () {},
  togglePause: function () {},
};

const AppContext = createContext<ContextType>(defaultState);

type PropsType = {
  children: ReactNode;
};

type GameOverType = {
  winner: number;
  winningChips: string[];
};

export const AppContextProvider = ({ children }: PropsType) => {
  const [board, setBoard] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ]);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [timer, setTimer] = useState(30);
  const [isPaused, setIsPaused] = useState(false);
  const [gameOver, setGameOver] = useState<GameOverType>({
    winner: 0,
    winningChips: [],
  });
  const [player1Initiative, setPlayer1Initiative] = useState(true);
  const [isPlayer1Turn, setIsPlayer1Turn] = useState(true);
  const [vsCPU, setVsCPU] = useState(0);
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 640 : false;

  const play = useCallback(
    (col: number) => {
      if (board?.[col]?.[5] === 0 && !gameOver.winner) {
        setBoard((prev) => {
          const current = [...prev];
          current[col] = [...prev[col]] as number[];
          for (let row = 0; row < current[col].length; row++) {
            if (current?.[col]?.[row] === 0) {
              current[col][row] = isPlayer1Turn ? 1 : 2;
              break;
            }
          }
          return [...current];
        });
        setIsPlayer1Turn((prev) => !prev);
        setTimer(30);
      }
    },
    [board, gameOver.winner, isPlayer1Turn]
  );

  const cpuAction = useCallback(() => {
    // const bestMove = pickBestMove(board, 2);
    let depth;
    switch (vsCPU) {
      case 1:
        depth = 1;
        break;
      case 2:
        depth = 4;
        break;
      case 3:
        depth = 7;
        break;
      default:
        depth = 7;
        break;
    }
    const [bestMove] = minimax(board, depth, -Infinity, Infinity, true);
    setTimeout(() => {
      play(bestMove);
    }, 500);
  }, [board, play, vsCPU]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (timer && !isPaused) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (!timer && !gameOver.winner) {
      if (isPlayer1Turn) {
        setGameOver((prev) => ({
          ...prev,
          winner: 2,
        }));
        setPlayer2Score((prev) => prev + 1);
      } else {
        setGameOver((prev) => ({
          ...prev,
          winner: 1,
        }));
        setPlayer1Score((prev) => prev + 1);
      }
      setPlayer1Initiative((prev) => !prev);
    }
    return () => clearInterval(interval);
  }, [gameOver.winner, isPaused, isPlayer1Turn, timer]);

  useEffect(() => {
    const { winner, winningChips } = checkWinCondition(board);
    if (winner && !gameOver.winner) {
      setGameOver({
        winner,
        winningChips,
      });
      setPlayer1Initiative((prev) => !prev);
      if (winner !== 3) {
        const youWinSound = new Audio('/audio/mixkit-video-game-win-2016.wav');
        const cpuWinSound = new Audio('/audio/mixkit-player-losing-or-failing-2042.wav');
      
        if (winner === 1) {
          setPlayer1Score((prev) => prev + 1);
          youWinSound.play();
        } else {
          setPlayer2Score((prev) => prev + 1);
          cpuWinSound.play();
        }
      }      
    } else if (!isPlayer1Turn && vsCPU) cpuAction();
  }, [board, cpuAction, gameOver.winner, isPlayer1Turn, vsCPU]);

  const start = (vsCPU: number) => {
    setBoard([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]);
    setPlayer1Initiative(true);
    setIsPlayer1Turn(true);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setIsPaused(false);
    setTimer(30);
    setGameOver({
      winner: 0,
      winningChips: [],
    });
    setVsCPU(vsCPU);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const restart = () => {
    setBoard([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]);
    setTimer(30);
    setGameOver({
      winner: 0,
      winningChips: [],
    });
    setIsPlayer1Turn(player1Initiative);
  };

  return (
    <AppContext.Provider
      value={{
        board,
        player1Score,
        player2Score,
        timer,
        isPaused,
        player1Initiative,
        isPlayer1Turn,
        gameOver,
        vsCPU,
        isMobile,
        start,
        play,
        togglePause,
        restart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
