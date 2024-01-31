import AddDoctorRegisterDetail from "../../config/model.db/doctor.model.db.js";

export default class DoctorModel {
    static async getDoctoInDb(email) {
        try {
            const doctor = await AddDoctorRegisterDetail.isDoctor(email);
            // console.log(' inside dataModel, getDoctor in db',doctor);
            return doctor;
        } catch (error) {
            console.error("Error in getDoctoInDb:", error);
            return false; // Handle the error appropriately in your application.
        }
    }

    static async doctorAddToDb(name,phone, email, password) {
        try {
            await AddDoctorRegisterDetail.addDoctor(name,phone, email, password);
        } catch (error) {
            console.error("Error in doctorAddToDb:", error);
            // Handle the error appropriately in your application.
        }
    }
    static async isRegister(email){
       const doctorId = await AddDoctorRegisterDetail.getIdofDoctor(email);
    //    console.log(doctorId);
        
       return doctorId;
    }
}
