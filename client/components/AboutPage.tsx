import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <div className="text-wrap outline-title flex flex-wrap items-center justify-center gap-y-6 text-center indent-24 text-white">
      <h1 className="outline-title mt-8 flex w-full items-center justify-center text-2xl">
        About Me
      </h1>
      <h2 className="outline-title text-wrap mt-8 w-[78rem] items-center justify-center text-2xl">
        Aaron Allen is an active engineer with expertise in building full-stack
        applications using technologies such as{' '}
        <span className="inline text-yellow-300">JavaScript (ES6+)</span>,{' '}
        <span className="inline text-blue-300">React</span>,
        <span className="inline text-blue-400">TypeScript</span>,{' '}
        <span className="inline text-emerald-300">Node.js</span>,
        <span className="inline text-red-300">Tailwind CSS</span>,
        <span className="inline text-orange-300">Postgres</span>, and{' '}
        <span className="text-blue-sky-300 inline">Docker</span>. He is
        passionate about creating engaging web experiences and follows
        empathetic development practices that prioritize user satisfaction.
        stuff!Aaron's commitment goes beyond meeting technical requirements; he
        actively considers the broader impact on users and stakeholders.
      </h2>
      <h2 className="outline-title text-wrap w-[78rem] items-center justify-center text-2xl">
        His recent focus has been on Codename Hermes, an open-source project
        where he serves as an active contributor. Codename Hermes is a library
        designed to abstract the implementation of message brokers like Kafka
        and RabbitMQ, aiming to streamline the developer experience.
      </h2>
      <h2 className="outline-title text-wrap block w-[78rem] items-center justify-center text-2xl">
        In addition to his technical prowess, Aaron brings strong collaboration
        as well as leadership and communication skills to his software
        engineering endeavors, ensuring effective teamwork and project success.
      </h2>
      <div className="block">
        <Link to="/">
          <button className="font-serounded-lg outline-title hover:outline-title-none mt-12 rounded-md border-b-[3px] border-l-[.3px] border-r-[3px] border-t-[.3px] border-white px-7 py-3.5 text-center font-buttonText text-portfolioNG uppercase text-white hover:animate-pulse hover:border-b-[3px] hover:border-l-[.3px] hover:border-r-[3px] hover:border-t-[.3px] hover:border-heroTheme-300 hover:bg-emerald-500 hover:text-black hover:shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)]">
            Back to Main Menu
          </button>
        </Link>
      </div>
    </div>
  );
}
