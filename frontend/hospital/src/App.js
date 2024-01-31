// import logo from './logo.svg';
// import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { Provider } from 'react-redux';
import { rootReducer } from './store';

import SignUp from './component/registration/registration';
// import Navbar from './component/navbar/nabar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from "./component/signin";
// import Navbar from './component/navbar';
import Navigator from './component/navbar';
import ImageSlider from './component/imageslider/imageslider';
// import Signin from './component/signin';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>
  
  function App() {
    const router = createBrowserRouter([
      {
        path: '/',
        element:<Navigator/>,
        children: [
          { index:true,element:<ImageSlider/>},
          { path: "signin", element: <Signin /> }, // Moved the '/signin' route up
          { path: "signup", element: <SignUp /> }, // Typo fixed ('/registor' to '/register')
        ],
      },
    ]);
  
    return (
      <>
        <Provider store={rootReducer}>
          <RouterProvider router={router} />
        </Provider>
      </>
    );
  }
export default App;
