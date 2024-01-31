import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink,Outlet} from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import {useDispatch} from 'react-redux';
import { actions } from '../redux/reducer/signinReducer';

function Navigator() {
  const dispatch = useDispatch();
  return (
    <>
    <Navbar  style={{ backgroundColor: '#2B3D3D', marginLeft: '0' }}>
      <Container>
        <NavLink to='' style={{ color: '#2D997E',textDecoration: 'none'}}><h3>Helth+Care</h3></NavLink>
        {/* <Navbar.Brand to=''  >Helth Care</Navbar.Brand> */}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end" >
          <NavLink to='signin'>
          <Button variant="outline-success"  onClick={()=>dispatch(actions.signIn())}>
        Sign-In
      </Button>

          </NavLink>
          <NavLink to='signup'>
          <Button variant="outline-success"  onClick={()=>dispatch(actions.signIn())}>
        Sign-Up
      </Button>
          </NavLink>
          
        </Navbar.Collapse>
        
       
      </Container>
    </Navbar>
    <Outlet/>
    </>
  );
}

export default Navigator;