import { Router } from "express";
import {
  addCountry,
  getCountriesList,
} from "../controllers/visitedController.js";

const visitedRouter = Router();

visitedRouter.post("/", addCountry);
visitedRouter.get("/:userId", getCountriesList);
export default visitedRouter;
