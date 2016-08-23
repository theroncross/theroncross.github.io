import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend } from 'recharts';
import { colors } from './styles';

const SkillsChart = (props) => {
  return (
    <ResponsiveContainer height={400} >
      <BarChart
        data={props.data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        layout="vertical"
      >
        <XAxis type="number" domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} />
        <YAxis dataKey="name" type="category" width={80} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar dataKey="rating" fill={colors.accent} label={{ fill: colors.dark }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

const { arrayOf, object } = React.PropTypes;

SkillsChart.propTypes = {
  data: arrayOf(object).isRequired,
};

export default SkillsChart;
