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
  if (projectNum > data.size) {
    window.location.assign('/contact');
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
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
      <div className="flex items-center justify-center flex-wrap">
        <div className="w-full text-3xl flex items-center justify-center mt-12">
          <h1>Project: {staticData.projectName}</h1>
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          <h2 className="font-bold text-xl w-full flex items-center justify-center">
            Project Description: {(projectData as ProjectData).gitHubRepoData.description}
          </h2>
        </div>
        <h3 className="w-full text-xl flex items-center justify-center mt-4">
          Languages Used:
        </h3>
        <div className="w-full flex items-center justify-center">
          <ul className="pl-5 list-disc">
            {Object.keys((projectData as ProjectData).gitHubRepoLanguages).map(
              (lang) => (
                <li key={`${lang}${Math.random()}`}>{lang}</li>
              )
            )}
          </ul>
        </div>
        <h3 className="w-full text-xl flex items-center justify-center mt-4 font-bold">
          Tech Used:
        </h3>
        <div className="w-full flex items-center justify-center">
          <ul className="pl-5 list-disc">
            {staticData.tech_stack.map((tech: TechStackItem) => (
              <li key={`${tech}${Math.random()}`}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="w-full flex items-center justify-center mt-4 space-x-4">
          <button
            onClick={() => handleProject(-1, data.size)}
            className="bg-heroTheme-400 text-heroTheme-300 inline-flex px-7 py-3.5 text-portfolioBTN uppercase font-serounded-lg text-center text-shadow font-buttonText border-t-[.3px] border-l-[.3px] border-r-[3px] border-b-[3px] shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)] border-heroTheme-300 rounded-md"
          >
            Previous Project
          </button>
          <button
            onClick={() => handleProject(1, data.size)}
            className="bg-heroTheme-400 text-heroTheme-300 inline-flex px-7 py-3.5 text-portfolioBTN uppercase font-serounded-lg text-center text-shadow font-buttonText border-t-[.3px] border-l-[.3px] border-r-[3px] border-b-[3px] shadow-[4px_4px_4.8px_0px_rgba(0,0,0,0.2)] border-heroTheme-300 rounded-md"
          >
            Next Project
          </button>
        </div>
        <h3 className="mt-4 italic w-full flex items-center justify-center">
          Images (if available)
        </h3>
        <div className="flex justify-evenly flex-wrap space-x-0.5">
          {staticData.pictures.map((picture: string) => (
            <div>
              <img
                src={picture}
                key={`${picture}${Math.random()}`}
                className="w-200 mt-1"
              ></img>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
