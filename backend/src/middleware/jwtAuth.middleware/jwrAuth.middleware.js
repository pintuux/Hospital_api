// jwt is a json wen token which is use to generate a encypted token 
// the token is use to make a secure connection to user to server and vice versa
// for more detail about jwt search npm jwt
import jwt from "jsonwebtoken";
const jwtAuthentication = (req,res,next)=> {
    
    // varifiying the token which is coming from user
    
        const token = req.header('Authorization');
        if (!token){
            res.status(401).send('Unauthorized')
        } else{
            try{
                const decodeToken = jwt.verify(token,"H[6p*!mwS%N+}]>G5XqbCz-6o}XWKv");
                // console.log('decodeToken',decodeToken._id);
                req.id =decodeToken._id
                next();
            }catch(err){
                console.log(err)
                res.status(401).send('Unauthorized');
            }
        }
        
   
} 
export default jwtAuthentication;
