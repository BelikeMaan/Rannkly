// Sidebar Component with Redux, React Router, and Tailwind CSS

import React from "react";
import { NavLink } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/appSlice";
import { Home, BarChart2, Settings, MessageCircle, FileText, ChevronsLeft } from "lucide-react";

const menuItems = [
  {
    section: "MAIN",
    items: [
      { label: "Dashboard", icon: <Home size={18} />, path: "/main/dashboard" },
      { label: "Analytics", icon: <BarChart2 size={18} />, path: "/main/analytics" },
      { label: "Settings", icon: <Settings size={18} />, path: "/main/settings" },
      { label: "Social Media", icon: <MessageCircle size={18} />, path: "/main/social-media" },
      { label: "Surveys", icon: <FileText size={18} />, path: "/main/surveys" },
    ],
  },
  {
    section: "MANAGEMENT",
    items: [
      { label: "Dashboard", icon: <Home size={18} />, path: "/management/dashboard" },
      { label: "Analytics", icon: <BarChart2 size={18} />, path: "/management/analytics" },
      { label: "Settings", icon: <Settings size={18} />, path: "/management/settings" },
      { label: "Social Media", icon: <MessageCircle size={18} />, path: "/management/social-media" },
      { label: "Surveys", icon: <FileText size={18} />, path: "/management/surveys" },
    ],
  },
];

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  return (
    <div className={`fixed top-0 left-0 h-full bg-white shadow-md z-50 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} overflow-hidden`}>
      <div className="flex items-center justify-between p-4">
        {isOpen && <h1 className="text-xl font-bold">Rannkly</h1>}
        <button onClick={() => dispatch(toggleSidebar())}>
          <ChevronsLeft size={20} />
        </button>
      </div>
      <div className="mt-4">
        {menuItems.map((section) => (
          <div key={section.section} className="mb-6">
            <h2 className={`text-xs font-semibold px-4 text-gray-500 ${!isOpen && 'hidden'}`}>{section.section}</h2>
            <ul>
              {section.items.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-4 px-4 py-2 rounded-lg hover:bg-purple-100 text-sm transition ${
                        isActive ? 'bg-purple-100 text-purple-700 font-medium' : 'text-gray-800'
                      }`
                    }
                  >
                    {item.icon}
                    {isOpen && <span>{item.label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
