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

const login = async (req, res, next) => { }

const logout = async (req, res, next) => { }

const profile = async (req, res, next) => { }