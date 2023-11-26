import express from "express";
import gitHubController from "../controllers/gitHubController";

const router = express.Router();

router.post("/gitHubRepo", gitHubController.getRepo, gitHubController.getRepoLanguages, (req, res) => {
  return res.status(200).json(res.locals);
});

export default router;
