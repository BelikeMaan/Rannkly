import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LineChart, Line,
  PieChart, Pie, Cell, ResponsiveContainer
} from "recharts";
import { MoreVertical } from "lucide-react";

const SentimenticScore = ({ activeFilter }) => {
  const [chartType, setChartType] = useState("Bar");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const selectChart = (type) => {
    setChartType(type);
    setDropdownOpen(false);
  };

  const dataSets = {
    Monthly: [
      { name: "Gazibad", Positive: 123, Negative: 99, Neutral: 87, Mixed: 109 },
      { name: "Noida", Positive: 150, Negative: 80, Neutral: 90, Mixed: 120 },
      { name: "Delhi", Positive: 180, Negative: 50, Neutral: 100, Mixed: 140 },
      { name: "Nagpur", Positive: 160, Negative: 70, Neutral: 95, Mixed: 130 },
      { name: "Lucknow", Positive: 140, Negative: 85, Neutral: 88, Mixed: 110 },
      { name: "Indore", Positive: 155, Negative: 60, Neutral: 92, Mixed: 115 },
    ],
    Quarterly: [
      { name: "Gazibad", Positive: 400, Negative: 250, Neutral: 300, Mixed: 350 },
      { name: "Noida", Positive: 450, Negative: 220, Neutral: 290, Mixed: 380 },
      { name: "Delhi", Positive: 500, Negative: 180, Neutral: 310, Mixed: 420 },
      { name: "Nagpur", Positive: 470, Negative: 200, Neutral: 305, Mixed: 390 },
      { name: "Lucknow", Positive: 440, Negative: 230, Neutral: 290, Mixed: 360 },
      { name: "Indore", Positive: 460, Negative: 210, Neutral: 295, Mixed: 370 },
    ],
    Yearly: [
      { name: "Gazibad", Positive: 1600, Negative: 990, Neutral: 870, Mixed: 1090 },
      { name: "Noida", Positive: 1750, Negative: 800, Neutral: 900, Mixed: 1200 },
      { name: "Delhi", Positive: 1800, Negative: 500, Neutral: 1000, Mixed: 1400 },
      { name: "Nagpur", Positive: 1700, Negative: 700, Neutral: 950, Mixed: 1300 },
      { name: "Lucknow", Positive: 1400, Negative: 850, Neutral: 880, Mixed: 1100 },
      { name: "Indore", Positive: 1550, Negative: 600, Neutral: 920, Mixed: 1150 },
    ],
  };

  const data = dataSets[activeFilter];
  const COLORS = ["#00C49F", "#FF6384", "#FFCC00", "#FF8C00"];

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full md:w-full/2">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Sentiment Score</h3>
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
              <Bar dataKey="Positive" stackId="a" fill="#00C49F" />
              <Bar dataKey="Negative" stackId="a" fill="#FF6384" />
              <Bar dataKey="Neutral" stackId="a" fill="#FFCC00" />
              <Bar dataKey="Mixed" stackId="a" fill="#FF8C00" radius={[10, 10, 0, 0]} />
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
              <Line type="monotone" dataKey="Positive" stroke="#00C49F" />
              <Line type="monotone" dataKey="Negative" stroke="#FF6384" />
              <Line type="monotone" dataKey="Neutral" stroke="#FFCC00" />
              <Line type="monotone" dataKey="Mixed" stroke="#FF8C00" />
            </LineChart>
          </ResponsiveContainer>
        )}

        {chartType === "Pie" && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="Positive" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#FF6384"
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

export default SentimenticScore;
