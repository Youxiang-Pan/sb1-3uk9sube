import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { Attendance } from './pages/Attendance';
import { Inventory } from './pages/Inventory';
import { Finance } from './pages/Finance';
import { Construction } from './pages/Construction';
import { Procurement } from './pages/Procurement';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/procurement" element={<Procurement />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;