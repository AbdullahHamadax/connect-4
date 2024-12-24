import { type NextPage } from "next";
import Link from "next/link";
const NotFoundPage: NextPage = () => {
  return (
    <div className="bg-cDark absolute left-0 top-0 flex h-screen w-full flex-col  items-center justify-center gap-4 bg-[url('/images/latest.jpg')] bg-cover bg-center bg-no-repeat text-center">
      <h1 className="text-lg text-slate-100">404</h1>
      <h2 className="text-slate-100">
        You have stumbled upon a non existent page my friend.
      </h2>
      <Link
        href={"/"}
        className="bg-cRed hover:bg-cYellow rounded-[1.25rem] px-4 py-2
          text-xs font-bold text-white transition-all"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFoundPage;
