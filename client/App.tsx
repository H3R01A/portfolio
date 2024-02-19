import { useState } from 'react';
import ContactPage from './components/ContactPage';
import WelcomePage from './components/WelcomePage';
import Project from './components/Project';
import { Routes, Route, Link } from 'react-router-dom';
import AboutPage from './components/AboutPage';

export default function App() {
  const [projectNum, setProjectNum] = useState(1);

  const handleProject = (num: number, projectTotalNum: number) => {
    if (projectNum + num === 0) return setProjectNum(1);

    return setProjectNum(projectNum + num);
  };
  return (
    <>
      <div className="p-10 ">
        {/* <p className='text-blue-100'>Home</p> */}
        <Link to="/" className="font-bold ">
          <button className="font-serounded-lg text-shadow rounded-md border-2 border-transparent px-7 py-3.5 text-center font-buttonText text-portfolioNG uppercase text-white hover:animate-pulse hover:border-b-[3px] hover:border-l-[.3px] hover:border-r-[3px] hover:border-t-[.3px] hover:border-heroTheme-300 hover:bg-emerald-500 hover:text-black hover:shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)]">
            Home
          </button>
        </Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={<WelcomePage setProjectNum={setProjectNum} />}
        ></Route>
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route
          path="/project"
          element={
            <Project projectNum={projectNum} handleProject={handleProject} />
          }
        />
      </Routes>
    </>
  );
}
