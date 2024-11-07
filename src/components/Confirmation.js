import React from "react";
import {Link} from "react-router-dom";
import "./Confirmation.css";

const Confirmation = () => {
	return (
		<div>
			<div className="confirmation-container">
				<h2 className="confirmation-heading">Order Confirmation</h2>
				<div className="confirmation-card">
					<table className="confirmation-table">
						<thead>
							<tr>
								<th className="confirmation-th">Field</th>
								<th className="confirmation-th">Details</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="confirmation-td confirmation-title">
									Name
									<span>Edit</span>
								</td>
								<td className="confirmation-td">
									{/* {name} */}Janaki
								</td>
							</tr>
							<tr>
								<td className="confirmation-td confirmation-title">
									Address
									<span>Edit</span>
								</td>
								<td className="confirmation-td">
									{/* {address} */}address
								</td>
							</tr>
							<tr>
								<td className="confirmation-td confirmation-title">
									Items Selected
									<span>Edit</span>
								</td>
								<td className="confirmation-td">
									<ul className="confirmation-ul">
										{/* {itemsPurchased.map((item, index) => (
										<li key={index}>{item}</li>
									))} */}
										<li className="confirmation-li">
											plastic
										</li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="confirmation-btn">
					<Link to="/Congratulation">
						{/* <button className="btn">BACK</button> */}
						<button className="btn ">CONFIRM</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Confirmation;
