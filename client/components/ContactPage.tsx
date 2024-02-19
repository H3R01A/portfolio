import { format } from 'prettier';
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';
import linkedIN from '../assets/LI-Logo-white.png';
import github from '../assets/GitHub_Logo_White.png';

export default function ContactPage() {
  return (
    <div className="outline-title flex flex-wrap items-center justify-center border-heroTheme-300 text-white">
      <h1 className="mt-24 flex w-full items-center justify-center text-3xl uppercase italic">
        <TypeAnimation
          style={{ whiteSpace: 'pre-line' }}
          sequence={[
            ` \"It's dangerous to go into the world of development alone. Take this!\"`,
          ]}
        ></TypeAnimation>
      </h1>
      <h1 className="outline-title mt-20 flex w-full items-center justify-center text-3xl uppercase">
        Name: Aaron Allen
      </h1>
      <h1 className="outline-title flex w-full items-center justify-center text-3xl uppercase">
        Email: aallen0001@gmail.com
      </h1>
      <div className="mt-8 flex flex-wrap items-center gap-x-6">
        <div className="border border-white px-7 py-3.5">
          <a href="https://www.linkedin.com/in/aaronrallen/" target="_blank">
            <img src={linkedIN} alt="LinkedIn Logo" width="120" />
          </a>
        </div>
        <div className="border border-white px-7 py-2">
          <a href="https://github.com/H3R01A" target="_blank">
            <img src={github} alt="LinkedIn Logo" width="100" />
          </a>
        </div>
      </div>
      <h3 className="outline-title mt-12 flex w-full items-center justify-center text-3xl uppercase">
        Thanks for Visiting!
      </h3>
      <Link to="/">
        <button className="font-serounded-lg outline-title hover:outline-title-none mt-12 rounded-md border-b-[3px] border-l-[.3px] border-r-[3px] border-t-[.3px] border-white px-7 py-3.5 text-center font-buttonText text-portfolioNG uppercase text-white hover:animate-pulse hover:border-b-[3px] hover:border-l-[.3px] hover:border-r-[3px] hover:border-t-[.3px] hover:border-heroTheme-300 hover:bg-emerald-500 hover:text-black hover:shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)]">
          Back to Main Menu
        </button>
      </Link>
    </div>
  );
}
