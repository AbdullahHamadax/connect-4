import { useAppContext } from "@/context/AppContext";
import Link from "next/link";

const Modal = () => {
  const { isPaused, togglePause, restart } = useAppContext();
  if (!isPaused) return <></>;

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-[rgba(0,0,0,0.5)]"
        onClick={togglePause}
      />
      <div
        className="absolute left-1/2 top-1/2 z-50 flex h-[30.6875rem] w-[30rem]
      max-w-[90%] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8
      rounded-[2.5rem] border-[3px] border-black bg-cbgBlue
      px-5 py-[1.875rem] shadow-custom sm:px-10 sm:py-[3.125rem]"
      >
        <h1 className="text-lg font-bold text-white">PAUSE</h1>
        <div className="relative flex size-full flex-col items-center gap-6">
          <button
            onClick={togglePause}
            className="w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-white p-5 text-center text-md font-bold shadow-custom
            transition-all desktopHover:hover:border-cbrall desktopHover:hover:shadow-customHoverR"
          >
            CONTINUE GAME
          </button>
          <button
            className="w-full max-w-[25rem] rounded-[1.25rem] border-[3px] border-black
            bg-white p-5 text-center text-md font-bold shadow-custom
            transition-all desktopHover:hover:border-cbrall desktopHover:hover:shadow-customHoverR"
            onClick={() => {
              restart();
              togglePause();
            }}
          >
            RESTART
          </button>
          <Link
            className="w-full max-w-[25rem] rounded-[1.25rem] border-[3px]
           border-black bg-cRed p-5 text-center text-md font-bold text-white shadow-custom
           transition-all desktopHover:hover:border-cbrall desktopHover:hover:shadow-customHoverR"
            href="/"
          >
            QUIT GAME
          </Link>
        </div>
      </div>
    </>
  );
};

export default Modal;
