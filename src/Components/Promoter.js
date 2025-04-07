import React, { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { MoreVertical } from "lucide-react";

const PromoterScore = ({ activeFilter }) => {
  const [chartType, setChartType] = useState("bar");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const selectChart = (type) => {
    setChartType(type);
    setDropdownOpen(false);
  };

  const dataSets = {
    Monthly: [
      { name: "Gazibad", promotor: 800, detractor: 300, passive: 200 },
      { name: "Noida", promotor: 700, detractor: 400, passive: 300 },
      { name: "Delhi", promotor: 600, detractor: 500, passive: 400 },
      { name: "Nagpur", promotor: 500, detractor: 300, passive: 300 },
      { name: "Lucknow", promotor: 900, detractor: 200, passive: 100 },
      { name: "Indore", promotor: 850, detractor: 250, passive: 200 },
    ],
    Quarterly: [
      { name: "Gazibad", promotor: 400, detractor: 250, passive: 300 },
      { name: "Noida", promotor: 450, detractor: 220, passive: 290 },
      { name: "Delhi", promotor: 500, detractor: 180, passive: 310 },
      { name: "Nagpur", promotor: 470, detractor: 200, passive: 305 },
      { name: "Lucknow", promotor: 440, detractor: 230, passive: 290 },
      { name: "Indore", promotor: 460, detractor: 210, passive: 295 },
    ],
    Yearly: [
      { name: "Gazibad", promotor: 600, detractor: 490, passive: 110 },
      { name: "Noida", promotor: 750, detractor: 500, passive: 350 },
      { name: "Delhi", promotor: 800, detractor: 500, passive: 210 },
      { name: "Nagpur", promotor: 700, detractor: 700, passive: 140 },
      { name: "Lucknow", promotor: 400, detractor: 850, passive: 290 },
      { name: "Indore", promotor: 550, detractor: 600, passive: 360 },
    ],
  };

  const data = dataSets[activeFilter];
  const COLORS = ["#FF7300", "#0088FE", "#FF6384"];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full md:w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Net Promoter Score</h3>
        <div className="relative">
          <button onClick={toggleDropdown} className="text-gray-600 hover:text-black">
            <MoreVertical size={20} />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md z-10 border">
              <ul className="py-1 text-sm text-gray-700">
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => selectChart("bar")}
                  >
                    Bar Chart
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => selectChart("line")}
                  >
                    Line Chart
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => selectChart("pie")}
                  >
                    Pie Chart
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="h-72">
        {chartType === "bar" && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" barSize={10}>
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip />
              <Legend />
              <Bar dataKey="promotor" stackId="a" fill="#FF7300" />
              <Bar dataKey="detractor" stackId="a" fill="#0088FE" />
              <Bar dataKey="passive" stackId="a" fill="#FF6384" radius={[0, 10, 10, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}

        {chartType === "line" && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="promotor" stroke="#FF7300" />
              <Line type="monotone" dataKey="detractor" stroke="#0088FE" />
              <Line type="monotone" dataKey="passive" stroke="#FF6384" />
            </LineChart>
          </ResponsiveContainer>
        )}

        {chartType === "pie" && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="promotor"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#FF7300">
                {data.map((_, index) => (
                  <Cell key={`cell-promotor-${index}`} fill={COLORS[0]} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="detractor"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={110}
                fill="#0088FE"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-detractor-${index}`} fill={COLORS[1]} />
                ))}
              </Pie>
              <Pie
                data={data}
                dataKey="passive"
                nameKey="name"
                cx="50%"
                cy="50%"
                innerRadius={120}
                outerRadius={140}
                fill="#FF6384"
              >
                {data.map((_, index) => (
                  <Cell key={`cell-passive-${index}`} fill={COLORS[2]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default PromoterScore;
