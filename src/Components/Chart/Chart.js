import React from "react";
import '../../CSS/Chart.css';
import CharBar from './ChartBar';


const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {props.dataPoints.map(
                datapoint => <CharBar
                    key={datapoint.label}
                    value={datapoint.value}
                    maxValue={totalMaximum}
                    label={datapoint.label}/>
            )}
        </div>
    );
}

export default Chart;