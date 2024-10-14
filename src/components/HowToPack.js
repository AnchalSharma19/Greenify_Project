import React from 'react';
import './HowToPack.css';
import packBackground from '../images/topbackground.png';
import bag from '../images/bag.png';
import seprateBag from '../images/seperateBag.png';
import leaveBag from '../images/leavebag.png';
import plusItems from '../images/bagPack.png';

const HowToPack = () => {
    return (
        <>
            <div className="full-width-image">
                <img src={packBackground} alt="Full width banner" />
            </div>
            <h2>How To Pack</h2>
            <br />
            <br />
            {/* How to Pack Content */}
            <div className="how-to-pack-container">
                <div className="how-to-pack-item">
                    <img src={bag} alt="Bags to use" className="pack-image" />
                    <h3>What bags do I use?</h3>
                    <p>You can use ANY grocery bags.<br /></p>
                    <p>We will recycle the plastic bags or leave the reusable bags behind.</p>
                    <p>Please keep bags away from anything you don’t want collected on your doorstep, like your new pair of shoes... etc.</p>
                    <p><a href="https://link-to-buy-bags">Buy them here.</a></p>
                </div>

                <div className="how-to-pack-item">
                    <img src={seprateBag} alt="Separate items" className="pack-image" />
                    <h3>Do I have to separate my items?</h3>
                    <p><strong>Keep your soft plastics separate</strong> from items like clothes because they can get some sneaky food on your nice, clean t-shirt.</p>
                    <p><strong>Leave small items on top.</strong></p>
                </div>

                <div className="how-to-pack-item">
                    <img src={leaveBag} alt="Leave bags" className="pack-image" />
                    <h3>Where do I leave the bags?</h3>
                    <p>Leave them at your doorstep or next to your mailbox for collection.</p>
                    <p><a href="https://link-to-leave-sign">We’ve made one for you to print!</a></p>
                </div>
            </div>

            {/* PLUS+ Items Section */}
            <div className="plus-items-section">
                <div className="plus-items-image">
                    <img src={plusItems} alt="PLUS+ Items" className="pack-image" />
                </div>
                <div className="plus-items-text">
                    <h3>PLUS+ Items</h3>
                    <p>We’ve extended our service to bigger items, like cardboard and electronics, so you can clear out the clutter!</p>
                    <ul>
                        <li><strong>Clunky Cardboard</strong>: click <a href="#">here</a> for packing info.</li>
                        <li><strong>Big electronics</strong>: Simply leave it by your doorstep, undercover.</li>
                    </ul>
                    <button className="book-pickup-button">Book a Power Pickup</button>
                </div>
            </div>
        </>
    );
};

export default HowToPack;
