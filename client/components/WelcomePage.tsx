import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <>
      <section className="text-center">
        <Link to="/project">
          <button className="bg-cyan-950 text-xanadu-50 rounded-lg text-center m-72 p-5 hover:bg-blue-300 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 shadow-md">
            New Game
          </button>
        </Link>
      </section>
    </>
  );
}
