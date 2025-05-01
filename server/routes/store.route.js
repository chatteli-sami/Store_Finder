import { Router } from "express";
import StoreController from "../controllers/store.controller.js";

const router = Router();

router
  .route("/stores")
  .get(StoreController.getAll)
  .post(StoreController.create);

router
  .route("/stores/:id")
  .get(StoreController.getOne)
  .put(StoreController.update)
  .delete(StoreController.delete);

export default router;