import {Request, Response, NextFunction} from 'express';
import { Octokit } from "octokit";
import dotenv from 'dotenv';

dotenv.config();

const gitHubController = {

    getRepo: async (req: Request, res: Response, next: NextFunction) => {

        const {owner, repo} = req.body;
        
        const octokit = new Octokit({
            auth: process.env.GH_TKN
          });
    
          try{

             //!Original repo GET Request
    
             const result = await octokit.request('GET /repos/{owner}/{repo}', {
              owner,
              repo,
              headers: {
                'X-GitHub-Api-Version': '2022-11-28'
              }
            })

             res.locals.gitHubData = result.data;

            console.log(result.data);


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

            //!Org Get Languages Works! Just need to change owner and repo
            // const result2 = await octokit.request('GET /repos/{owner}/{repo}/languages', {
            //   owner: 'oslabs-beta', //Scratch-Tech-Software
            //   repo: 'Codename-Hermes',
            //   headers: {
            //     'X-GitHub-Api-Version': '2022-11-28'
            //   }
            // })

            //  const result2 = await octokit.request('GET /repos/{owner}/{repo}', {
            //     owner: 'oslabs-beta',
            //     repo: 'Codename-Hermes',
            //     headers: {
            //       'X-GitHub-Api-Version': '2022-11-28'
            //     }
            //   })


           

           

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