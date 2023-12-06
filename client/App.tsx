import { useState } from 'react';
import AboutPage from './components/AboutPage';
import WelcomePage from './components/WelcomePage';
import Project from './components/Project';
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  const [projectNum, setProjectNum] = useState(1);

  const handleProject = (num: number, projectTotalNum: number) => {
    //reassign projectNum with passed in num
    // setProjectNum(projectNum + num);

    // console.log(`expected projectNum ${projectNum + num}`)
    // console.log({projectNum, projectTotalNum});

    //determine what project number to return
    //if the expected projectNum is greater than set projectNum to be the end of the list
    if (projectNum + num > projectTotalNum)
      return setProjectNum(projectTotalNum);
    //if expected projectNum is equal to 0 than set projectNum to be the beginning of the list
    if (projectNum + num === 0) return setProjectNum(1);
    //else set project num to be the expected projectNum
    return setProjectNum(projectNum + num);

    // if(projectNum === numList){
    //     return setProjectNum(projectNum);
    // }

    // return num + projectNum > 0 ? setProjectNum(num + projectNum) : setProjectNum(1);

    //bg-herotheme-300 opacity-95
  };
  return (
    <>
      <div className="bg-header-pattern p-10 flex justify-evenly">
        {/* <p className='text-blue-100'>Home</p> */}
        <Link to="/" className="font-bold">
          Home
        </Link>
        <Link to="/about" className="font-bold">
          Projects
        </Link>
        <Link to="/about" className="font-bold">
          About
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
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
