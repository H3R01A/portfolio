import { Request, Response, NextFunction } from 'express';
import { Octokit } from 'octokit';
import dotenv from 'dotenv';

dotenv.config();

const octokit = new Octokit({
  auth: process.env.GH_TKN,
});

const gitHubController = {
  getRepo: async (req: Request, res: Response, next: NextFunction) => {
    const { owner, repo } = req.body;

    try {
      const result = await octokit.request('GET /repos/{owner}/{repo}', {
        owner,
        repo,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28',
        },
      });

      res.locals.gitHubRepoData = result.data;

      next();
    } catch (e) {
      if (e instanceof Error) {
        console.log(
          `An error occured with attempting to fetch from GitHub ${e.message}`
        );
        next(e);
      }
    }
  },

  getRepoLanguages: async (req: Request, res: Response, next: NextFunction) => {
    const { owner, repo } = req.body;

    try {
      const result = await octokit.request(
        'GET /repos/{owner}/{repo}/languages',
        {
          owner,
          repo,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28',
          },
        }
      );

      res.locals.gitHubRepoLanguages = result.data;
      next();
    } catch (e) {
      if (e instanceof Error) {
        console.log(
          `An error occured with attempting to fetch from GitHub ${e.message}`
        );
        next(e);
      }
    }
  },
};

export default gitHubController;
