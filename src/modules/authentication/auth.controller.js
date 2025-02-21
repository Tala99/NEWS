
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendEmail } from "../../utils/sendEmail.js";
import { appError } from "../../utils/appError.js";
import UserModel from '../../../DB/models/user.js';
export const loginUser = async (req, res,next) => {

    const { email, password } = req.body;
    const user = await UserModel.findOne({ where: { "email": email } }); //email
    if (!user) 
         return next(new appError ("invalid email",404));
    const check = await bcrypt.compareSync(password, user.password); // password
    if (!check)  return next(new appError ("invalid password",400));
    const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, 'talahetnawi');
    sendEmail(email);
    return res.status(200).json({ message: "success", token });


};


export const registerUser = async (req, res) => {//register function

    const { name, email, password } = req.body;
    const hashPassword = bcrypt.hashSync(password, 8);//choose 8 just because it's good number
    await UserModel.create({ name, email, password: hashPassword });
    const html = `<div><h2>new user</h2><br><p>welcome ${name}</p></div>`;
    sendEmail(email, "welcome", html);
    return res.status(201).json({ message: "User created successfully" });

}