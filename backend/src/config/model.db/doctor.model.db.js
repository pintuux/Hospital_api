// import bcrypt form 'bcrypt' is used for secure aur esential data in the form of encypted data
import bcrypt from 'bcrypt';
import { getDatabase } from "../mongodb.js";

export default class AddDoctorRegisterDetail {
    
    static async getIdofDoctor(email){
        try{
            // console.log(collection);
            const db = getDatabase();
            
            const doctorId =await (await db).collection('doctordoc').find({email}).toArray();
            
            // console.log("doctor found",doctorId)
            if(doctorId.length>0){
                
                return doctorId;
            }else{
                return false;
            }
        }catch(error){
            console.log(error);
        }
    }
    static async isDoctor( email) {
        try {
            const db = getDatabase();
            
            const isDoctorRegister =await (await db).collection('doctordoc').find({email}).toArray();
            // console.log(isDoctorRegister);
            return  isDoctorRegister.length>0; // Check if any matching documents were found.
        } catch (error) {
            console.error("Error checking if the doctor exists:", error);
            return false; // Handle the error appropriately in your application.
        }
    }

    static async addDoctor(name,phone, email, password) {
        try {
            const db = getDatabase();
            const hashedPassword= await bcrypt.hash(password,12)
            password = hashedPassword
            const doctor = await (await db).collection('doctordoc').insertOne({name,phone,email,password})
            return;
            // console.log("Doctor data saved successfully:", data);
        } catch (error) {
            console.error("Error saving doctor data:", error);
            // Handle the error appropriately in your application.
        }
    }
}
