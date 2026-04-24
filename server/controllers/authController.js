import Register from "../models/registerModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async(req,res)=>{
    try {
        const {name,email,password,role} = req.body;
        

        const existingUser = await Register.findOne({email})
        if (existingUser) {
            return res.status(400).json({message:"User already exists"})
        }

        const hashPassword = await bcrypt.hash(password,10)

        const user = await Register.create({
            name,
            email,
            password:hashPassword,
            role :"User"
        })

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})

        res.status(201).json({message:"User register is successfully",
            token, user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role
            }
        })
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


export const login = async(req,res)=>{
    try {
        const {email,password} = req.body;

        const user = await Register.findOne({email});
        if (!user) {
            return res.status(400).json({message:"Invalid email or password"})
        }

        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.status(400).json({message:"Invalid email or password"})
        }

        const token =jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1d"})

        res.status(200).json({message:"Login successfully",
            token, user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role
            }
        })

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}