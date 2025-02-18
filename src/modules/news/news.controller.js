import newsModel from "../../../DB/model/news.js";
import UserModel from "../../../DB/model/user.js";
import { appError } from "../../utils/appError.js";


export const getNews = async (req, res) => {
    const news = await newsModel.findAll({
        attributes: ['id', 'title'],
        include: {
            model: UserModel,
            attributes: ['id', 'name']
        }
    });

    return res.status(200).json({ massege: "success to get all news", news })

};

export const createNews = async (req, res) => {
    const { title, description } = req.body;
    const news = await newsModel.create({ title: title, description: description, UserId: req.id });
    return res.status(201).json({ massege: "success to create new news", news });
}

export const getDetails= async (req, res,next) => {

    const {id}=req.params;
    const news = await newsModel.findByPk(id);
    if(!news) return next(new appError("news not found", 404));
    return res.status(200).json({massege: "success", news });

};