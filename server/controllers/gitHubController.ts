import {Request, Response, NextFunction} from 'express';
import { Octokit } from "octokit";
import dotenv from 'dotenv';

dotenv.config();

const gitHubController = {

    getRepo: async (req: Request, res: Response, next: NextFunction) => {

        
        const octokit = new Octokit({
            auth: process.env.GH_TKN
          });
    
          try{


            //!Org Get Request

            const result2 = await octokit.request('GET /orgs/{org}/repos', {
                org: 'DangerNoodle',
                headers: {
                  'X-GitHub-Api-Version': '2022-11-28'
                }
              })

            console.log(`this is the result from GitHub ${result2.data}`);

            res.locals.gitHubDataOrg = result2.data;

            console.log(result2.data);

            //!Original repo GET Request
    
            const result = await octokit.request('GET /repos/{owner}/{repo}', {
                owner: 'h3r01a',
                repo: 'codename-Hermes',
                headers: {
                  'X-GitHub-Api-Version': '2022-11-28'
                }
              })

            console.log(`this is the result from GitHub ${result.data.full_name}`);

            res.locals.gitHubData = result.data;

            next();

          }
          catch(e){
            if(e instanceof Error){
                console.log(`An error occured with attempting to fetch from GitHub ${e.message}`)
            }
          }
      
    }

}

export default gitHubController;