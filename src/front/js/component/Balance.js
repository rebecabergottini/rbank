import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  // Data entries...
];

const Balance = () => {
  return (
    <div className="sales">
      <div className="sales__details">
        <div>
          <h4>Balance</h4>
        </div>
        <div>
          <h5>PAST 30 DAY</h5>
        </div>
      </div>
      <div className="sales__graph">
        <ResponsiveContainer width="100%" height="150%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#14121F" />
            <Bar dataKey="uv" stackId="a" fill="#E5E5F1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Balance;
