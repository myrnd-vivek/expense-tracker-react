import React from "react";
import ChartBar from "./ChartBar";
import "./chart.css";

const Chart = (props) => {
	const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
	const totalMax = Math.max(...dataPointValues)
	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint,index) => (
				<ChartBar
					key={index}
					value={dataPoint.value}
					maxValue={totalMax}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
