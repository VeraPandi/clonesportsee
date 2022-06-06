import React from "react";
import PropTypes from "prop-types";
import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
} from "recharts";

/**
 * Display user session duration on hover
 * @property {boolean} active - If "true", tooltip appears on hover
 * @property {array} payload - Documents the "day" and "sessionLength" properties
 * @return {JSX.Element} - If active and payload are true, returns a tooltip
 */

const CustomToolTip = ({ active, payload }) => {
   if (active && payload) {
      return (
         <aside className="lineChart-toolTip">
            <span>{`${payload[0].value}`} min</span>
         </aside>
      );
   }
   return null;
};

/**
 * Display a background when targeting a session on the chart
 * @property {array} points - Position of a session on the chart line
 * @return {JSX.Element} - Returns a background
 */

const CustomHover = ({ points }) => {
   return (
      <rect
         x={points[0].x}
         y={0}
         height="100%"
         width="100%"
         fill="rgba(0, 0, 0, 0.1)"
      />
   );
};

/**
 * Display the average duration of user sessions as a chart
 * @param {array} data - User data
 * @constant {object} daysToString - Days of the week defined in string
 * @constant {string} days - Days of the week
 * @property {number} sessionLength - Session duration
 * @return {JSX.Element} - Returns a chart
 */

const LinesChart = (data) => {
   const daysToString = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
   };
   const days = (day) => daysToString[day];

   return (
      <div className="line-chart">
         <h3>Durée moyenne des sessions</h3>
         <ResponsiveContainer width="100%" height="100%">
            <LineChart
               data={data.data}
               margin={{
                  top: 0,
                  right: 0,
                  left: 0,
                  bottom: 0,
               }}
            >
               <CartesianGrid
                  fill="#FF0000"
                  vertical={false}
                  horizontal={false}
               />

               <XAxis
                  tickLine={false}
                  axisLine={false}
                  dataKey="day"
                  tickFormatter={days}
                  tick={{
                     fill: "#FFFFFF",
                     fontSize: 13,
                     dy: -15,
                  }}
                  interval="preserveStartEnd"
               />

               <YAxis
                  hide
                  domain={["dataMin-30", "dataMax+80"]}
                  tickLine={false}
                  axisLine={false}
                  tickCount={7}
               />
               <Tooltip content={<CustomToolTip />} cursor={<CustomHover />} />
               <Line
                  type="natural"
                  dataKey="sessionLength"
                  stroke="#FFFFFF"
                  strokeOpacity={0.8}
                  activeDot={{
                     r: 3,
                     background: "#FFFFFF",
                     strokeOpacity: "0.6",
                     strokeWidth: "10",
                  }}
                  strokeWidth={2}
                  dot={false}
               />
            </LineChart>
         </ResponsiveContainer>
      </div>
   );
};

CustomToolTip.propTypes = {
   active: PropTypes.bool,
   payload: PropTypes.array,
};

CustomHover.propTypes = {
   points: PropTypes.array,
};

LinesChart.propTypes = {
   data: PropTypes.array,
};

export default LinesChart;
