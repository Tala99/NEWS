import { connectDb } from "../DB/connection.js";
import userRouter from './modules/user/user.router.js';
import newsRouter from './modules/news/news.router.js';
import authRouter from './modules/authentication/auth.router.js';
import cors from 'cors';


const initApp=(app)=>{
    connectDb();
    app.use(cors());
    app.get('/',(req,res)=>{

        return res.status(200).json({message:"API is running,welcome"});
    });
    app.use('/users',userRouter);
    app.use('/authentication',authRouter);
    app.use('/news',newsRouter);
    app.get('*',(req,res)=>{
        return res.status(404).json({message:"page not found"});

    })
    app.use((err,req,res,next)=>{
        return res.status(err.statusCode).json({message:err.message});

    });




};

export default initApp;