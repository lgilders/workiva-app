import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { summarize } from '../data/dataTransformer';
import '../styles/GraphDisplay.css';

let chartData = {}
const chartOptions = { scales: { yAxes: [{ ticks: { beginAtZero:true } }] }  };

class GraphDisplay extends Component {

    componentWillMount = () => { // grabs summarized data for display
        chartData = summarize(this.props.data)
    }

    render() {
        return (
            <div className="graphDisplay">
                <Line data={chartData} options={chartOptions} width={1200} height={350}></Line>
            </div>
        )
    }
}

export default GraphDisplay;
