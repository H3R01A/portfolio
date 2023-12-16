import { Link } from 'react-router-dom';

/**
Tailwind Notes
text-shadow is a custom utility b/c as of 12-16-23, Tailwind CSS does not support text shadow
 */

export default function WelcomePage() {
  return (
    <>
      <section className="text-center">
        <Link to="/project">
          <button className="bg-herotheme-400 text-herotheme-300 inline-flex mt-60 px-5 py-5 text-portfolio uppercase font-serounded-lg text-center text-shadow border border-herotheme-300 rounded-md">
            New Game
          </button>
        </Link>
      </section>
    </>
  );
}
