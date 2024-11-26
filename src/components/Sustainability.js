import React, {useState} from "react";
import Article from "./Article";
import Quiz from "./Quiz";
import "./Sustainability.css";

const Sustainability = () => {
	const [activeQuiz, setActiveQuiz] = useState(null);
	const [showButton, setShowButton] = useState(true);
	const data = [
		{
			id: 1,
			letter: "G",
			title: "Green Initiatives",
			listItems: [
				"Promotes sustainable living practices",
				"Simplifies recycling with convenient pickups",
			],
		},
		{
			id: 2,
			letter: "R",
			title: "Recycling",
			listItems: [
				"Enhances waste management",
				"Increases recycling participation",
				"Supports eco-friendly habits",
			],
		},
		{
			id: 3,
			letter: "E",
			title: "Eco-Education",
			listItems: [
				"Promotes responsible consumption",
				"Strengthens environmental policies",
				"Enhances community awareness",
			],
		},
		{
			id: 4,
			letter: "E",
			title: "Efficient Energy Use",
			listItems: [
				"Promotes use of recycled materials",
				"Encourages green transportation",
			],
		},
		{
			id: 5,
			letter: "N",
			title: "Nature Conservation",
			listItems: [
				"Reduces waste in landfills",
				"Fosters environmental responsibility",
				"Offers eco-friendly solutions",
			],
		},
		{
			id: 6,
			letter: "I",
			title: "Innovative Solutions",
			listItems: [
				"Supports local green projects",
				"Facilitates responsible waste disposal",
			],
		},
		{
			id: 7,
			letter: "F",
			title: "Footprint Reduction",
			listItems: [
				"Provides incentives for recycling",
				"Reduces environmental pollution",
			],
		},
		{
			id: 8,
			letter: "Y",
			title: "Yielding Sustainability",
			listItems: [
				"Encourages minimalistic lifestyles",
				"Promotes the reduction of single-use plastics",
			],
		},
	];
	const handleQuiz = () => {
		setActiveQuiz(true);
		setShowButton(false);
	};
	const handleQuizClose = () => {
		setActiveQuiz(null);
		setShowButton(true);
	};
	return (
		<div className="container">
			<div className="header-wrap-sus">
				{/* <img src={headerSus} /> */}
				<h1 className="header-sus">SUSTAINABILITY</h1>
			</div>
			<div className="text-sus-wrap">
				<div>
					<p className="text-sus">
						Greenify simplifies recycling for its users by providing
						a convenient way to schedule pickups for their recycling
						items. This ease of access encourages more individuals
						to participate in recycling efforts, which helps to
						decrease the amount of waste that ends up in landfills.
						The more people recycle, the better the overall impact
						on the environment, reducing pollution and conserving
						natural resources. <br />
						Additionally, Greenify plays a pivotal role in promoting
						eco-friendly practices. By educating users about the
						importance of recycling and proper waste management, it
						fosters a culture of sustainability. This heightened
						awareness can lead to more sustainable habits in users'
						daily lives, further supporting environmental
						conservation efforts.
					</p>
				</div>
			</div>
			<div className="des-items fade-in-text">
				{data.map((item) => (
					<div className="des-wrap " key={item.id}>
						<div className="des-letter-wrap">
							<h1 data-text={item.letter}>
								<span>{item.letter}</span>
							</h1>
						</div>
						<div className="list-items-sus">
							<h3 className="text-title">{item.title}</h3>
							<ul>
								{item.listItems.map((listItem) => (
									<li>{listItem}</li>
								))}
							</ul>
						</div>
					</div>
				))}
			</div>
			<div className="article-sus-container">
				<Article />
			</div>
			<div className="quizz-container">
				{showButton && (
					<>
						<h2>Test Your Knowledge here!</h2>
						<button
							className="quiz-start-button"
							onClick={handleQuiz}
						>
							Start Quiz
						</button>
					</>
				)}

				{activeQuiz && (
					<div>
						<Quiz />
						<div>
							<button
								className="quiz-start-button"
								onClick={handleQuizClose}
							>
								Close
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Sustainability;
