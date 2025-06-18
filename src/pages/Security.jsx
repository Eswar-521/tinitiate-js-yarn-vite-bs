import React from "react";
import { ShieldCheck } from "lucide-react";

const Security = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white p-10">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center mb-6">
          <ShieldCheck className="text-yellow-600 mr-3" size={28} />
          <h2 className="text-xl font-bold text-gray-800">Security Settings</h2>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          Manage your account privacy and security options.
        </p>
        <ul className="space-y-3">
          <li className="bg-gray-100 rounded p-3 text-sm text-gray-800 shadow">
            🔒 Two-Factor Authentication: <span className="text-green-600">Enabled</span>
          </li>
          <li className="bg-gray-100 rounded p-3 text-sm text-gray-800 shadow">
            📧 Email Alerts: <span className="text-green-600">Active</span>
          </li>
          <li className="bg-gray-100 rounded p-3 text-sm text-gray-800 shadow">
            ⛔ Block Suspicious Logins: <span className="text-red-600">Off</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Security;
