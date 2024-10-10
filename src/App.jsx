import React from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from "./Components/NavBarcomp/NavBar";
import Totalhome from "./Components/Homecomp/Totalhome";
import Footerpage from "./Components/FooterComp/Footerpage";
import ScrollToTop from "./Components/ScrollToTop"
import NotFoundPage from "./Components/Notfoundpage"


import AnimationButton from './Components/ButtonComp/AnimationButton';

const App = () => {
  return (

          <BrowserRouter>
              <ScrollToTop /> 

    <div className='fixed-container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Totalhome />} />

       
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footerpage/>

        </div>
        </BrowserRouter>


  );
}

export default App;
