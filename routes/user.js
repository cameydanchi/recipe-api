import { Router } from "express";
import { register } from "../controllers/user.js";


//create router
const userRouter = Router();


// defiine rourter
userRouter.post('/register',register)


// export default 
export default userRouter;