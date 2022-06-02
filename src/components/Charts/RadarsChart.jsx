import React from "react";
import PropTypes from "prop-types";
import {
   Radar,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   PolarRadiusAxis,
   ResponsiveContainer,
} from "recharts";

const RadarsChart = ({ dataValue }) => {
   const typesInFrench = {
      1: "Cardio",
      2: "Energie",
      3: "Endurance",
      4: "Force",
      5: "Vitesse",
      6: "Intensité",
   };
   const types = (type) => typesInFrench[type];

   return (
      <div className="radar-chart">
         <ResponsiveContainer width="100%" height="100%">
            <RadarChart
               cx="48%"
               cy="50%"
               outerRadius="75%"
               data={dataValue}
               margin={{ top: 0, right: 32, bottom: 0, left: 32 }}
            >
               <PolarGrid stroke="#fff" radialLines={false} />
               <PolarAngleAxis
                  dataKey="kind"
                  tickFormatter={types}
                  tick={{
                     fill: "#FFFFFF",
                     fontSize: "12px",
                     dy: 4,
                     y: 10,
                  }}
               />
               <PolarRadiusAxis tick={false} axisLine={false} />
               <Radar dataKey="value" fill="rgba(255, 1, 1, 0.7)" />
            </RadarChart>
         </ResponsiveContainer>
      </div>
   );
};

RadarsChart.propTypes = {
   dataValue: PropTypes.array,
};

export default RadarsChart;
