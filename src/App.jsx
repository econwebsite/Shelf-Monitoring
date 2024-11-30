import React, { useState, useEffect } from 'react';
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from "./Components/NavBarcomp/NavBar";
import Totalhome from "./Components/Homecomp/Totalhome";
import Footerpage from "./Components/FooterComp/Footerpage";
import ScrollToTop from "./Components/ScrollToTop"
import NotFoundPage from "./Components/Notfoundpage"
import Totalproducts from './Components/ProductComp/Totalproducts';
import BlogHub from "./Components/HubPageComp/BlogHubcomp/BlogHub"
import PricingLabeling from "./Components/FutureBlogcomp/PricingLabeling"
import ShelfDigitalization from "./Components/FutureBlogcomp/ShelfDigitalization"
import PlanogramCompliance from "./Components/FutureBlogcomp/PlanogramCompliance"
import RetailExperience from "./Components/FutureBlogcomp/RetailExperience"
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUsComp/AboutUs';
import OutofStocks from './Components/FutureBlogcomp/OutofStocks';
import Popup from "./Components/PopUP"


const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPopupVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (

          <BrowserRouter>
              <ScrollToTop /> 
{/* s  */}
    <div className='fixed-container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Totalhome />} />
        <Route path="/SHELFVista" element={<Totalproducts />} />
        <Route path="/BlogHubPage" element={<BlogHub />} />
        <Route path="/PricingLabeling" element={<PricingLabeling />} />
        <Route path="/ShelfDigitalization" element={<ShelfDigitalization />} />
        <Route path="/PlanogramCompliance" element={<PlanogramCompliance />} />
        <Route path="/RetailExperience" element={<RetailExperience />} />
        <Route path="/Outofstocks" element={<OutofStocks/>} />
        <Route path="/Contactus" element={< ContactUs/>} />
        <Route path="/Aboutus" element={< AboutUs/>} />        
        <Route path="*" element={<NotFoundPage />} />
        
        </Routes>
        <Footerpage/>
        <Popup isVisible={isPopupVisible} onClose={() => setPopupVisible(false)} />
        </div>
        </BrowserRouter>


  );
}

export default App;
