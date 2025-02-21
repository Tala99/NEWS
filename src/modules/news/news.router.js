import { Router } from "express";
import auth from "../../middleware/auth.js";
import { asyncHandler } from "../../utils/catchError.js";
import validation from "../../middleware/validation.js";
import { createNewsSchema, newsDetailsSchema } from "./news.validation.js";
import { getNews, createNews, getDetails } from "./news.controller.js";
const router= Router();

router.get('/',asyncHandler(getNews));
router.post('/',auth(),validation(createNewsSchema),asyncHandler(createNews));
router.get('/:id',validation(newsDetailsSchema),asyncHandler(getDetails));




export default router;