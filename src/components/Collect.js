
// CollectionItems.js
import React from 'react';
import './Collect.css';

const Collect = () => {
    return (
        <div id="Collect" className="collection-container" >
            <h1 className="collection-heading">What We Collect</h1>
            <div className="item square-animation">
                <img src="https://images.unsplash.com/photo-1597348989645-46b190ce4918?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Soft Plastics" className="item-image" />
                <h3>Soft plastics</h3>
                <p>Flexible plastic that can be easily scrunched in your hand. <br /> E.g. bread bags, produce bags or chip packets.</p>
                <a href="#soft-plastics" className="item-link">Find out more</a>
            </div>
            <div className="item square-animation">
                <img src="https://images.unsplash.com/photo-1630329273801-8f629dba0a72?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Clothes & Textiles" className="item-image" />
                <h3>Clothes & textiles</h3>
                <p>Clothes, shoes, accessories and linen in any condition.</p>
                <a href="#clothes-textiles" className="item-link">Find out more</a>
            </div>
            <div className="item square-animation">
                <img src="https://images.unsplash.com/photo-1653589048352-7c3b90241ae2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="E-waste" className="item-image" />
                <h3>E-waste</h3>
                <p>Small items that use electricity with a plug or batteries. <br /> E.g. mobile phone, laptop or kettle.</p>
                <a href="#e-waste" className="item-link">Find out more</a>
            </div>
            <div className="item square-animation">
                <img src="https://images.unsplash.com/photo-1612965110642-d2ed35011901?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Misfits" className="item-image" />
                <h3>Misfits</h3>
                <p>Misfit items are other household items. <br /> E.g. polystyrene, batteries, coffee cups or lightbulbs.</p>
                <a href="#misfits" className="item-link" >Find out more</a>
            </div>
        </div>
    );
};

export default Collect;
