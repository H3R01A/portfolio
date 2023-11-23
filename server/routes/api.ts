import express from "express";
import gitHubController from "../controllers/gitHubController";

const router = express.Router();

router.get("/gitHubRepo", gitHubController.getRepo, (req, res) => {
  return res.status(200).json(res.locals.gitHubData);
});

export default router;
