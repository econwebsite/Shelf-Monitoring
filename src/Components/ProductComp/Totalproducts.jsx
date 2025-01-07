import React from 'react';
import ShelfKey from "./ShelfKeyComp/ShelfKey"
import Trackwork from "./Trackworkscomp/Trackwork"
import SolutionComp from "./SolutionComponent/SolutionComp"
import ShelfVisible from "./ShelfVisibleComp/ShelfVisible"
import ProductVedios from './ProductVedio Comp/ProductVedios';
import AiProvider from './AiProviderscomp/AiProvider';
import ContactUs from "../ContactUs/ContactUs"
const Totalproducts = () => {
    return (
        <div>
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
