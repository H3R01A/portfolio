import { Link } from 'react-router-dom';

/**
Tailwind Notes
text-shadow is a custom utility b/c as of 12-16-23, Tailwind CSS does not support text shadow

Border is a one off because only need width side for one button

*/

export default function WelcomePage() {
  return (
    <>
      <section className="text-center">
        <Link to="/project">
          <button className="bg-herotheme-400 text-herotheme-300 inline-flex mt-60 px-5 py-5 text-portfolio uppercase font-serounded-lg text-center text-shadow border-t-[.3px] border-l-[.3px] border-r-[3px] border-b-[3px] shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)] border-herotheme-300 rounded-md">
            New Game
          </button>
        </Link>
      </section>
    </>
  );
}
