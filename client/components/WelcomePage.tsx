import { Link } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <>
      <section className="text-center">
        <h1 className="p-40 font-bold bg-blue-200">Welcome to My Site!</h1>
        <Link to="/project">
          <button className="bg-blue-500 rounded-lg text-center p-5 hover:bg-blue-300 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300">
            New Game
          </button>
        </Link>
      </section>
    </>
  );
}
