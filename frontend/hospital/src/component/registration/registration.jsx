import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useSelector,useDispatch} from 'react-redux';
// import Alert from 'react-bootstrap/Alert';
// import Alert from 'react-bootstrap/Alert';
import { actions } from '../../redux/reducer/signinReducer';
// import Signin from '../signin';
const SignUp =()=> {
  // const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const {closebtn} = useSelector((state)=>state.signed);
  const nameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const confirmRef = useRef(null);
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const confirm = confirmRef.current.value;
   
// fetching http://localhost:3000/api/doctor/login api
    const response = await fetch('http://localhost:3100/api/doctor/register',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:name,
        phone:phone,
        email:email,
        password:pass,
        confirm:confirm
      })
    });
    // console.log("registed",response);
    if (response.ok) {
      // Close the modal after successful registration
      const responseData = await response.text();
      if(responseData === "You have already registered"){
        alert(responseData);
      }
      else{
        alert(responseData);
      }
      // Optionally, you can redirect or show a success message here
    } else {
      console.error('Registration failed');
    }
  }
  // const handleShow = () => setShow(true);

  return (
    <>
      

      <Modal show={closebtn} onHide={()=>dispatch(actions.close())}>
        <Modal.Header closeButton >
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="FullName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  ref={nameRef}
                  placeholder="Enter Your Name"
                  required
                  autoFocus
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="mobileNo">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control
                  type="string"
                  ref={phoneRef}
                  placeholder="0000000000"
                  required
                  
                />
              </Form.Group>
            <Form.Group className="mb-3" controlId="emailAddress">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="name@example.com"
                required
                
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="password"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"  ref={passRef} rows={3} required />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="confirmpassword"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password"  ref={confirmRef} rows={3} required />
            </Form.Group>
            <Button variant="primary" onClick={()=>dispatch(actions.close())} type='submit'>
            sign-Up
          </Button>
          </Form>
          
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default SignUp;