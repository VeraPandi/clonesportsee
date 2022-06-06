import React from "react";
import PropTypes from "prop-types";
import {
   RadialBarChart,
   RadialBar,
   ResponsiveContainer,
   PolarAngleAxis,
} from "recharts";

/**
 * Displays the average user score in a chart
 * @property {array} data - User data
 * @constant {number} score - User score set as an integer
 * @constant {array} integerScore - User score to display
 * @return {JSX.Element} - Returns a chart
 */

const RadialsBarChart = ({ data }) => {
   const score = (data.todayScore || data.score) * 100;
   const integerScore = [{ value: score }];

   return (
      <div className="radialBar-chart">
         <h3 className="title">Score</h3>
         <div className="result">
            <span className="score">{score}%</span>
            <span className="text">de votre objectif</span>
         </div>

         <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
               cx="50%"
               cy="55%"
               innerRadius={80}
               barSize={11}
               data={integerScore}
               startAngle={90}
               endAngle={500}
            >
               <PolarAngleAxis
                  type="number"
                  domain={[0, 100]}
                  angleAxisId={0}
                  tick={false}
               />
               <RadialBar dataKey="value" cornerRadius={50} fill="#FF0000" />
            </RadialBarChart>
         </ResponsiveContainer>
      </div>
   );
};

RadialsBarChart.propTypes = {
   data: PropTypes.object,
};

export default RadialsBarChart;
