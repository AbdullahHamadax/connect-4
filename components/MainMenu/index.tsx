import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";

const MainMenu = () => {
  const { start } = useAppContext();
  return (
    <main className="flex min-h-screen items-center justify-center bg-cDark">
      <div
        className="flex h-[27.1875rem] w-[30rem] flex-col items-center
      gap-8 rounded-[2.5rem] p-4 sm:border-[3px] sm:border-black sm:bg-cLight
      sm:px-8 sm:shadow-custom"
      >
        <Image src="images/logo.svg" alt="logo" width={52} height={52} />
        <div className="relative flex size-full flex-col items-center">
          onClick={() => start(false)}
          <Link
            href="/ingame"
            className="absolute flex h-[4.5rem] w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cYellow p-5 text-left text-mm font-bold shadow-custom
            transition-all hover:shadow-customHover active:mt-[0.3125rem] active:shadow-customActive"
          >
            PLAYER VS PLAYER
            <Image
              src="images/player-vs-player.svg"
              alt="logo"
              width={48}
              height={48}
            />
          </Link>
          <Link
            onClick={() => start(true)}
            href="/ingame"
            className="absolute top-1/3 flex h-[4.5rem] w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cRed p-5 text-left text-mm font-bold shadow-custom
            transition-all hover:shadow-customHover active:mt-[0.3125rem] active:shadow-customActive"
          >
            PLAYER VS CPU
            <Image
              src="images/player-vs-cpu.svg"
              alt="logo"
              width={48}
              height={48}
            />
          </Link>
          <Link
            className="absolute top-2/3 h-[4.5rem] w-full max-w-[25rem] rounded-[1.25rem]
             border-[3px] border-black bg-white p-5 text-left text-mm font-bold shadow-custom
           transition-all hover:shadow-customHover active:mt-[0.3125rem] active:shadow-customActive"
            href="/rules"
          >
            GAME RULES
          </Link>
        </div>
      </div>
    </main>
  );
};

export default MainMenu;
