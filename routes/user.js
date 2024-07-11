import { Router } from "express";
import { login, logout, profile, register } from "../controllers/user.js";
import { checkUserSession } from "../middleware/auth.js";


//create router
const userRouter = Router();


// defiine rourter
userRouter.post('/register',register);

userRouter.post('/login',login);

userRouter.get('/profile',checkUserSession,logout);

userRouter.post('/profile',checkUserSession,profile);


// export default 
export default userRouter;