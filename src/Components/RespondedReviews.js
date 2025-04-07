import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line,
  PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";
import { MoreVertical } from "lucide-react";

const RespondedReviews = ({ activeFilter }) => {
  const [chartType, setChartType] = useState("Bar");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const selectChart = (type) => {
    setChartType(type);
    setDropdownOpen(false);
  };

  const dataSets = {
    Monthly: [
      { name: "Gazibad", Responded: 800, Unresponded: 200 },
      { name: "Noida", Responded: 750, Unresponded: 250 },
      { name: "Delhi", Responded: 900, Unresponded: 100 },
      { name: "Nagpur", Responded: 850, Unresponded: 150 },
      { name: "Lucknow", Responded: 780, Unresponded: 220 },
      { name: "Indore", Responded: 820, Unresponded: 180 },
    ],
    Quarterly: [
      { name: "Gazibad", Responded: 2400, Unresponded: 600 },
      { name: "Noida", Responded: 2250, Unresponded: 750 },
      { name: "Delhi", Responded: 2700, Unresponded: 300 },
      { name: "Nagpur", Responded: 2550, Unresponded: 450 },
      { name: "Lucknow", Responded: 2340, Unresponded: 660 },
      { name: "Indore", Responded: 2460, Unresponded: 540 },
    ],
    Yearly: [
      { name: "Gazibad", Responded: 9600, Unresponded: 2400 },
      { name: "Noida", Responded: 9000, Unresponded: 3000 },
      { name: "Delhi", Responded: 10800, Unresponded: 1200 },
      { name: "Nagpur", Responded: 10200, Unresponded: 1800 },
      { name: "Lucknow", Responded: 9360, Unresponded: 2640 },
      { name: "Indore", Responded: 9840, Unresponded: 2160 },
    ],
  };

  const data = dataSets[activeFilter];
  const COLORS = ["#008CFF", "#A0C4FF", "#FFCC00", "#FF5733", "#7D3C98", "#3498DB"];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full md:w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Responded & Unresponded Reviews</h3>
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
                    onClick={() => selectChart("Bar")}
                  >
                    Bar Chart
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => selectChart("Line")}
                  >
                    Line Chart
                  </button>
                </li>
                <li>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => selectChart("Pie")}
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
        {chartType === "Bar" && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} barSize={10}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Responded" stackId="a" fill="#008CFF" />
              <Bar dataKey="Unresponded" stackId="a" fill="#A0C4FF" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        )}

        {chartType === "Line" && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Responded" stroke="#008CFF" />
              <Line type="monotone" dataKey="Unresponded" stroke="#A0C4FF" />
            </LineChart>
          </ResponsiveContainer>
        )}

        {chartType === "Pie" && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="Responded" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#FF6384"
                label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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

export default RespondedReviews;
