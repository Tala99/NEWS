import { Router } from "express";
import auth from "../../middleware/auth.js";
//import fileUpload from "../../utils/multer.js";
import { deleteUser, getUser, updateUser } from "./user.controller.js";
import { asyncHandler } from "../../utils/catchError.js";
const router= Router();
router.get('/' ,asyncHandler(getUser));
router.delete('/:id', auth(),asyncHandler(deleteUser));
//router.put('/:id',fileUpload().single('image'), asyncHandler(updateUser));


export default router;