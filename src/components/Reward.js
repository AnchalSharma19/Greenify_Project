// Reward.js
import React, { useState, useEffect } from "react";
import "./Reward.css";
import coin from '../images/dollar.png'
import bottle from '../images/bottle.webp'
import bag from '../images/resuableBag.png'
import solar from '../images/solarcharger.png'
import bamboo from '../images/bamboo.png'
import bin from '../images/bin.webp'
import kit from '../images/kit.jpg'
import lamp from '../images/lamp.avif'
import notebook from '../images/notebook.jpg'
import bike from '../images/bike.jpeg'
import smartbin from '../images/smartBin.webp'

// Sample reward data (you can replace it with real data fetched from your API)
const rewardItems = [
    { id: 1, points: 10, title: "Reusable Bottle", image: bottle, description: "A high-quality reusable water bottle." },
    { id: 2, points: 10, title: "Eco-Friendly Bag", image: bag, description: "A bag made from recycled materials." },
    { id: 3, points: 20, title: "Solar Charger", image: solar, description: "A portable solar charger for your devices." },
    { id: 4, points: 20, title: "Bamboo Toothbrush", image: bamboo, description: "An eco-friendly bamboo toothbrush." },
    { id: 5, points: 30, title: "Compost Bin", image: bin, description: "A home composting bin for your kitchen waste." },
    { id: 6, points: 30, title: "Organic Plant Kit", image: kit, description: "A kit to grow your own plants organically." },
    { id: 7, points: 40, title: "Recycled Desk Lamp", image: lamp, description: "A desk lamp made from recycled materials." },
    { id: 8, points: 40, title: "Eco-Friendly Notebook", image: notebook, description: "A notebook made from recycled paper." },
    { id: 9, points: 50, title: "Electric Bike", image: bike, description: "An eco-friendly electric bike for commuting." },
    { id: 10, points: 50, title: "Smart Recycling Bin", image: smartbin, description: "A smart bin for recycling with sensors." }
];

const Reward = () => {
    const [coins, setCoins] = useState(null); // Coins will be set after fetching (or null if failed)
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate fetching coins data
        setTimeout(() => {
            // Simulating failure to fetch data
            setCoins(null);
            setIsLoading(false);
        }, 2000);
    }, []);

    const renderRewardCards = (points) => {
        return rewardItems
            .filter((item) => item.points <= points)
            .map((item) => (
                <div key={item.id} className="reward-card">
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                </div>
            ));
    };

    return (
        <div className="reward-container">
            {isLoading ? (
                <div className="loading">Please wait, your content is on the way...</div>
            ) : (
                <div>
                    {/* If coins are not fetched */}
                    {coins === null ? (
                        <div>
                            <p className="error-message">Opps! Unable to fetch your Reward Data. Please try again later.</p>
                            <h3>Check Out the Rewards You Can Earn</h3>

                            {/* Reward sections for 10, 20, 30, and 50 points */}
                            <div className="reward-section">
                                <img src={coin} alt="coins" className="animated-coin" height="60" width="60" />

                                <p>10 Points</p>
                                <div className="reward-cards">{renderRewardCards(10)}</div>
                            </div>

                            <div className="reward-section">
                                <img src={coin} alt="coins" className="animated-coin" height="60" />
                                <p>20 Points</p>
                                <div className="reward-cards">{renderRewardCards(20)}</div>
                            </div>

                            <div className="reward-section">
                                <img src={coin} alt="coins" className="animated-coin" height="60" />
                                <p>30 Points</p>
                                <div className="reward-cards">{renderRewardCards(30)}</div>
                            </div>

                            <div className="reward-section">
                                <img src={coin} alt="coins" className="animated-coin" height="60" />
                                <p>40 Points</p>
                                <div className="reward-cards">{renderRewardCards(40)}</div>
                            </div>

                            <div className="reward-section">
                                <img src={coin} alt="coins" className="animated-coin" height="60" />
                                <p>50 Points</p>
                                <div className="reward-cards">{renderRewardCards(60)}</div>
                            </div>
                        </div>
                    ) : (
                        // If coins are fetched successfully, show the available rewards for the user
                        <div>
                            <h3>Your Rewards</h3>
                            <p>You have {coins} points!</p>
                            <h4>Explore Rewards You Can Redeem</h4>

                            <div className="reward-section">
                                <h3>{coins} Points</h3>
                                <div className="reward-cards">{renderRewardCards(coins)}</div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Reward;
