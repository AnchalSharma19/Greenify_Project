import React from 'react';
import './HowToPack.css';
import packBackground from '../images/topbackground.png';
import bag from '../images/bag.png';
import seprateBag from '../images/seperateBag.png';
import leaveBag from '../images/leavebag.png';


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
                    <p>You can use ANY grocery bags.<br />
                        <i>(Roughly around 40x40x20cm/30-35L)</i>
                    </p>
                    <p>We will recycle the plastic bags or leave the reusable bags behind.</p>
                    <p>Please keep bags away from anything you don’t want collected on your doorstep, like your new pair of runners...</p>
                    <p><a href="https://link-to-buy-bags">Buy them here.</a></p>
                </div>

                <div className="how-to-pack-item">
                    <img src={seprateBag} alt="Separate items" className="pack-image" />
                    <h3>Do I have to separate my items?</h3>
                    <p><strong>Keep your soft plastics separate</strong> from items like clothes because they can get some sneaky food on your nice, clean t-shirt.</p>
                    <p><strong>Leave small items on top.</strong> They love to play hide and seek with our drivers. At first it’s cute, but after about five minutes of seeking, it stops being fun.</p>
                </div>

                <div className="how-to-pack-item">
                    <img src={leaveBag} alt="Leave bags" className="pack-image" />
                    <h3>Where do I leave the bags?</h3>
                    <p>Leave them at your doorstep or next to your mailbox for collection.</p>
                    <p><a href="https://link-to-leave-sign">We’ve made one for you to print!</a></p>
                </div>
            </div>
        </>
    );
};

export default HowToPack;
