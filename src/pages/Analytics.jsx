import React from "react";
import { BarChart2 } from "lucide-react";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex items-center mb-6">
          <BarChart2 className="text-green-600 mr-3" size={28} />
          <h2 className="text-xl font-bold text-gray-800">Analytics</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Visual breakdown of your learning patterns.
        </p>
        <div className="space-y-4 text-sm text-gray-700">
          <div className="bg-green-100 rounded p-4 shadow">
            ✅ Most Active Day: <strong>Wednesday</strong>
          </div>
          <div className="bg-blue-100 rounded p-4 shadow">
            ⏳ Avg Session Length: <strong>45 min</strong>
          </div>
          <div className="bg-yellow-100 rounded p-4 shadow">
            🔁 Repeat Views: <strong>25%</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
