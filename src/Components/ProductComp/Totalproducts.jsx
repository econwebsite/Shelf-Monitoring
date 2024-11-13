import React from 'react';
import ShelfKey from "./ShelfKeyComp/ShelfKey"
import Trackwork from "./Trackworkscomp/Trackwork"
import SolutionComp from "./SolutionComponent/SolutionComp"
import ShelfVisible from "./ShelfVisibleComp/ShelfVisible"
const Totalproducts = () => {
    return (
        <div>
            <ShelfVisible/>
            <ShelfKey/>
            <Trackwork/>
            <SolutionComp/>
        </div>
    );
}

export default Totalproducts;
