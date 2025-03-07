import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Briefcase,
  Users,
  Package,
  DollarSign,
  Building2,
  ShoppingCart,
} from 'lucide-react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: '儀表板' },
  { to: '/projects', icon: Briefcase, label: '專案管理' },
  { to: '/attendance', icon: Users, label: '出勤管理' },
  { to: '/inventory', icon: Package, label: '庫存管理' },
  { to: '/finance', icon: DollarSign, label: '財務管理' },
  { to: '/construction', icon: Building2, label: '施工日誌' },
  { to: '/procurement', icon: ShoppingCart, label: '採購管理' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800">工程管理系統</h1>
      </div>
      <nav className="mt-6">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 border-r-4 border-blue-500' : ''
              }`
            }
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}