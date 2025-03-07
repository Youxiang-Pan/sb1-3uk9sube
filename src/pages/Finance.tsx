import React from 'react';
import { DollarSign, TrendingUp, FileText, CreditCard } from 'lucide-react';

export const Finance = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">財務管理</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          新增交易
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">本月收入</h3>
            <DollarSign className="w-5 h-5 text-green-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">$850,000</p>
            <p className="text-gray-500">較上月 +15%</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">本月支出</h3>
            <CreditCard className="w-5 h-5 text-red-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">$620,000</p>
            <p className="text-gray-500">較上月 -8%</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">淨利</h3>
            <TrendingUp className="w-5 h-5 text-blue-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">$230,000</p>
            <p className="text-gray-500">毛利率 27%</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">待付款項</h3>
            <FileText className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="mt-4">
            <p className="text-3xl font-bold">$145,000</p>
            <p className="text-gray-500">8 筆待處理</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">交易紀錄</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">交易日期</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">說明</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">專案</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">金額</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">類型</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">狀態</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { date: '2024/03/15', description: '太陽能板採購款', project: 'PRJ-2024-001', amount: 150000, type: '支出', status: '已付款' },
                { date: '2024/03/14', description: '工程進度款', project: 'PRJ-2024-002', amount: 300000, type: '收入', status: '已收款' },
                { date: '2024/03/13', description: '設備維護費', project: 'PRJ-2024-001', amount: 45000, type: '支出', status: '待付款' },
              ].map((transaction, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{transaction.project}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${transaction.amount.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.type === '收入' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.status === '已收款' ? 'bg-green-100 text-green-800' :
                      transaction.status === '已付款' ? 'bg-blue-100 text-blue-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {transaction.status}
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