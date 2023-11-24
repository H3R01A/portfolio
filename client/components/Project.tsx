import {ReactElement,JSXElementConstructor,ReactNode,ReactPortal,useEffect,useState} from "react";
import data from "../data";

type ProjectProps = {
  projectNum: number;
  handleProject: (num: number, projectTotalNum: number) => void;
};

type ProjectData = {
  description: string;
  language: string;
};

type TechSack = string| number| boolean| ReactElement<any, string | JSXElementConstructor<any>>| Iterable<ReactNode>| ReactPortal| null| undefined;

export default function Project({ projectNum, handleProject }: ProjectProps) {
  const staticData = data.get(projectNum);
  const { owner, repo } = staticData;

  const [projectData, setProjectData] = useState({});

  const getRepoData = () => {

    fetch("/api/gitHubRepo", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        owner,
        repo,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
       
        setProjectData({...data});
      })
      .catch((error) => {
        console.error(`Fetch error:`, error);
      });
  };

  useEffect(getRepoData, [projectData]);

  // fetch('/api/pokemon')
  // .then(data => data.json())
  // .then(data => {

  //     console.log(`made it from the back with data: ${data}`);
  // })
  // .catch(error => {
  //     console.error(`Fetch error:`, error);
  //   });

  if(!projectData){
    return <h1>Loading</h1>
  }
    return (
      <>
        <h1>Project: {staticData.projectName}</h1>
        <h2>Project Description: {(projectData as ProjectData).description}</h2>
        <h2>Placeholder for picture or video</h2>
        <h2>Tech Stack</h2>
        <ul>
          {/* Language */}

          {/* Core Teck */}

          {staticData.tech_stack.map(
            (tech:TechSack) => (
              <li key={`${tech}${Math.random()}`}>{tech}</li>
            )
          )}
        </ul>
        <button onClick={() => handleProject(-1, data.size)}>
          Previous Project
        </button>
        <button onClick={() => handleProject(1, data.size)}>
          Next Project
        </button>
      </>
    );
  }

