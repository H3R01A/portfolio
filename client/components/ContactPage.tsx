import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="outline-title flex flex-wrap items-center justify-center border-heroTheme-300 text-white">
      <h1 className="mt-24 flex w-full items-center justify-center text-3xl uppercase">
        It's dangerous to go into the world of web development alone.
      </h1>
      <h1 className="flex w-full items-center justify-center text-3xl uppercase">
        Take this!
      </h1>
      <h2 className="mt-12 flex w-full items-center justify-center text-3xl">
        Name: Aaron Allen
      </h2>
      <h2 className="mt-4 flex w-full items-center justify-center text-3xl">
        Email: aallen0001@gmail.com
      </h2>
      <h3 className="mt-10 flex w-full items-center justify-center text-3xl uppercase">
        Thanks for Visiting!
      </h3>
      <Link to="/">
        <button className="font-serounded-lg outline-title text-shadow mt-6 rounded-md px-7 py-3.5 text-center font-buttonText text-portfolioNG uppercase text-white hover:animate-pulse hover:border-b-[3px] hover:border-l-[.3px] hover:border-r-[3px] hover:border-t-[.3px] hover:border-heroTheme-300 hover:bg-emerald-500 hover:text-black hover:shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)]">
          Back to Main Menu
        </button>
      </Link>
    </div>
  );
}
