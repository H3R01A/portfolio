import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';

export default function AboutPage() {
  return (
    <div className="text-wrap outline-title flex flex-wrap items-center justify-center gap-y-6 text-center indent-24 text-white">
      <h1 className="mt-8 flex w-full items-center justify-center text-2xl">
        <TypeAnimation
          style={{ whiteSpace: 'pre-line' }}
          sequence={[
            `Aaron Allen is an active engineer with expertise in building full-stack applications using technologies such as JavaScript (ES6+), React,Typescript, Node.js, Tailwind CSS, Postgres, and Docker. He is passionate about creating engaging web experiences and follows empathetic development practices that prioritize user satisfaction. Aaron's commitment goes beyond meeting technical requirements; he actively considers the broader impact on users and stakeholders.\n\nHis recent focus has been on Codename Hermes, an open-source project where he serves as an active contributor. Codename Hermes is a library designed to abstract the implementation of message brokers like Kafka and RabbitMQ, aiming to streamline the developer experience.\n\nIn addition to his technical prowess, Aaron brings strong collaboration as well as leadership and communication skills to his software engineering endeavors, ensuring effective teamwork and project success.`,
            900,
          ]}
        ></TypeAnimation>
      </h1>
      <h1 className="flex w-full items-center justify-center text-2xl"></h1>
      <Link to="/">
        <button className="font-serounded-lg text-shadow outline-title mt-8 rounded-md px-7 py-3.5 text-center font-buttonText text-portfolioNG uppercase text-white hover:animate-pulse hover:border-b-[3px] hover:border-l-[.3px] hover:border-r-[3px] hover:border-t-[.3px] hover:border-heroTheme-300 hover:bg-emerald-500 hover:text-black hover:shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)]">
          Back to Main Menu
        </button>
      </Link>
    </div>
  );
}
