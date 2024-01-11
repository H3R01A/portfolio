import { ReactNode, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
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
  if (projectNum > data.size) {
    return <Navigate to="/contact" />;
  }

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
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  } else {
    //
    return (
      <div className="flex flex-wrap items-center justify-center">
        <div className="mt-12 flex w-full items-center justify-center text-3xl">
          <h1>Project: {staticData.projectName}</h1>
        </div>
        <div className="mt-4 flex w-full items-center justify-center">
          <h2 className="flex w-full items-center justify-center text-xl font-bold">
            Project Description:{' '}
            {(projectData as ProjectData).gitHubRepoData.description}
          </h2>
        </div>
        <h3 className="mt-4 flex w-full items-center justify-center text-xl">
          Languages Used:
        </h3>
        <div className="flex w-full items-center justify-center">
          <ul className="list-disc pl-5">
            {Object.keys((projectData as ProjectData).gitHubRepoLanguages).map(
              (lang) => (
                <li key={`${lang}${Math.random()}`}>{lang}</li>
              )
            )}
          </ul>
        </div>
        <h3 className="mt-4 flex w-full items-center justify-center text-xl font-bold">
          Tech Used:
        </h3>
        <div className="flex w-full items-center justify-center">
          <ul className="list-disc pl-5">
            {staticData.tech_stack.map((tech: TechStackItem) => (
              <li key={`${tech}${Math.random()}`}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4 flex w-full items-center justify-center space-x-4">
          <button
            onClick={() => handleProject(-1, data.size)}
            className="font-serounded-lg text-shadow inline-flex rounded-md border-b-[3px] border-l-[.3px] border-r-[3px] border-t-[.3px] border-heroTheme-300 bg-heroTheme-400 px-7 py-3.5 text-center font-buttonText text-portfolioBTN uppercase text-heroTheme-300 shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)]"
          >
            Previous Project
          </button>
          <button
            onClick={() => handleProject(1, data.size)}
            className="font-serounded-lg text-shadow inline-flex rounded-md border-b-[3px] border-l-[.3px] border-r-[3px] border-t-[.3px] border-heroTheme-300 bg-heroTheme-400 px-7 py-3.5 text-center font-buttonText text-portfolioBTN uppercase text-heroTheme-300 shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)]"
          >
            Next Project
          </button>
        </div>
        <h3 className="mt-4 flex w-full items-center justify-center italic">
          Images (if available)
        </h3>
        <div className="flex flex-wrap justify-evenly space-x-0.5">
          {staticData.pictures.map((picture: string) => (
            <div>
              <img
                src={picture}
                key={`${picture}${Math.random()}`}
                className="mt-1 w-200"
              ></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
