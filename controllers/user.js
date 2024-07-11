import bcrypt from 'bcrypt';
import { userModel } from '../models/user.js';


export const register = async (req, res, next) => {
    try {
        // Hash the user password
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)
        // create a new user
        const registerUser = await userModel.create({
            ...req.body,
            password: hashedPassword
        })
        //return a response
        res.status(201).json('User registed successfully')
    } catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {
   try {
     const { email, passowrd } = req.body
     // find a user using thier unique identiifier
     const user = await userModel.findOne({
        $or:[
            {email:email},
            {username:usernmae},
            {phone:phonek}
        ]
     });
     if (!user) {
         return res.status(401).json('no user found');
     } else {
         //verify their password
         const correctPassword = bcrypt.compareSync(req.body.password, user.password);
         if (!correctPassword) {
             res.status(401).json('Invalid credentials')
         } else {
             // Generate a session
             req.session.user = { id: user.id }
             // return respond
             res.status(200).json('Login successful')
         }
     }
   } catch (error) {
    next(error)
   }

}

export const logout = async (req, res, next) => {
try {
        // destroy user session
        await req.session.destroy();
        // return response
        res.status(200).json('Logout Succesfully')
} catch (error) {
    next(error)
}
 }

export const profile = async (req, res, next) => { 
 try {
       // find a user by id
       const user = await userModel.findById(req.session.user.id)
       // Return response
       res.status(200).json(user)
 } catch (error) {
    next(error);
 }
} 