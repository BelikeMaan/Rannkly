import React, { useState } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import { MoreVertical } from "lucide-react";

const OnlineRating = ({ activeFilter }) => {
  const [chartType, setChartType] = useState("bar");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const selectChartType = (type) => {
    setChartType(type);
    setDropdownOpen(false);
  };

  const dataSets = {
    Monthly: [
      { name: "Gazibad", rating: 91.4, value: 820 },
      { name: "Noida", rating: 68.7, value: 720 },
      { name: "Delhi", rating: 89, value: 650 },
      { name: "Nagpur", rating: 96, value: 810 },
      { name: "Lucknow", rating: 81, value: 640 },
      { name: "Indore", rating: 87, value: 750 },
    ],
    Quarterly: [
      { name: "Gazibad", rating: 93.2, value: 2400 },
      { name: "Noida", rating: 87.5, value: 2250 },
      { name: "Delhi", rating: 76.9, value: 1950 },
      { name: "Nagpur", rating: 90.8, value: 2100 },
      { name: "Lucknow", rating: 83.1, value: 2160 },
      { name: "Indore", rating: 88.7, value: 2340 },
    ],
    Yearly: [
      { name: "Gazibad", rating: 94.1, value: 9600 },
      { name: "Noida", rating: 86.3, value: 9000 },
      { name: "Delhi", rating: 75.5, value: 7800 },
      { name: "Nagpur", rating: 89.6, value: 8400 },
      { name: "Lucknow", rating: 82.0, value: 8640 },
      { name: "Indore", rating: 87.4, value: 9360 },
    ],
  };

  const data = dataSets[activeFilter];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full md:w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Online Rating Index</h3>
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
                    onClick={() => selectChartType("bar")}
                  >
                    Bar Chart
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => selectChartType("line")}
                  >
                    Line Chart
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => selectChartType("pie")}
                  >
                    Pie Chart
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="h-64">
        {chartType === "bar" && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={12}>
              <XAxis dataKey="name"/>
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="rating" fill="#0088FE" radius={[10, 5, 0, 0]} />
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
              <Line type="monotone" dataKey="value" stroke="#00C49F" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        )}

        {chartType === "pie" && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#FF6384"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"][index % 4]} />
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

export default OnlineRating;
