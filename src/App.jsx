import React from 'react';
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
import { HelmetProvider } from 'react-helmet-async';


const App = () => {
  return (

          <BrowserRouter>
          <HelmetProvider>
              <ScrollToTop /> 
    <div className='fixed-container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Totalhome />} />
        <Route path="/home" element={<Totalhome />} />
        <Route path="/shelfvista" element={<Totalproducts />} />
        <Route path="/blogs" element={<BlogHub />} />
        <Route path="/blogs/shelf-monitoring-cameras-pricing-labeling-accuracy" element={<PricingLabeling />} />
        <Route path="/blogs/latest-shelf-digitalization-technologies-for-retailers" element={<ShelfDigitalization />} />
        <Route path="/blogs/smart-shelf-monitoring-planogram-compliance" element={<PlanogramCompliance />} />
        <Route path="/blogs/the-role-of-smart-cameras-in-inventory-and-compliance" element={<RetailExperience />} />
        <Route path="/blogs/osa-oos-monitoring-with-smart-cameras" element={<OutofStocks/>} />
        <Route path="/contactus" element={< ContactUs/>} />
        <Route path="/aboutus" element={< AboutUs/>} />        
        <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footerpage/>
        </div>
        </HelmetProvider>
        </BrowserRouter>


  );
}

export default App;
