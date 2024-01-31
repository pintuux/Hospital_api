import PatientModel from "../../model/patient.model/patient.model.js";
// create a controller for handle the event perform on the patient by the doctor
export default class PatientController{
    // registerPatient method is used for checking the patient is register
    // if not then register the patient
    async registerPatient(req,res){
        try{
            const {name,phone} = req.body;
           const patient =  await PatientModel.getPatient(phone);
           if(patient){
                res.status(201).send('You have already register');
           }else{
                PatientModel.addPatientToDb(name,phone);
                res.status(200).send("Patient register successfully");
           }
            
        }catch(error){
            res.status(400).send('there is some error in database',error);
        }
    }
    // createReportOfPatient method is used for creating the report of the patient
    async createReportOfPatient(req,res){
        try{
            const {id} = req.params;
            const report = req.body;
            // console.log("this the id of doctor",req.id);
            // console.log("id of the patient which is pass by the doctor",id);
            const patient =  await PatientModel.getpatientbyId(id);
            if(patient.length!==0){
                PatientModel.addReport(id,report);
                res.status(200).send("Report created successfully");
            }
            else{
                res.status(400).send("Patient not found");
            }
        }catch(err){
            console.log("error")
        }
    }
    //getALlReportOfaPatient method is used for geting the all report of a perticular patient
    async getAllReportOfaPatient(req,res){
        const {id} = req.params;
        const patient =  await PatientModel.getpatientbyId(id);
        if(patient.length!==0){
            res.status(200).send(patient.reports);
        }else{
            res.status(400).send("Patient not found ");
        }
    }
    // statusOfPatient method is used for the status of the patient 
    // i.e --> patient is admit or discharge 
    async statusOfPatient(req,res){
        const {status} = req.params
        
        const listofPatient =await PatientModel.listofpatient(status);
        if(listofPatient && listofPatient.length!==0){
            res.status(200).send(listofPatient)
        }else{
            res.status(400).send("invalid api/or there no any status of patient");
        }
    }

}