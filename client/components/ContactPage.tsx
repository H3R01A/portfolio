import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center flex-wrap">
      <h1 className="w-full uppercase text-3xl flex items-center justify-center mt-40">
        It's dangerous to go into the world of web development alone.
      </h1>
      <h1 className="w-full uppercase text-3xl flex items-center justify-center">
        Take this!
      </h1>
      <h2 className="w-full text-3xl flex items-center justify-center mt-32">
        Name: Aaron Allen
      </h2>
      <h2 className="w-full text-3xl flex items-center justify-center mt-4">
        Email: aallen0001@gmail.com
      </h2>
      <h3 className="w-full uppercase text-3xl flex items-center justify-center mt-12">
        Thanks for Visiting!
      </h3>
      <Link to="/">
        <button className="bg-heroTheme-400 text-heroTheme-300 inline-flex px-7 py-3.5 text-portfolioBTN uppercase font-serounded-lg text-center text-shadow font-buttonText border-t-[.3px] border-l-[.3px] border-r-[3px] border-b-[3px] shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)] border-heroTheme-300 rounded-md mt-12">
          Play Again?
        </button>
      </Link>
    </div>
  );
}
