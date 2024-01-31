// import { patientDoc } from "../Schema/doctor.schema.js";
//create a class for patient datamodel
import { ObjectId } from "mongodb";
import { getDatabase } from "../mongodb.js";
import { undefined } from "webidl-conversions";

export default class PatientConfig{
    
    //add patient to the database
    static async getStatusOfPatient(status){
        const db = getDatabase();
        const patient =await (await db).collection("patientDoc").find({}).toArray();
        // console.log("list of patient",patient[2].reports[0]);
        if (patient && patient.length !== 0) {
            const filteredReports = [];
    
            for (const pat of patient) {
                if (pat.reports !== undefined && Array.isArray(pat.reports) && pat.reports.length !== 0) {
                    for (const report of pat.reports) {
                        if (report.status !== undefined && report.status === status) {
                            filteredReports.push(report);
                        }
                    }
                }
            }
    
            return filteredReports;
        } else {
            return false;
        }
    
    }
    static async addReportTOdatabase(id,report){
        const db = getDatabase();
        const objectId = new ObjectId(id);
        const patient = await (await db).collection('patientDoc').findOne({_id:objectId});
        if(patient && patient.reports!== undefined &&  Array.isArray(patient.reports) && patient.reports.length!==0){
            patient.reports.push(report)
            
            await (await db).collection('patientDoc').updateOne({_id:objectId},{ $set: { reports:patient.reports }})
            // console.log(patient.reports);
        }else{
            await (await db).collection('patientDoc').findOneAndUpdate({_id:objectId},{ $set: { reports: [report] } })
        }
        
        // console.log(patient);
        
    }
    static async addPatient(name,phone){
        try{
            const db = getDatabase();
            const patient =await  (await db).collection('patientDoc').insertOne({name,phone});
            
            
        }catch(error){
            console.log(error);
        }
        
        
    }
    //check the patient is already registered or not
    static async checkRegisterOrNot(phone){
        try{
            const db = getDatabase();
            const patient =await  (await db).collection('patientDoc').find({phone}).toArray();
            
            return patient.length >0;
            
        }catch(error){
            console.log('Not register');
        }
    }
    // find the patient by his id 
    static async getPatientById(id){
        try{
            const db = getDatabase();
            const objecId = new ObjectId(id)
            const patient = await (await db).collection('patientDoc').findOne({_id:objecId})
            if(patient){
                return patient;
            }else{
                return null;
            }
            
        }catch(err){
            console.log(err);
        }
    }
}

