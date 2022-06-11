import React from "react";

export const JournalEntry = () => {
	return (
		<div className='journal__entry pointer'>
			<div
				className='journal__entry-picture'
				style={{
					backgroundSize: "cover",
					backgroundImage:
						"url(https://www.w3schools.com/w3css/img_workshop.jpg)",
				}}
			></div>
			<div className='journal__entry-body'>
				<p className='journal__entry-title'>New day</p>
				<p className='journal__entry-content'>
					Example entry content full width example entry content
				</p>
			</div>
			<div className='journal__entry-date-box'>
				<span>Monday</span>
				<h4>28</h4>
			</div>
		</div>
	);
};
