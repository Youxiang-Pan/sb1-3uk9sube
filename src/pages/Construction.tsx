import React from 'react';
import { Camera, FileText, Calendar, Upload } from 'lucide-react';

export const Construction = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">施工日誌</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          新增日誌
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">今日工程進度</h3>
            <Calendar className="w-5 h-5 text-blue-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">85%</p>
            <p className="text-gray-500">預計完工日期: 2024/04/15</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">施工照片</h3>
            <Camera className="w-5 h-5 text-green-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">24</p>
            <p className="text-gray-500">張照片已上傳</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">待處理事項</h3>
            <FileText className="w-5 h-5 text-red-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">3</p>
            <p className="text-gray-500">項待辦事項</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">施工日誌列表</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">日期</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">工程項目</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">進度描述</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">照片數量</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">狀態</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { date: '2024/03/15', project: '太陽能板安裝', description: '完成A區域安裝', photos: 8, status: '已完成' },
                { date: '2024/03/14', project: '線路配置', description: '主要線路佈設', photos: 12, status: '進行中' },
                { date: '2024/03/13', project: '基礎工程', description: '支架基礎施工', photos: 6, status: '已完成' },
              ].map((log, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{log.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{log.project}</td>
                  <td className="px-6 py-4">{log.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{log.photos}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      log.status === '已完成' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Upload className="w-5 h-5 text-gray-500" />
          <h2 className="text-xl font-semibold">上傳施工照片</h2>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          <p className="text-gray-500">拖曳照片至此處或點擊上傳</p>
          <button className="mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
            選擇檔案
          </button>
        </div>
      </div>
    </div>
  );
};