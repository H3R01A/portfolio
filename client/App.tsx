import { useState } from 'react';
import ContactPage from './components/ContactPage';
import WelcomePage from './components/WelcomePage';
import Project from './components/Project';
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  const [projectNum, setProjectNum] = useState(1);

  const handleProject = (num: number, projectTotalNum: number) => {
    if (projectNum + num === 0) return setProjectNum(1);

    return setProjectNum(projectNum + num);
  };
  return (
    <>
      <div className="p-10 uppercase text-heroTheme-500">
        {/* <p className='text-blue-100'>Home</p> */}
        <Link to="/" className="font-bold">
          Home
        </Link>
      </div>
      <Routes>
        <Route
          path="/"
          element={<WelcomePage setProjectNum={setProjectNum} />}
        ></Route>
        <Route path="/contact" element={<ContactPage />} />
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
