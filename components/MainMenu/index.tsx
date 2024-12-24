import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import Link from "next/link";

const MainMenu = () => {
  const { start } = useAppContext();

  return (
    <div
      className="flex w-[30rem] flex-col items-center
      gap-8 rounded-[2.5rem] p-4 sm:border-[3px] sm:border-black
      sm:bg-cbgBlue sm:p-8 sm:shadow-custom"
    >
      <Image src="images/logo.svg" alt="logo" width={52} height={52} />
      <div className="relative flex size-full flex-col items-center gap-6">
        <Link
          onClick={() => {
            const levelSound =  new Audio('/audio/mixkit-game-level-completed-2059.wav');
            levelSound.play();
            start(1);
          }}
          href="/ingame"
          className="flex w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cButton p-5 text-left text-md font-bold text-white  shadow-custom
            transition-all desktopHover:hover:border-cbrEasy desktopHover:hover:shadow-customHoverE"
        >
          YOU VS AI (EASY)
          <Image
            src="/images/easy.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>
        <Link
          onClick={() => {
            const levelSound =  new Audio('/audio/mixkit-game-level-completed-2059.wav');
            levelSound.play();
            start(2);
          }}
          href="/ingame"
          className="flex w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cButton p-5 text-left text-md font-bold text-white
            shadow-custom transition-all desktopHover:hover:border-cbrMedium desktopHover:hover:shadow-customHoverM"
        >
          YOU VS AI (MED)
          <Image
            src="/images/med.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>
        <Link
          onClick={() => {
            const levelSound =  new Audio('/audio/mixkit-game-level-completed-2059.wav');
            levelSound.play();
            start(3);
          }}
          href="/ingame"
          className="flex w-full max-w-[25rem] items-center justify-between rounded-[1.25rem]
            border-[3px] border-black bg-cButton p-5 text-left text-md font-bold text-white
            shadow-custom transition-all desktopHover:hover:border-cbrHard desktopHover:hover:shadow-customHoverH"
        >
          YOU VS AI (HARD)
          <Image
            src="/images/hard.svg"
            alt="logo"
            width={48}
            height={48}
          />
        </Link>
        <Link
          className="w-full max-w-[25rem] rounded-[1.25rem]
           border-[3px] border-black bg-white p-5 text-left text-md font-bold shadow-custom
           transition-all desktopHover:hover:border-cbrall desktopHover:hover:shadow-customHoverR"
          href="/rules"
        >
          GAME RULES  
        </Link>
      </div>
    </div>
  );
};

export default MainMenu;
