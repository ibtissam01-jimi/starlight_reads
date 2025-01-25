import React, { useState } from "react";
import { BarChart, Bar, PieChart, Pie, Cell, Tooltip, Legend, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line } from 'recharts';
import '../../styles/dashbordAdmin.css';

const Dashboard = () => {
  
  const [books, setBooks] = useState(120);  
  const [users, setUsers] = useState(50);
  const [borrowed, setBorrowed] = useState(30);
  const [returns, setReturns] = useState(15);

  const data = [
    { name: 'Books', value: books },
    { name: 'Users', value: users },
    { name: 'Borrowed', value: borrowed },
    { name: 'Returns', value: returns },
  ];

  const userGrowthData = [
    { month: 'Jan', users: 30 },
    { month: 'Feb', users: 35 },
    { month: 'Mar', users: 40 },
    { month: 'Apr', users: 45 },
    { month: 'May', users: 50 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats-container">
        <div className="chart-card">
          <h3>Books and Users</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-card">
          <h3>Borrowed vs Returns</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data.slice(2)}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {data.slice(2).map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-card">
          <h3>User Growth Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={userGrowthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;