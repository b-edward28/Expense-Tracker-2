import React from 'react';
import ExpenseTable from '../components/ExpenseTable';

function Expenses({ expenses, deleteExpense }) {
    
  return (
    <div>
      <h3>All Expenses</h3>
      <ExpenseTable expenses={expenses} deleteExpense={deleteExpense} />
    </div>
  );
}

export default Expenses;
