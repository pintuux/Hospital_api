import PatientConfig from "../../config/model.db/patient.model.db.js";
export default class PatientModel{
    static listofpatient(status){
        const patient = PatientConfig.getStatusOfPatient(status);
        return patient;
    }
    static addReport(id,report){
        PatientConfig.addReportTOdatabase(id,report);
    }
    static  addPatientToDb(name,phone){
        PatientConfig.addPatient(name,phone);

    }
    static getPatient(phone){
        const patient = PatientConfig.checkRegisterOrNot(phone);
        return patient;
    }
    static getpatientbyId(id){
        const patient = PatientConfig.getPatientById(id);
        return patient;
    }
}