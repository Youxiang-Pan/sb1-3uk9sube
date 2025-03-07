import React from 'react';
import { ShoppingCart, Truck, Clock, Package } from 'lucide-react';

export const Procurement = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">採購管理</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          新增採購單
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">待處理採購單</h3>
            <ShoppingCart className="w-5 h-5 text-blue-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">12</p>
            <p className="text-gray-500">筆</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">運送中</h3>
            <Truck className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">5</p>
            <p className="text-gray-500">筆訂單</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">待驗收</h3>
            <Package className="w-5 h-5 text-green-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">3</p>
            <p className="text-gray-500">筆訂單</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">逾期未交付</h3>
            <Clock className="w-5 h-5 text-red-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">2</p>
            <p className="text-gray-500">筆訂單</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">採購單列表</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">採購單號</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">品項</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">供應商</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">金額</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">預計到貨</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">狀態</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { id: 'PO-2024-001', item: '太陽能板 500W', supplier: '永光能源', amount: 150000, delivery: '2024/03/20', status: '處理中' },
                { id: 'PO-2024-002', item: '變流器 10kW', supplier: '台灣電力', amount: 85000, delivery: '2024/03/25', status: '運送中' },
                { id: 'PO-2024-003', item: '支架組件', supplier: '建基工業', amount: 45000, delivery: '2024/03/18', status: '待驗收' },
              ].map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.item}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.supplier}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${order.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.delivery}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      order.status === '處理中' ? 'bg-blue-100 text-blue-800' :
                      order.status === '運送中' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {order.status}
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