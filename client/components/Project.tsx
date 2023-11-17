
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, MouseEventHandler } from 'react';


import data from '../data';

type ProjectProps = {
    projectNum: number;
    handleProject: (num: number, projectTotalNum: number) => void;
}

export default function Project({projectNum, handleProject}: ProjectProps){

    //!TODO: update the below fetch request to the real source of data

    const getRepoData = () => {
        
        fetch('/api/gitHubRepo')
        .then(data => data.json())
        .then(data => {
        
        console.log(data);
        console.log(`made it from the back with data: ${data}`);

        })
        .catch(error => {
        console.error(`Fetch error:`, error);
        });


    }
   
   
    // fetch('/api/pokemon')
        // .then(data => data.json())
    // .then(data => {

    //     console.log(`made it from the back with data: ${data}`);
    // })
    // .catch(error => {
    //     console.error(`Fetch error:`, error);
    //   });

    // Placeholder until you can figure out how to store data and retreive it
    // When ready, need to move logic to the server and have the server make calls to database and send data back here

    const projectData = data.get(projectNum);

    console.log('within Project component')
    console.log({projectNum, projectData});

    return(
        <>
        <h1>Project {projectNum}</h1>
        <h2>Project Descrption {projectData.description}</h2>
        <h2>Tech Stack</h2>
        <h2>Placeholder for picture or video</h2>
        <ul>
        {projectData.tech_stack.map((tech: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => <li key={`${tech}1`}>{tech}</li>)}
        </ul>
        <button onClick={() => (handleProject(-1, data.size))}>Previous Project</button>
        <button onClick={() => (handleProject(1, data.size))}>Next Project</button>
        <button onClick={getRepoData}>Git Data</button>
        </>
    )
}