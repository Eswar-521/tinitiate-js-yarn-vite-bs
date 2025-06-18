import React from "react";
import { LayoutDashboard } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-6">
          <LayoutDashboard className="text-blue-600 mr-3" size={28} />
          <h2 className="text-xl font-bold text-gray-800">Dashboard</h2>
        </div>
        <p className="text-sm text-gray-600">
          Welcome back! Here’s an overview of your progress and stats.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-100 text-blue-800 p-4 rounded shadow text-sm">
            ✅ 10 Courses Enrolled
          </div>
          <div className="bg-green-100 text-green-800 p-4 rounded shadow text-sm">
            📈 75% Avg Progress
          </div>
          <div className="bg-yellow-100 text-yellow-800 p-4 rounded shadow text-sm">
            🕒 30 Hours Studied
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
