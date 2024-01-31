import {body,validationResult} from 'express-validator';
const doctorValidator = async (req,res,next)=>{
    try{
        //1. Create validation rule
        const rule =[
            body('name').notEmpty().withMessage("Name is required"),
            body('phone').notEmpty().withMessage("Phone number is Required"),
            body('email').isEmail().withMessage("email is required"),
            body('password').notEmpty().withMessage('Password is required'),
            body('confirm').notEmpty().withMessage('Confirm Password is required')
        ]
        //2. Runn the validation rule
        await Promise.all(rule.map(pro => pro.run(req)));
        
        //3. Check if any error with validation
        const errors = validationResult(req);
        let errormessage = null;
        if (!errors.isEmpty()) {
            // Handle validation errors, for example, by rendering a view with error messages
            
            return res.status(400).send( errors.array()[0].msg );
        }
        //4. call the next middleware
        next();
    }catch(err){
        console.log(err);
    }
}
export default doctorValidator;