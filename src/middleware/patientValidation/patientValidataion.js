import {body,validationResult} from 'express-validator';
const patientValidator = async (req,res,next)=>{
    try{
        //1. Create validation rule
        const rule =[
            body('name').notEmpty().withMessage("Name is required"),
            body('phone').notEmpty().withMessage("Phone number is required")
           
        ]
        //2. Runn the validation rule
        await Promise.all(rule.map(pro => pro.run(req)));
        //3. Check if any error with validation
        const errors = validationResult(req);
        let errormessage = null;
        if (!errors.isEmpty()) {
            // Handle validation errors, for example, by rendering a view with error messages
            
            return res.status(200).send( errors.array()[0].msg );
        }
        //4. call the next middleware
        next();
    }catch(err){
        console.log(err);
    }
}
export default patientValidator;