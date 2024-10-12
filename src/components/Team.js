import React from 'react';
import './Team.css';
import teamImage from '../images/ourTeam.png';

import memberOne from '../images/MemberOne.png';
import memberTwo from '../images/MemberTwo.png'
import memberThree from '../images/ourTeam.png';

const Team = () => {
    const founders = [
        {
            name: 'Anchal Sharma',
            title: 'Team Member',
            description: 'Hello! I am Anchal Sharma, currently a Major at GTBIT, specializing in Information Technology. My passion for software development has driven me to excel in key areas such as Data Structures and Algorithms (DSA), Java, JavaScript, React and Development throughout my academic journey. As I continue on my path, I am excited to deepen my understanding of these domains and expand my skill set to tackle real-world challenges effectively. I firmly believe in the power of continual learning and exploration, recognizing them as vital components for personal and professional growth.',
            link: 'https://www.linkedin.com/in/anchal-sharma-b61324236/',
            image: memberOne,
        },
        {
            name: 'Janaki Pal',
            title: 'Team Member',
            description: 'Hey! I am Janaki Pal, currently a 4th year student at GTBIT, specializing in Information Technology. My passion for software development has driven me to excel in key areas such as Data Structures and Algorithms (DSA), Java, JavaScript, React and Development throughout my academic journey. As I continue on my path, I am excited to deepen my understanding of these domains and expand my skill set to tackle real-world challenges effectively. I firmly believe in the power of continual learning and exploration, recognizing them as vital components for personal and professional growth.',
            link: 'https://www.linkedin.com/in/janaki-pal-4200ba285',
            image: memberTwo,
        },
        {
            name: 'Ankita Bhatt',
            title: 'Team Member',
            description: 'Founder 3’s description. Mention their role in the company, responsibilities, and impact on the growth of the business.',
            link: 'https://www.linkedin.com/in/anchal-sharma-b61324236/',
            image: memberThree,
        }
    ];

    return (
        <div className="team-section">
            {/* Team Image and Quote */}
            <div className="team-image-container">
                <img src={teamImage} alt="Our Team" className="team-image" />
                <div className="quote-overlay">
                    <h2>Our Team</h2>
                    <p>"Coming together is a beginning; keeping together is progress; working together is success." – Henry Ford</p>
                </div>
            </div>

            {/* Founders Section */}
            <div className="founders-section">
                <h2>About Our Team</h2>
                <div className="founders-list">
                    {founders.map((founder, index) => (
                        <div className="founder-profile" key={index}>
                            <div className="founder-image">
                                <img src={founder.image} alt={`${founder.name} - ${founder.title}`} />
                            </div>
                            <div className="founder-info">
                                <h3>{founder.name}</h3>
                                <h4>{founder.title}</h4>
                                <p>{founder.description}</p>
                                {founder.link && (
                                    <p>
                                        <br />
                                        <a href={founder.link} target="_blank" rel="noopener noreferrer">
                                            LinkedIn Profile
                                        </a>
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Team;
