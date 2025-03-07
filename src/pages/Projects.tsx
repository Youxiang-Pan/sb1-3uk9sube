import React from 'react';
import { FileText, Calendar, User, MoreVertical } from 'lucide-react';

export const Projects = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">專案管理</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          新增專案
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5].map((project) => (
          <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">太陽能發電站建置工程 {project}</h3>
                  <p className="text-gray-500 mt-1">專案編號: PRJ-2024-{String(project).padStart(3, '0')}</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>開始日期: 2024/03/01</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <User className="w-4 h-4 mr-2" />
                  <span>專案經理: 王大明</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FileText className="w-4 h-4 mr-2" />
                  <span>進度: 65%</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
                  查看詳情
                </button>
                <button className="flex-1 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  編輯專案
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};