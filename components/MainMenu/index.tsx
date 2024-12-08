import Image from "next/image";
import Link from "next/link";

const MainMenu = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cDark">
      <div
        className="flex h-[27.1875rem] w-[30rem] flex-col items-center
            gap-8 rounded-[2.5rem] p-4 sm:border-[3px] sm:border-black sm:bg-cLight
            sm:px-8 sm:shadow-custom"
      >
        <Image src="images/logo.svg" alt="logo" width={52} height={52} />
        <div className="relative flex size-full flex-col items-center">
          <button
            className="f-m absolute flex h-[4.5rem] w-full max-w-[25rem] items-center 
            justify-between rounded-[1.25rem] border-[3px] border-black bg-cYellow p-5
            text-left shadow-custom active:me-[0.3125rem] active:shadow-customActive"
          >
            PLAY VS PLAYER
            <Image
              src="images/player-vs-player.svg"
              alt="logo"
              width={48}
              height={48}
            />
          </button>
          <button
            className="f-m absolute top-1/3 flex h-[4.5rem] w-full max-w-[25rem] items-center justify-between
                 rounded-[1.25rem] border-[3px] border-black bg-cRed p-5
                 text-left shadow-custom active:mt-[0.3125rem] active:shadow-customActive"
          >
            PLAY VS CPU
            <Image
              src="images/player-vs-cpu.svg"
              alt="logo"
              width={48}
              height={48}
            />
          </button>
          <Link
            className="f-m absolute top-2/3 h-[4.5rem] w-full max-w-[25rem]
                    rounded-[1.25rem] border-[3px] border-black bg-white p-5
                    text-left shadow-custom active:mt-[0.3125rem] active:shadow-customActive"
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