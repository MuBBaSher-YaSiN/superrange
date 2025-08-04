"use client";

import React from "react";
import { useTimer } from "react-timer-hook";

const Timer = () => {
	const expiryTimestamp = new Date("2025-12-31");
	const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });
	// Calculate months left
	const currentDate = new Date();
	const monthsDifference = expiryTimestamp.getMonth() - currentDate.getMonth() + 
		(12 * (expiryTimestamp.getFullYear() - currentDate.getFullYear()));
	const months = monthsDifference > 0 ? monthsDifference : 0;

	return (
		<>
			<div className="time-info" id="comming-section">
					<div className="time-card">
							<h1 className="time-text ak-stroke-number color-white" id="months">{months}</h1>
							<p>Months</p>
					</div>
					<div className="time-card">
							<h1 className="time-text ak-stroke-number color-white" id="days">{days}</h1>
							<p>Days</p>
					</div>
					<div className="time-card">
							<h1 className="time-text ak-stroke-number color-white" id="hours">{hours}</h1>
							<p>Hours</p>
					</div>
					<div className="time-card">
							<h1 className="time-text ak-stroke-number color-white" id="minutes">{minutes}</h1>
							<p>Minutes</p>
					</div>
					<div className="time-card">
							<h1 className="time-text ak-stroke-number color-white" id="secound">{seconds}</h1>
							<p>Seconds</p>
					</div>
			</div>
		</>
	);
};

export default Timer;
