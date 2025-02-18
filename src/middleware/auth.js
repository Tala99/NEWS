import jwt from 'jsonwebtoken';

const auth=()=>{

   
        return (req,res,next)=>{
            const {token}=req.headers;
            const decoded =jwt.verify(token,'talahetnawi');
                if(decoded.role !=="admin"){
                return res.status(403).json({message:"You are not authorized"});
             }
             req.id=decoded.id;
             next();
         };
        
 
}

export default auth;