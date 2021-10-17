import React from 'react';
import { Line } from 'react-chartjs-2';

function LineGraph() {
  // const data = [
  //   { x: 10, y: 20 },
  //   { x: 15, y: 10 },
  //   { x: 12, y: 4 },
  //   { x: 5, y: 5 },
  // ];
  const oLinegraphData = {
    labels: [10, 12, 15],
    datasets: [
      {
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        data: [20, 4, 10],
        label: 'First dataset',
        fill: true,
        type: 'line',
      },
    ],
    labels: [10, 12, 15],
  };
  return (
    <div className="linegraph">
      <Line data={oLinegraphData} />
      {/* <Line
        data={{
          datasets: [
            {
              type: 'line',
              data: data,
              backgroundColor: 'black',
              borderColor: '#5AC53B',
              borderWidth: 2,
              pointBorderColor: 'rgba(0, 0, 0, 0)',
              pointBackgroundColor: 'rgba(0, 0, 0, 0)',
              pointHoverBackgroundColor: '#5AC53B',
              pointHoverBorderColor: '#000000',
              pointHoverBorderWidth: 4,
              pointHoverRadius: 6,
            },
          ],
        }}
        options={{
          legend: {
            display: false,
          },
          tooltips: {
            mode: 'index',
            intersect: false,
          },
          scales: {
            yAxis: [
              {
                ticks: {
                  display: false,
                },
              },
            ],
          },
        }}
      /> */}
    </div>
  );
}

export default LineGraph;
