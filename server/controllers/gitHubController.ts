import {Request, Response, NextFunction} from 'express';
import { Octokit } from "octokit";
import dotenv from 'dotenv';

dotenv.config();

const octokit = new Octokit({
  auth: process.env.GH_TKN
});

const gitHubController = {

    getRepo: async (req: Request, res: Response, next: NextFunction) => {

        const {owner, repo} = req.body;
        
          try{

             const result = await octokit.request('GET /repos/{owner}/{repo}', {
              owner,
              repo,
              headers: {
                'X-GitHub-Api-Version': '2022-11-28'
              }
            })

             res.locals.gitHubRepoData = result.data;

            console.log(result.data);

            next();

          }
          catch(e){
            if(e instanceof Error){
                console.log(`An error occured with attempting to fetch from GitHub ${e.message}`);
                next(e);
            }
          }
      
    },

    getRepoLanguages: async (req: Request, res: Response, next: NextFunction) => {

      const {owner, repo} = req.body;

      try{

         const result = await octokit.request('GET /repos/{owner}/{repo}/languages', {
          owner,
          repo,
          headers: {
            'X-GitHub-Api-Version': '2022-11-28'
          }
        })

        res.locals.gitHubRepoLanguages = result.data;
        next();


      }

      catch(e){
        if(e instanceof Error){
            console.log(`An error occured with attempting to fetch from GitHub ${e.message}`)
            next(e);
        }
      }

      

    }

}

export default gitHubController;

  // console.log(`this is the result from GitHub ${result.data.full_name}`);

          // res.locals.gitHubData = result.data;

            //!Org Get Request
            //!WORKS
            // const result2 = await octokit.request('GET /orgs/{org}/repos', {
            //     org: 'oslabs-beta', //Scratch-Tech-Software
            //     headers: {
            //       'X-GitHub-Api-Version': '2022-11-28'
            //     }
            //   })

            // console.log(`this is the result from GitHub ${result2.data}`);

           

            //  const result2 = await octokit.request('GET /repos/{owner}/{repo}', {
            //     owner: 'oslabs-beta',
            //     repo: 'Codename-Hermes',
            //     headers: {
            //       'X-GitHub-Api-Version': '2022-11-28'
            //     }
            //   })