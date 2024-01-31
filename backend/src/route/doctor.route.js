import express from 'express';
import DoctorController from '../controller/doctor.controller/doctor.controller.js';
import doctorValidator from '../middleware/DoctorValidataion/doctorRegistration.validation.js';
import PatientController from '../controller/patient.controller/patient.controller.js';
import patientValidator from '../middleware/patientValidation/patientValidataion.js';
import jwtAuthentication from '../middleware/jwtAuth.middleware/jwrAuth.middleware.js';

// create router
const router = express.Router();
const doctorcontroller = new DoctorController();
const patientcontroller = new PatientController();

router.post('/doctor/register',doctorValidator,doctorcontroller.getRegistered);
router.post('/doctor/login',doctorcontroller.loginAsDoctor);
router.post('/patient/register',jwtAuthentication, patientValidator,patientcontroller.registerPatient);
router.post('/patient/:id/create_report',jwtAuthentication,patientcontroller.createReportOfPatient);
router.get('/patient/:id/all_reports',jwtAuthentication,patientcontroller.getAllReportOfaPatient);
router.get('/reports/:status',jwtAuthentication,patientcontroller.statusOfPatient);
export default router;
