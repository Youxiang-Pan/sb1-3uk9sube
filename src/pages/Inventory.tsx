import React from 'react';
import { Package, AlertTriangle, TrendingDown, ArrowUpDown } from 'lucide-react';

export const Inventory = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">庫存管理</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          新增物料
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">總物料數量</h3>
            <Package className="w-5 h-5 text-blue-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">1,234</p>
            <p className="text-gray-500">件</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">庫存警告</h3>
            <AlertTriangle className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">8</p>
            <p className="text-gray-500">項目</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">待補貨</h3>
            <TrendingDown className="w-5 h-5 text-red-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">5</p>
            <p className="text-gray-500">項目</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">本月流動量</h3>
            <ArrowUpDown className="w-5 h-5 text-green-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">256</p>
            <p className="text-gray-500">次異動</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">物料清單</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">物料編號</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">名稱</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">現有數量</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">安全庫存</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">狀態</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { id: 'M001', name: '太陽能板', quantity: 150, safetyStock: 100, status: '正常' },
                { id: 'M002', name: '變流器', quantity: 30, safetyStock: 50, status: '低於安全存量' },
                { id: 'M003', name: '支架', quantity: 200, safetyStock: 150, status: '正常' },
              ].map((item) => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.safetyStock}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      item.status === '正常' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {item.status}
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