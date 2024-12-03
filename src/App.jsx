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
import Popupcomp from "./Components/Popupcomp"


const App = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  useEffect(() => {
    const referrer = document.referrer;
    console.log(referrer, "page link");

    if (referrer !== "https://www.e-consystems.com/events/ces-2025.asp") {
      const timer = setTimeout(() => setPopupVisible(true), 5000);
      return () => clearTimeout(timer); 
    }
  }, []);

  return (

          <BrowserRouter>
              <ScrollToTop /> 
    <div className='fixed-container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Totalhome />} />
        <Route path="/home" element={<Totalhome />} />
        <Route path="/shelfvista" element={<Totalproducts />} />
        <Route path="/blogs" element={<BlogHub />} />
        <Route path="/blogs/pricinglabeling" element={<PricingLabeling />} />
        <Route path="/blogs/shelfdigitalization" element={<ShelfDigitalization />} />
        <Route path="/blogs/planogramcompliance" element={<PlanogramCompliance />} />
        <Route path="/blogs/retailexperience" element={<RetailExperience />} />
        <Route path="/blogs/outofstocks" element={<OutofStocks/>} />
        <Route path="/contactus" element={< ContactUs/>} />
        <Route path="/aboutus" element={< AboutUs/>} />        
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footerpage/>
        <Popupcomp isVisible={isPopupVisible} onClose={() => setPopupVisible(false)} />
        </div>
        </BrowserRouter>


  );
}

export default App;
