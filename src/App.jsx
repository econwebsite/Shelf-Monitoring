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
import Totalproducts from './Components/ProductComp/Totalproducts';
import BlogHub from "./Components/HubPageComp/BlogHubcomp/BlogHub"
import PricingLabeling from "./Components/FutureBlogcomp/PricingLabeling"
import ShelfDigitalization from "./Components/FutureBlogcomp/ShelfDigitalization"
import PlanogramCompliance from "./Components/FutureBlogcomp/PlanogramCompliance"
import RetailExperience from "./Components/FutureBlogcomp/RetailExperience"


const App = () => {
  return (

          <BrowserRouter>
              <ScrollToTop /> 

    <div className='fixed-container'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Totalhome />} />
        <Route path="/shelfTrack" element={<Totalproducts />} />
        <Route path="/BlogHubPage" element={<BlogHub />} />
        <Route path="/PricingLabeling" element={<PricingLabeling />} />
        <Route path="/ShelfDigitalization" element={<ShelfDigitalization />} />
        <Route path="/PlanogramCompliance" element={<PlanogramCompliance />} />
        <Route path="/RetailExperience" element={<RetailExperience />} />

          
        
        <Route path="*" element={<NotFoundPage />} />
        
        </Routes>
        <Footerpage/>

        </div>
        </BrowserRouter>


  );
}

export default App;
