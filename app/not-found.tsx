import Link from "next/link";
import { type NextPage } from "next";
const NotFoundPage: NextPage = () => {
    return (
        
      <div
        className="bg-[url('/images/latest.png')] bg-center absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-[1rem] bg-cDark text-center"
      >
        <h1 className="text-lg text-slate-100">404</h1>
        <h2 className="text-slate-100">
          Nothing interesting to find here!
        </h2>
        <Link
          href={"/"}
          className="rounded-[1.25rem] bg-cRed px-[1rem] py-[0.5rem] text-xs
          font-bold text-white transition-all hover:bg-cYellow"
        >
          Go Back
        </Link>
      </div>
    );
  };
  
  export default NotFoundPage;