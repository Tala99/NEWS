import { Sequelize} from 'sequelize';

export const sequelize = new Sequelize('freedb_news_project', 'freedb_talayousefhe', 'FDx!bp4r&SRCxz9', {
  host: 'sql.freedb.tech',
  port:'3306',
  dialect: 'mysql',
});
export const connectDb=()=>{
    sequelize.sync()
    .then(()=>{ //mean if connection is done
        console.log("database connection succesfully");
    
    }).catch((error)=>{ // if connection have someting wrong
        console.log("error in connection to database :"+ error);
    
    });
};