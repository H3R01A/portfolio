import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="text-wrap outline-title flex flex-wrap items-center justify-center gap-y-6 text-center text-white">
      <div className="outline-title mt-8 flex w-full items-center justify-center text-3xl">
        <h1>About Me</h1>
      </div>
      <div className="outline-title text-wrap mx-8 mt-8 flex w-full flex-col items-center justify-center text-2xl">
        <p className="w-full indent-8">
          Aaron Allen is an active engineer with expertise in building{' '}
          <span className="inline flex-none	 text-emerald-500">full-stack</span>{' '}
          applications using technologies such as{' '}
          <span className="inline flex-none	 text-emerald-500">
            JavaScript (ES6+)
          </span>
          , <span className="inline flex-none	 text-emerald-500">React</span>,
          <span className="inline flex-none	 text-emerald-500">TypeScript</span>,{' '}
          <span className="inline flex-none	 text-emerald-500">Node.js</span>,{' '}
          <span className="inline flex-none	 text-emerald-500">
            Tailwind CSS
          </span>
          , <span className="inline flex-none	 text-emerald-500">Postgres</span>,
          and <span className="inline flex-none	 text-emerald-500">Docker</span>.
          He is passionate about creating engaging web experiences and follows
          empathetic development practices that prioritize user satisfaction.
          Aaron's commitment goes beyond meeting technical requirements; he
          actively considers the broader impact on users and stakeholders.
        </p>
        <br />
        <br />
        <p className="w-full indent-8">
          His recent focus has been on{' '}
          <a
            href="https://github.com/oslabs-beta/Codename-Hermes"
            target="_blank"
            className="text-emerald-500 underline decoration-emerald-500"
          >
            Codename Hermes
          </a>
          , an open-source project where he serves as an active contributor.
          Codename Hermes is a library designed to abstract the implementation
          of message brokers like{' '}
          <span className="inline flex-none	 text-emerald-500">Kafka</span> and{' '}
          <span className="inline flex-none	 text-emerald-500">RabbitMQ</span>,
          aiming to streamline the developer experience.
        </p>
        <br />
        <br />
        <p className="w-full indent-8">
          In addition to his technical prowess, Aaron brings strong
          collaboration as well as leadership and communication skills to his
          software engineering endeavors, ensuring effective teamwork and
          project success.
        </p>
      </div>
      <div className="block w-full">
        <Link to="/">
          <button className="font-serounded-lg outline-title hover:outline-title-none mt-12 rounded-md border-b-[3px] border-l-[.3px] border-r-[3px] border-t-[.3px] border-white px-7 py-3.5 text-center font-buttonText text-portfolioNG uppercase text-white hover:animate-pulse hover:border-b-[3px] hover:border-l-[.3px] hover:border-r-[3px] hover:border-t-[.3px] hover:border-heroTheme-300 hover:bg-emerald-500 hover:text-black hover:shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)]">
            Back to Main Menu
          </button>
        </Link>
      </div>
    </div>
  );
}
