import express from "express";

import ctrl from "../../controllers/contacts.js";
import { validateBody } from "../../middlewares/validateBody.js";
import schemas from "../../schemas/contacts.js";

export const router = express.Router();

router.get("/", ctrl.getALL);

router.get("/:contactId", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", ctrl.deleteById);

router.put("/:contactId", validateBody(schemas.addSchema), ctrl.updateById);
