import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const mockData = [
  { name: '專案A', progress: 75 },
  { name: '專案B', progress: 45 },
  { name: '專案C', progress: 90 },
  { name: '專案D', progress: 30 },
];

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">儀表板</h1>
        <div className="text-sm text-gray-500">
          最後更新: {new Date().toLocaleString('zh-TW')}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: '進行中專案', value: '12', color: 'bg-blue-500' },
          { title: '今日出勤人數', value: '45', color: 'bg-green-500' },
          { title: '待處理採購單', value: '8', color: 'bg-yellow-500' },
          { title: '物料警告', value: '3', color: 'bg-red-500' },
        ].map((stat) => (
          <div
            key={stat.title}
            className="bg-white rounded-lg shadow p-6"
          >
            <h3 className="text-gray-500 text-sm">{stat.title}</h3>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
            <div className={`h-1 ${stat.color} mt-4 rounded`}></div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">專案進度概覽</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="progress" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};