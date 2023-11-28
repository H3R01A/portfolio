import { ReactNode, useEffect, useState } from 'react';
import data from '../assets/data';

type ProjectProps = {
  projectNum: number;
  handleProject: (num: number, projectTotalNum: number) => void;
};

type ProjectData = {
  gitHubRepoData: {
    name: string;
    id: number;
    description: string;
  };
  gitHubRepoLanguages: {};
};

type TechStackItem = string | number | boolean | ReactNode;

export default function Project({ projectNum, handleProject }: ProjectProps) {
  const staticData = data.get(projectNum);
  const { owner, repo } = staticData;

  const [projectData, setProjectData] = useState<ProjectData | {}>({});

  const fetchRepoData = async (owner: string, repo: string) => {
    try {
      const response = await fetch('/api/gitHubRepo', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({ owner, repo }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };

  const getRepoData = async () => {
    try {
      const data = await fetchRepoData(owner, repo);
      setProjectData({ ...data });
    } catch (e) {
      console.error(`Fetch error:`, e);
    }
  };

  useEffect(() => {
    getRepoData();
  }, [projectNum]);

  if (!(projectData as ProjectData).gitHubRepoData?.name) {
    return <h1>Loading</h1>;
  } else {
    return (
      <>
        <h1>Project: {staticData.projectName}</h1>
        <h2>
          Project Description: {(projectData as ProjectData).gitHubRepoData.description}
        </h2>
        <h3>Languages Used</h3>
        <ul>
          {Object.keys((projectData as ProjectData).gitHubRepoLanguages).map(
            (lang) => (
              <li key={`${lang}${Math.random()}`}>{lang}</li>
            )
          )}
        </ul>
        <h3>Tech Stack</h3>
        <ul>
          {staticData.tech_stack.map((tech: TechStackItem) => (
            <li key={`${tech}${Math.random()}`}>{tech}</li>
          ))}
        </ul>
        <button onClick={() => handleProject(-1, data.size)}>
          Previous Project
        </button>
        <button onClick={() => handleProject(1, data.size)}>
          Next Project
        </button>
        <h3>Images(if available)</h3>
        {staticData.pictures.map((picture: string) => <img src={picture} key={`${picture}${Math.random()}`}></img>)}
      </>
    );
  }
}
