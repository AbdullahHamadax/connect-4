import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";

const MainMenu = () => {
  const { start } = useAppContext();

  return (
    <div
      className="flex w-[30rem] flex-col items-center
      gap-8 rounded-[2.5rem] p-4 sm:border-[3px] sm:border-black
      sm:bg-cLight sm:p-8 sm:shadow-custom"
    >
      <Image src="images/logo.svg" alt="logo" width={52} height={52} />
      <div className="relative flex size-full flex-col items-center gap-6">
        <Link
          onClick={() => start(1)}
          href="/ingame"
          className="flex w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cRed p-5 text-left text-md font-bold text-white shadow-custom
            transition-all desktopHover:hover:border-cDark desktopHover:hover:shadow-customHover"
        >
          PLAY VS CPU (EASY)
          <Image
            src="images/player-vs-cpu.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>
        <Link
          onClick={() => start(2)}
          href="/ingame"
          className="flex w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cRed p-5 text-left text-md font-bold text-white
            shadow-custom transition-all desktopHover:hover:border-cDark desktopHover:hover:shadow-customHover"
        >
          PLAY VS CPU (MED)
          <Image
            src="images/player-vs-cpu.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>
        <Link
          onClick={() => start(3)}
          href="/ingame"
          className="flex w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cRed p-5 text-left text-md font-bold text-white
            shadow-custom transition-all desktopHover:hover:border-cDark desktopHover:hover:shadow-customHover"
        >
          PLAY VS CPU (HARD)
          <Image
            src="images/player-vs-cpu.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>
        <Link
          className="w-full max-w-[25rem] rounded-[1.25rem]
           border-[3px] border-black bg-white p-5 text-left text-md font-bold shadow-custom
           transition-all desktopHover:hover:border-cDark desktopHover:hover:shadow-customHover"
          href="/rules"
        >
          GAME RULES
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
