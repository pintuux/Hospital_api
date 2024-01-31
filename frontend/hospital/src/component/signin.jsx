import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
// import { useHistory } from 'react-router-dom'; 
import {useSelector,useDispatch} from 'react-redux';

// import Alert from 'react-bootstrap/Alert';
import { actions } from '../redux/reducer/signinReducer';
const Signin =()=> {
  // const [show, setShow] = useState(false);
  const dispatch = useDispatch();  
  // const history = useHistory(); 
  const {closebtn} = useSelector((state)=>state.signed);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
   
// fetching http://localhost:3000/api/doctor/login api
    const response = await fetch('http://localhost:3100/api/doctor/login',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:email,
        password:pass
      })
    });
    // console.log(response.ok);
    if (response.ok){
      dispatch(actions.signIn());
      dispatch(actions.close());
      // history.push('/signup');
    }else{
      console.error('login failed');
    }
  }
  // const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={closebtn} onHide={()=>dispatch(actions.close())}>
        <Modal.Header closeButton >
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                placeholder="name@example.com"
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password"  ref={passRef} rows={3} required />
            </Form.Group>
            <Button variant="primary" onClick={()=>dispatch(actions.close())} type='submit'>
            sign-in
          </Button>
          </Form>
          
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default Signin;