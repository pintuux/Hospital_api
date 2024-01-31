import DoctorModel from "../../model/doctor.model/doctor.model.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
//creating a controller for handle the event performed by the doctor
export default class DoctorController {
    //getRigistered method is used for checking the doctor is register of not
    async getRegistered(req, res) {
        // const {name, email, password } which is coming form user
        const { name,phone, email, password } = req.body;
        // console.log(req.body);
        try {
            // Use async/await to wait for the result of the asynchronous function.
            const doctor = await DoctorModel.getDoctoInDb( email);
            console.log("doctor is registered or not",doctor);

            if (doctor) {
                res.status(200).send('You have already registered');
            } else {
                // Since doctorAddToDb is also asynchronous, you should await it.
                await DoctorModel.doctorAddToDb(name,phone, email, password);
                res.status(200).send('You have registered successfully');
            }
        } catch (error) {
            console.error("Error in getRegistered:", error);
            res.status(500).send('An error occurred during registration'); // Handle the error appropriately.
        }
    }
    // loginAsDOctor method is used for login the doctor 
    async loginAsDoctor(req,res){
        const {email,password} = req.body;
        
        // console.log("doctor registration",doctorId._id);
        
        try {
            const doctorId = await DoctorModel.isRegister(email);
            // console.log("doctor Dettail in controller",doctorId.length);
            // console.log('password of the user',doctorId[0].password);
            if (doctorId.length==0) {
                
              res.status(401).send("unauthorized") ;// User not found
            }
            const passwordMatch = await bcrypt.compare(password, doctorId[0].password);
                // console.log("this is passwordMatch",passwordMatch);
                if(passwordMatch){
                    
                    jwt.sign({email:doctorId[0].email,password:doctorId[0].password},"H[6p*!mwS%N+}]>G5XqbCz-6o}XWKv",{expiresIn:60*60},(err,token)=>{
                        if(err){
                            res.status(500).send("Internal Server Error");
                            
                        }else{
                            res.status(200).send(token);
                            
                        }
                       
                    })
                

            }else{
                res.status(401).send('unauthorized');
            }
          } catch (error) {
            console.error('Error authenticating user:', error);
            res.status(401).send("unauthorized") ;// Handle the error appropriately
          }
    }
    

}
