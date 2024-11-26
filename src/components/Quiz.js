import React, {useState} from "react";
import "./Quiz.css";
const Quiz = () => {
	const [Score, setScore] = useState(null);

	const data = [
		{
			id: 1,
			question:
				"1. What does environmental sustainability primarily aim to achieve?",
			op1: "Increased pollution",
			op2: "Short-term economic gains",
			op3: "Meeting present needs without compromising future generations",
			op4: "Overconsumption of resources",
			name: "q1",
		},
		{
			id: 2,
			question: "2. How does recycling contribute to waste reduction?",
			op1: "By decreasing awareness of waste management",
			op2: "By preventing recyclable materials from being disposed of",
			op3: "By promoting the use of single-use items",
			op4: "By increasing the amount of waste in landfills",
			name: "q2",
		},
		{
			id: 3,
			question: "3. What is a significant economic benefit of recycling?",
			op1: "It increases production costs",
			op2: "It leads to higher prices for consumers",
			op3: "It creates jobs in the recycling industry",
			op4: " It decreases the demand for sustainable products",
			name: "q3",
		},
		{
			id: 4,
			question:
				"4. Which of the following is a challenge faced in recycling?",
			op1: "Contamination of recyclable materials",
			op2: "Abundant markets for all recycled products",
			op3: "Decreased energy savings",
			op4: "Increased public awareness",
			name: "q4",
		},
		{
			id: 5,
			question: "5. What is one way recycling helps conserve resources? ",
			op1: "By increasing the need for raw materials",
			op2: "By reducing the demand for virgin resources",
			op3: " By promoting the use of non-renewable resources",
			op4: "By encouraging waste generation",
			name: "q5",
		},
		{
			id: 6,
			question:
				"6. Which of the following practices is essential for reducing contamination in recycling?",
			op1: "Educating the public about recycling",
			op2: "Ignoring proper waste sorting",
			op3: "Discarding all recyclable materials together",
			op4: "Using more single-use plastics",
			name: "q6",
		},
		{
			id: 7,
			question: "7. What is a key strategy to enhance recycling efforts?",
			op1: "Reducing processing capacity",
			op2: "Implementing improved collection systems",
			op3: "Limiting public awareness campaigns",
			op4: "Increasing landfill usagebon",
			name: "q7",
		},
		{
			id: 8,
			question: "8. How does recycling contribute to energy savings?",
			op1: "By requiring more energy to produce new materials",
			op2: " By promoting energy-intensive processes",
			op3: "By increasing greenhouse gas emissions",
			op4: "By using less energy compared to producing from virgin materials",
			name: "q8",
		},
		{
			id: 9,
			question:
				"9. What role does financial incentive play in recycling? ",
			op1: "It motivates individuals and businesses to recycle",
			op2: " It discourages recycling efforts",
			op3: " It increases costs for recycling programs",
			op4: " It limits the supply of recyclable materials",
			name: "q9",
		},
		{
			id: 10,
			question:
				"10. What is a primary goal of implementing education and awareness programs regarding recycling? ",
			op1: "To increase contamination rates",
			op2: "To discourage recycling participation",
			op3: "To promote responsible waste management practices",
			op4: "To reduce the importance of recycling",
			name: "q10",
		},
	];
	const submitQuiz = () => {
		const answers = {
			q1: "Meeting present needs without compromising future generations",
			q2: "By preventing recyclable materials from being disposed of",
			q3: "It creates jobs in the recycling industry",
			q4: "Contamination of recyclable materials",
			q5: "By reducing the demand for virgin resources",
			q6: "Educating the public about recycling",
			q7: "Implementing improved collection systems",
			q8: "By using less energy compared to producing from virgin materials",
			q9: "It motivates individuals and businesses to recycle",
			q10: "To promote responsible waste management practices",
		};
		let score = 0;

		for (const [question, correctAnswer] of Object.entries(answers)) {
			const options = document.getElementsByName(question);
			for (const option of options) {
				if (option.checked && option.value === correctAnswer) {
					score++;
				}
			}
		}

		return score;
	};
	const handleSubmit = () => {
		setScore(true);
	};
	return (
		<div>
			<div class="quiz-container">
				<div class="quiz-header">
					<h2>Select the Correct Option</h2>
				</div>
				<div className="quiz-body">
					{data.map((item) => (
						<>
							<div className="question" key={item.id}>
								{item.question}
							</div>
							<ul className="options">
								<li>
									<input
										type="radio"
										id={`q${item.id}option1`}
										name={item.name}
										value={item.op1}
									/>
									<label for={`q${item.id}option1`}>
										{item.op1}
									</label>
								</li>
								<br />
								<li>
									<input
										type="radio"
										id={`q${item.id}option2`}
										name={item.name}
										value={item.op2}
									/>
									<label for={`q${item.id}option2`}>
										{item.op2}
									</label>
								</li>
								<br />
								<li>
									<input
										type="radio"
										id={`q${item.id}option3`}
										name={item.name}
										value={item.op3}
									/>
									<label for={`q${item.id}option3`}>
										{item.op3}
									</label>
								</li>
								<br />
								<li>
									<input
										type="radio"
										id={`q${item.id}option4`}
										name={item.name}
										value={item.op4}
									/>
									<label for={`q${item.id}option4`}>
										{item.op4}
									</label>
								</li>
							</ul>
						</>
					))}
				</div>
				<div class="quiz-footer">
					<button onClick={handleSubmit}>Submit</button>
				</div>
				{Score && (
					<div className="quiz-score">
						<h3> Your Score is: {submitQuiz()}</h3>
					</div>
				)}
			</div>
		</div>
	);
};

export default Quiz;
