import { type NextPage } from "next";
import Link from "next/link";
const NotFoundPage: NextPage = () => {
  return (
    <div className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-4 bg-cDark bg-[url('/images/latest.png')] bg-center text-center">
      <h1 className="text-lg text-slate-100">404</h1>
      <h2 className="text-slate-100">
        You have stumbled upon a non existent page my friend.
      </h2>
      <Link
        href={"/"}
        className="rounded-[1.25rem] bg-cRed px-4 py-2 text-xs
          font-bold text-white transition-all hover:bg-cYellow"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFoundPage;
