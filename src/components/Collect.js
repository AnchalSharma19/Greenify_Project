
// CollectionItems.js
import React from 'react';
import './Collect.css';
import plastic from '../images/softplastic.png';
import cloths from '../images/cloths.png';
import ewaste from '../images/ewastePhone.png';
import misfits from '../images/misfits.png';

const Collect = () => {
    return (
        <div id="Collect" className="collection-container" >
            <h1 className="collection-heading">What We Collect</h1>
            <div className="item square-animation">
                <img src={plastic} alt="Soft Plastics" className="item-image" />
                <h3>Soft plastics</h3>
                <p>Flexible plastic that can be easily scrunched in your hand. <br /> E.g. bread bags, produce bags or chip packets.</p>
                <a href="#soft-plastics" className="item-link">Find out more</a>
            </div>
            <div className="item square-animation">
                <img src={cloths} alt="Clothes & Textiles" className="item-image" />
                <h3>Clothes & textiles</h3>
                <p>Clothes, shoes, accessories and linen in any condition.</p>
                <a href="#clothes-textiles" className="item-link">Find out more</a>
            </div>
            <div className="item square-animation">
                <img src={ewaste} alt="E-waste" className="item-image" />
                <h3>E-waste</h3>
                <p>Small items that use electricity with a plug or batteries. <br /> E.g. mobile phone, laptop or kettle.</p>
                <a href="#e-waste" className="item-link">Find out more</a>
            </div>
            <div className="item square-animation">
                <img src={misfits} alt="Misfits" className="item-image" />
                <h3>Misfits</h3>
                <p>Misfit items are other household items. <br /> E.g. polystyrene, batteries, coffee cups or lightbulbs.</p>
                <a href="#misfits" className="item-link" >Find out more</a>
            </div>
        </div>
    );
};

export default Collect;
