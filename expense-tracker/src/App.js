import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Expenses from './pages/Expenses';
import { Link } from 'react-router-dom';
import About from './pages/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/expenses')
      .then((res) => res.json())
      .then((data) => setExpenses(data));
  }, []);

  const addExpense = (expense) => {
    fetch('http://localhost:3001/expenses', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(expense)
    })
      .then((res) => res.json())
      .then((newExpense) => setExpenses([...expenses, newExpense]));
  };

  const deleteExpense = (id) => {
    fetch(`http://localhost:3001/expenses/${id}`,{
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) =>{
        if (!res.ok) {
          throw new Error('Failed to delete');
        }
      })
        .then(() => {
        setExpenses((prev) => prev.filter((e) => e.id !== id));
      })
      .catch((error) => {
        console.error('Delete failed:', error);
      });
  };

  return (
    <div>
      <nav className="navbar navbar-dark custom-navbar navbar-expand-lg px-3">
        <span className="navbar-brand">PesaTracker</span>
        <div className="navbar-nav">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About</Link>
          <Link className="nav-link" to="/expenses">Expenses</Link>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                budget={budget}
                setBudget={setBudget}
                expenses={expenses}
                addExpense={addExpense}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/expenses" element={<Expenses expenses={expenses} deleteExpense={deleteExpense}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;