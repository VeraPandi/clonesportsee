import React from "react";
import { PureComponent } from "react";
import {
   BarChart,
   Bar,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer,
} from "recharts";

const CustomToolTip = ({ active, payload }) => {
   if (active && payload) {
      return (
         <aside className="toolTip">
            <span>{`${payload[0].value}`} kg</span>
            <span>{`${payload[1].value}`} kCal</span>
         </aside>
      );
   }
   return null;
};

const BarsChart = (data) => {
   return (
      <div className="bar-chart">
         <h3>Activité quotidienne</h3>

         <ResponsiveContainer width="100%" height="100%" aspect={4}>
            <BarChart
               width={500}
               height={350}
               data={data.data}
               margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
               }}
            >
               <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#eee"
               />
               <XAxis
                  dataKey="day"
                  tickLine={false}
                  tick={{ fill: "#9B9EAC", dy: 12 }}
                  tickFormatter={(day) => new Date(day).getDate()}
               />
               <YAxis
                  tickLine={false}
                  axisLine={false}
                  orientation="right"
                  tick={{ fill: "#9B9EAC", dx: 45 }}
                  tickCount={3}
                  dataKey="kilogram"
                  yAxisId="kilogram"
                  domain={["dataMin-2", "dataMax+1"]}
               />
               <YAxis
                  hide
                  dataKey="calories"
                  yAxisId="calories"
                  domain={[0, "dataMax+1"]}
               />
               <Tooltip content={<CustomToolTip />} />
               <Legend
                  verticalAlign="top"
                  align="right"
                  height={36}
                  iconType="circle"
                  iconSize="8"
               />
               <Bar
                  yAxisId="kilogram"
                  name="Poids (kg)"
                  dataKey="kilogram"
                  fill="#282D30"
                  radius={[3.5, 3.5, 0, 0]}
                  barSize={7}
                  color="#74798c"
               />
               <Bar
                  yAxisId="calories"
                  name="Calories brûlées (kCal)"
                  dataKey="calories"
                  fill="#E60000"
                  radius={[3.5, 3.5, 0, 0]}
                  barSize={7}
                  color="#74798c"
               />
            </BarChart>
         </ResponsiveContainer>
      </div>
   );
};

export default BarsChart;
