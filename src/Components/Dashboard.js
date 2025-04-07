import React, { useState } from "react";
import Header from "./Header";
import OnlineRating from "./OnlineRating";
import RespondedReviews from "./RespondedReviews";
import SentimenticScore from "./SentimenticScore";
import Promoter from "./Promoter";
import RatingReview from "./RatingsReview";
import { LayoutGrid, Filter } from "lucide-react";

const Dashboard = () =>{
    const [activeFilter, setActiveFilter] = useState("Monthly");
    return (
        <div className="p-6 ml-64">
            <Header/>
            <div className="flex items-center gap-20 mb-6">
                <p className="text-gray-500 text-sm">Dashboard / Default</p>
                <div className="items-end space-x-2  lg:ml-8">
                    <button
                        onClick={() => setActiveFilter("Monthly")}
                        className={`px-4 py-1 rounded-md text-sm font-medium border ${
                         activeFilter === "Monthly"
                         ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                         }`}
                         >
                        Monthly
                    </button>
                    <button
                        onClick={() => setActiveFilter("Quarterly")}
                        className={`px-4 py-1 rounded-md text-sm font-medium border ${
                        activeFilter === "Quarterly"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                        }`}
                        >
                        Quarterly
                    </button>
                    <button
                        onClick={() => setActiveFilter("Yearly")}
                        className={`px-4 py-1 rounded-md text-sm font-medium border ${
                        activeFilter === "Yearly"
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                        }`}
                        >
                        Yearly
                    </button>
                </div>
                    <button className="flex items-center gap-1 px-3 py-2 text-sm border rounded-md hover:bg-gray-50">
                        <LayoutGrid className="w-4 h-4" />
                        Widgets
                    </button>
                    <button className="flex items-center gap-1 px-3 py-2 text-sm border rounded-md hover:bg-gray-50">
                        <Filter className="w-4 h-4" />
                        Filter
                    </button>
            </div>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                     <div className="w-full md:w-1/3">
                         <OnlineRating activeFilter={activeFilter} />
                     </div>
                    <div className="w-full md:w-1/3">
                        <RespondedReviews activeFilter={activeFilter} />
                    </div>
                    <div className="w-full md:w-1/3">
                        <SentimenticScore activeFilter={activeFilter} />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                     <div className="w-full md:w-1/2">
                         <Promoter activeFilter={activeFilter} />
                     </div>
                    <div className="w-full md:w-1/2">
                        <RatingReview activeFilter={activeFilter} />
                    </div>
                </div>
    </div>
    );
    
};
export default Dashboard;