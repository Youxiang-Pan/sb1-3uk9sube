import React from 'react';
import { Clock, Calendar, Users, FileText } from 'lucide-react';

export const Attendance = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">出勤管理</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          新增出勤紀錄
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">今日出勤統計</h3>
            <Clock className="w-5 h-5 text-blue-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">45</p>
            <p className="text-gray-500">位員工出勤</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">本月工時</h3>
            <Calendar className="w-5 h-5 text-green-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">168</p>
            <p className="text-gray-500">小時</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">請假人數</h3>
            <Users className="w-5 h-5 text-red-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">3</p>
            <p className="text-gray-500">位員工請假</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">出勤紀錄</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">員工</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">上班時間</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">下班時間</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">狀態</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { name: '張小明', date: '2024/03/15', checkIn: '08:30', checkOut: '17:30', status: '正常' },
                { name: '李大華', date: '2024/03/15', checkIn: '09:15', checkOut: '18:00', status: '遲到' },
                { name: '王美玲', date: '2024/03/15', checkIn: '08:00', checkOut: '17:00', status: '正常' },
              ].map((record, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{record.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.checkIn}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{record.checkOut}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      record.status === '正常' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};