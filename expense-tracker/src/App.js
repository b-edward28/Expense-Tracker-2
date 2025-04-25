import { useState, useEffect } from 'react';
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/expenses')
      .then((response) => response.json())
      .then((data) => {
        setExpenses(data);
      })
      .catch((error) => {
        console.error('Error fetching expenses:', error);
      });
  }, []);

  const addExpense = (expense) => {
    fetch('http://localhost:3001/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    })
      .then((response) => response.json())
      .then((newExpense) => {
        setExpenses([...expenses, newExpense]);
      })
      .catch((error) => {
        console.error('Error adding expense:', error);
      });
  };

  const deleteExpense = (id) => {
    fetch(`http://localhost:3001/expenses/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete expense');
        }
      })
        .then(() => {
        setExpenses((prev) => prev.filter((e) => e.id !== id));
      })
      .catch((error) => {
        console.error('Error deleting expense:', error);
      });
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Expense Tracker</h1>
      <div className="row">
        <div className="col-md-6">
          <BudgetForm setBudget={setBudget} />
          <ExpenseForm addExpense={addExpense} />
        </div>
        <div className="col-md-6">
          <ExpenseTable expenses={expenses} deleteExpense={deleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
