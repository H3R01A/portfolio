import { Link } from 'react-router-dom';

/**
Tailwind Notes
text-shadow is a custom utility b/c as of 12-16-23, Tailwind CSS does not support text shadow

Border is a one off because only need width side for one button

*/

type WelcomeProps = {
  setProjectNum: (num: number) => void;
};

export default function WelcomePage({ setProjectNum }: WelcomeProps) {
  setProjectNum(1);

  return (
    <>
      <section className="flex flex-col text-center">
        <Link to="/project">
          <button className="font-serounded-lg text-shadow mt-80 rounded-md px-7 py-3.5 text-center font-buttonText text-portfolioNG uppercase text-heroTheme-300 hover:border-b-[3px] hover:border-l-[.3px] hover:border-r-[3px] hover:border-t-[.3px] hover:border-heroTheme-300 hover:bg-heroTheme-400 hover:shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)]">
            New Game
          </button>
        </Link>
        <Link to="/about">
          <button className="font-serounded-lg text-shadow rounded-md px-7 py-3.5 text-center font-buttonText text-portfolioNG uppercase text-heroTheme-300 hover:border-b-[3px] hover:border-l-[.3px] hover:border-r-[3px] hover:border-t-[.3px] hover:border-heroTheme-300 hover:bg-heroTheme-400 hover:shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)]">
            About
          </button>
        </Link>
        <Link to="/contact">
        <button className="font-serounded-lg text-shadow rounded-md px-7 py-3.5 text-center font-buttonText text-portfolioNG uppercase text-heroTheme-300 hover:border-b-[3px] hover:border-l-[.3px] hover:border-r-[3px] hover:border-t-[.3px] hover:border-heroTheme-300 hover:bg-heroTheme-400 hover:shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)]">
            Contact
          </button>
        </Link>
      </section>
    </>
  );
}
