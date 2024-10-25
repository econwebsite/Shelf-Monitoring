import React from 'react';
import ShelfKey from "./ShelfKeyComp/ShelfKey"
import ShelfImpact from "./ShelfImpactComp/ShelfImpact";
import Trackwork from "./Trackworkscomp/Trackwork"
import SolutionComp from "./SolutionComponent/SolutionComp"
import ShelfVisible from "./ShelfVisibleComp/ShelfVisible"
const Totalproducts = () => {
    return (
        <div>
            <ShelfVisible/>
            <ShelfKey/>
            <ShelfImpact/>
            <Trackwork/>
            <SolutionComp/>
        </div>
    );
}

export default Totalproducts;
