import React, { useState } from "react";
import "./Process.css";
import pic from '../images/bag.png';
import packBackground from '../images/topbackground.png';
import paper from '../images/Paper.png';
import plastic from '../images/plasticwaste.png';
import metal from '../images/metalwaste.png';
import ewaste from '../images/e-waste.png';
import glass from '../images/glass.png';
import rubber from '../images/rubberwaste.png';
import sorting from '../recycleImages/Sorting.png';
import baling from '../recycleImages/baling.png';
import shredding from '../recycleImages/shredding.png';
import washing from '../recycleImages/washing.png';
import bleech from '../recycleImages/bleeching.png';
import press from '../recycleImages/pressing.png';
import roll from '../recycleImages/rolling.png';
import plasticrecycle from '../recycleImages/plastic-recycle.png';
import recovery from '../recycleImages/recovery.png';
import trade from '../recycleImages/trade.png';
import collector from '../recycleImages/collector.png';
import aluminium from '../recycleImages/alimunium.png';
import zinc from '../recycleImages/zinc.png';
import copper from '../recycleImages/copperimg.png';
import nickel from '../recycleImages/nickel.png';
import lead from '../recycleImages/lead.png';
import resources from '../recycleImages/ResourcesEmbedded.png';
import concerns from '../recycleImages/challengesEwaste.png';
import guidelines from '../recycleImages/ewaste2016.png';
import rules from '../recycleImages/ewasteRules.png';
import glassimg from '../recycleImages/glass.png';
import sortingGlass from '../recycleImages/sortingGlass.png';
import cullet from '../recycleImages/cullet.png';
import decontaminate from '../recycleImages/decontaninate.png';
import glassRecycled from '../recycleImages/glassRecycled.png';
import Granulating from '../recycleImages/Granulating.png';
import reuse from '../recycleImages/reuse.png';
import retrading from '../recycleImages/retrading.png';


// Carousel data for different materials WEBSITE : MRAI.ORG
const carouselData = [
    {
        title: "Paper",
        description: "Paper is an essential commodity that can be recycled and reused.",
        imageUrl: paper,
    },
    {
        title: "Plastic",
        description: "Plastic can be recycled into various products, reducing waste and pollution.",
        imageUrl: plastic,
    },
    {
        title: "Metal",
        description: "Ferrous metals are mainly composed of iron and have magnetic properties.",
        imageUrl: metal,
    },
    {
        title: "E-Waste",
        description: "Ferrous metals are mainly composed of iron and have magnetic properties.",
        imageUrl: ewaste,
    },
    {
        title: "Glass",
        description: "Ferrous metals are mainly composed of iron and have magnetic properties.",
        imageUrl: glass,
    },
    {
        title: "Rubber",
        description: "Ferrous metals are mainly composed of iron and have magnetic properties.",
        imageUrl: rubber,
    }
];

// Detailed steps for each material
const detailedData = {
    Paper: [
        {
            imageUrl: sorting,
            title: "Sorting",
            description: "Paper products must be separated according to their composition and degree of deterioration.",
        },
        {
            imageUrl: baling,
            title: "Baling",
            description: "Large quantities of paper are packed using hydraulic machines that apply enormous pressure to compact recovered paper into blocks.",
        },
        {
            imageUrl: shredding,
            title: "Shredding",
            description: "Recovered fibre is shredded into smaller pieces and mixed with water to make pulp.",
        },
        {
            imageUrl: washing,
            title: "Washing",
            description: "The pulp is washed, refined and cleaned, then turned into a slush that undergoes filtering through screens and other separation processes to remove contaminants.",
        },
        {
            imageUrl: bleech,
            title: "Bleeching",
            description: "In order to whiten paper, the pulp can be bleached using hydrogen peroxide and chlorine.",
        },
        {
            imageUrl: press,
            title: "Pressing",
            description: "The resulting paper sheet, known as 'web', is pressed between massive rollers to extract as much of the remaining water as possible.",
        },
        {
            imageUrl: roll,
            title: "Rolling",
            description: "The finished paper is processed into large rolls ready to be manufactured again into new consumer products.",
        }
    ],
    Plastic: [
        {
            imageUrl: plasticrecycle,
            title: "Materials recycling",
            description: "Plastic recycling refers to the process of recovering waste or scrap plastic and reprocessing the materials into functional and useful products.",
        },
        {
            imageUrl: recovery,
            title: "Energy recovery",
            description: "Mechanical recycling of plastics refers to the processing of plastics waste into secondary raw material or products.",
        },
        {
            imageUrl: trade,
            title: "Trader",
            description: "Communicating recycling information about your recycling program.",
        },
        {
            imageUrl: collector,
            title: "Collector",
            description: "Before recycling, most plastics are sorted according to their resin type. In the past, plastic reclaimers used the resin identification code (RIC).",
        }
    ],
    "Metal": [
        {
            imageUrl: aluminium,
            title: "Aluminum",
            description: "One-third of Aluminium demand is supplied by secondary production.",
        },
        {
            imageUrl: copper,
            title: "Copper",
            description: "30% of Copper production comes from copper scrap. By using Copper scrap, we reduce CO2 emission by 65%.",
        },
        {
            imageUrl: lead,
            title: "Lead",
            description: "50% of the world's Lead production originates from secondary lead. ",
        },
        {
            imageUrl: nickel,
            title: "Nickel",
            description: "About 1.44 Mt of Nickel is produced worldwide every year.",
        },
        {
            imageUrl: zinc,
            title: "Zinc",
            description: "Of a total worldwide Zinc production of 11.a Mt, 10.6 Mt was smelter Zinc in which 4.97 was categorized as either primary or secondary.",
        }
    ],
    "E-Waste": [
        {
            imageUrl: resources,
            title: "Resources Embedded in E-Waste",
            description: "For the recycling of e-waste, India heavily depends on the unorganized sector as only a handful of organized e-waste recycling facilities are available.",
        },
        {
            imageUrl: concerns,
            title: "Informal Recycling Concerns",
            description: "High-risk backyard operation-Adverse impact on environment and health. Loss of resources-inefficient process.",

        },
        {
            imageUrl: guidelines,
            title: "E-waste Guidelines-2016",
            description: "Guidelines for Environmentally sound Management of E-waste’ published in March 2008 by GOI [MoEF & CPCB]. This includes Main Features of e-waste Guidelines and basic guidance for handling of e-waste.",
        },
        {
            imageUrl: rules,
            title: "From Guidelines to Rules",
            description: "The Environmental Protection act 1986 has provisions to make rules. The unanimity amongst stakeholders recommended separate. E- Waste (Management) Amendment Rules 2018.",
        }
    ],
    "Glass": [
        {
            imageUrl: glassimg,
            title: "Collection",
            description: "Different types of glass items end up in waste piles and recycle bins after serving their purpose or breaking.",
        },
        {
            imageUrl: sortingGlass,
            title: "Sorting",
            description: "Different types of glasses are prepared by the addition of different chemicals and slight variation in manufacturing processes.",
        },
        {
            imageUrl: cullet,
            title: "Cullet Production",
            description: "Once the waste glass is sorted, it is then turned into tiny pieces also known as ‘cullets’ by means of crushing and grinding.",
        },
        {
            imageUrl: decontaminate,
            title: "De-Contamination Process",
            description: "In order to recycle glass properly, it is imperative to get rid of the contaminants.",
        },
        {
            imageUrl: glassRecycled,
            title: "Making recycled glass products",
            description: "To make recycled glass products, the glass cullet, clear or colored is melted and molded into the desired glass products like bottles, jars, containers, etc.",
        }
    ],
    "Rubber": [
        {
            imageUrl: reuse,
            title: "Re-use",
            description: "Tire recycling, or rubber recycling, is the process of recycling waste tires that are no longer suitable for use on vehicles due to wear or irreparable damage.",
        },
        {
            imageUrl: retrading,
            title: "Re-trading",
            description: "Retread, also known as recap, or a remold is a re-manufacturing process for tires that replace the tread on worn tires. ",
        },
        {
            imageUrl: Granulating,
            title: "Granulating",
            description: "Abandoned tires can be converted to rubber granules for consumption in asphalt rubber industry. ",
        }
    ]
};

const Process = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeMaterial, setActiveMaterial] = useState(null); // Track active material to show corresponding steps

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
        );
    };

    const handleViewMore = (material) => {
        setActiveMaterial(material);
    };

    const handleCloseDetails = () => {
        setActiveMaterial(null);
    };

    return (
        <>
            <div className="full-width-image2">
                <img src={packBackground} alt="Full width banner" />
            </div>
            <h1 className="heading">Know the Recycling Process</h1>
            <div>
                {/* Carousel Section */}
                <div className="carousel-container">
                    <div
                        className="carousel-slide"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {carouselData.map((slide, index) => (
                            <div key={index} className="carousel-item">
                                <img
                                    src={slide.imageUrl}
                                    alt={slide.title}
                                    className="carousel-image"
                                />
                                <div className="carousel-content">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.description}</p>
                                    <button className="carousel-button" onClick={() => handleViewMore(slide.title)}>
                                        View More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="carousel-controls">
                        <button className="carousel-button" onClick={prevSlide}>
                            &#10094;
                        </button>
                        <button className="carousel-button" onClick={nextSlide}>
                            &#10095;
                        </button>
                    </div>

                    <div className="carousel-indicators">
                        {carouselData.map((_, index) => (
                            <div
                                key={index}
                                className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Detailed Section: Shown after clicking "View More" */}
                {activeMaterial && (
                    <div className="details-section">
                        <h2 className="details-heading">{activeMaterial} Recycling Steps/Facts</h2>
                        <div className="details-grid">
                            {/* Render the corresponding steps for the active material */}
                            {detailedData[activeMaterial].map((item, index) => (
                                <div key={index} className="details-card">
                                    <img src={item.imageUrl} alt={item.title} className="img" />
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <button className="close-button" onClick={handleCloseDetails}>Close</button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Process;
