import React from 'react';
import ShelfKey from "./ShelfKeyComp/ShelfKey"
import Trackwork from "./Trackworkscomp/Trackwork"
import SolutionComp from "./SolutionComponent/SolutionComp"
import ShelfVisible from "./ShelfVisibleComp/ShelfVisible"
import ProductVedios from './ProductVedio Comp/ProductVedios';
import AiProvider from './AiProviderscomp/AiProvider';
import ContactUs from "../ContactUs/ContactUs"
import { Helmet } from 'react-helmet-async';

const Totalproducts = () => {
    return (
        <div>
            <Helmet>
            <title>AI-Powered Wi-Fi Camera for Real-Time Retail Shelf Monitoring</title>
            <meta name='description' content='SHELFVista is an AI-powered Wi-Fi camera providing real-time retail shelf monitoring solutions. Designed for efficient shelf management, it offers 13MP resolution, multi-rack optics coverage, dual-band Wi-Fi, and secure cloud-enabled features to optimize retail operations.' />
            </Helmet>
            <ShelfVisible/>
            <ProductVedios/>
            <ShelfKey/>
            <Trackwork/>
            <SolutionComp/>
            <AiProvider/>
            <ContactUs/>
        </div>
    );
}

export default Totalproducts;
