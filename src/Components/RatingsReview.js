import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MoreVertical } from "lucide-react";

const RatingsReviews = ({ activeFilter }) => {
  const [chartType, setChartType] = useState("bar");
  const [showMenu, setShowMenu] = useState(false);

  const dataSets = {
    Monthly: [
      { name: "Gazibad", appstore: 123, swiggy: 99, tripadvisor: 87, zomato: 109 },
      { name: "Noida", appstore: 110, swiggy: 80, tripadvisor: 70, zomato: 90 },
      { name: "Delhi", appstore: 130, swiggy: 120, tripadvisor: 100, zomato: 115 },
      { name: "Nagpur", appstore: 105, swiggy: 85, tripadvisor: 75, zomato: 95 },
      { name: "Lucknow", appstore: 140, swiggy: 100, tripadvisor: 90, zomato: 120 },
      { name: "Indore", appstore: 125, swiggy: 95, tripadvisor: 85, zomato: 110 },
    ],
    Quarterly: [
      { name: "Gazibad", appstore: 400, swiggy: 250, tripadvisor: 300, zomato: 350 },
      { name: "Noida", appstore: 450, swiggy: 220, tripadvisor: 290, zomato: 380 },
      { name: "Delhi", appstore: 500, swiggy: 180, tripadvisor: 310, zomato: 420 },
      { name: "Nagpur", appstore: 470, swiggy: 200, tripadvisor: 305, zomato: 390 },
      { name: "Lucknow", appstore: 440, swiggy: 230, tripadvisor: 290, zomato: 360 },
      { name: "Indore", appstore: 460, swiggy: 210, tripadvisor: 295, zomato: 370 },
    ],
    Yearly: [
      { name: "Gazibad", appstore: 1600, swiggy: 990, tripadvisor: 870, zomato: 1090 },
      { name: "Noida", appstore: 1750, swiggy: 800, tripadvisor: 900, zomato: 1200 },
      { name: "Delhi", appstore: 1800, swiggy: 500, tripadvisor: 1000, zomato: 1400 },
      { name: "Nagpur", appstore: 1700, swiggy: 700, tripadvisor: 950, zomato: 1300 },
      { name: "Lucknow", appstore: 1400, swiggy: 850, tripadvisor: 880, zomato: 1100 },
      { name: "Indore", appstore: 1550, swiggy: 600, tripadvisor: 920, zomato: 1150 },
    ],
  };

  const data = dataSets[activeFilter];
  const COLORS = ["#FFCC00", "#0088FE", "#FF6384", "#00C49F"];

  return (
    <div className="bg-white rounded-2xl shadow p-4 w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Ratings & Reviews</h3>
        <div className="relative">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 rounded-full hover:bg-gray-100 transition"
          >
            <MoreVertical className="w-5 h-5 text-gray-600" />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-md z-10">
              {["bar", "line", "pie"].map((type) => (
                <button
                  key={type}
                  onClick={() => {
                    setChartType(type);
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)} Chart
                </button>
              ))}
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
              <Bar dataKey="appstore" stackId="a" fill="#FFCC00" />
              <Bar dataKey="swiggy" stackId="a" fill="#0088FE" />
              <Bar dataKey="tripadvisor" stackId="a" fill="#FF6384" />
              <Bar dataKey="zomato" stackId="a" fill="#00C49F" radius={[0, 10, 10, 0]} />
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
              <Line type="monotone" dataKey="appstore" stroke="#FFCC00" />
              <Line type="monotone" dataKey="swiggy" stroke="#0088FE" />
              <Line type="monotone" dataKey="tripadvisor" stroke="#FF6384" />
              <Line type="monotone" dataKey="zomato" stroke="#00C49F" />
            </LineChart>
          </ResponsiveContainer>
        )}

        {chartType === "pie" && (
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} dataKey="appstore" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#FFCC00">
                {data.map((_, index) => (
                  <Cell key={`appstore-${index}`} fill={COLORS[0]} />
                ))}
              </Pie>
              <Pie data={data} dataKey="swiggy" nameKey="name" cx="50%" cy="50%" innerRadius={90} outerRadius={110} fill="#0088FE">
                {data.map((_, index) => (
                  <Cell key={`swiggy-${index}`} fill={COLORS[1]} />
                ))}
              </Pie>
              <Pie data={data} dataKey="tripadvisor" nameKey="name" cx="50%" cy="50%" innerRadius={120} outerRadius={140} fill="#FF6384">
                {data.map((_, index) => (
                  <Cell key={`tripadvisor-${index}`} fill={COLORS[2]} />
                ))}
              </Pie>
              <Pie data={data} dataKey="zomato" nameKey="name" cx="50%" cy="50%" innerRadius={150} outerRadius={170} fill="#00C49F">
                {data.map((_, index) => (
                  <Cell key={`zomato-${index}`} fill={COLORS[3]} />
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

export default RatingsReviews;