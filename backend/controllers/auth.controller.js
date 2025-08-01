import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
    const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "15m",
    });
    const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d",
    });
    
    return { accessToken, refreshToken};
}

export const signup = async  (req, res) =>{
    const { name, email, password } = req.body;
    try {
        const userExists = await User.findOne({ email });
        if(userExists) return res.status(400).json({message: "Email already exist"});
        
        const user = await User.create({name, email, password});


        const { accessToken, refreshToken} = generateToken(user._id);

        res.status(201).json({user, message: "User created successfully!"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const login = async  (req, res) =>{
    res.send("I am at login page");
}

export const logout = async  (req, res) =>{
    res.send("I am at the logout page");
}