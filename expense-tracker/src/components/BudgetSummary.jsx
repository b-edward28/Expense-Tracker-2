import {useState} from 'react';

function BudgetSummary({budget}) {
    const totalExpenses = budget.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
    const percentage = (totalSpent / budget) * 100;

    const [inputBudget, setInputBudget] = useState("");

    return (
        <div className="card p-2 mb-4" style={{ background: 'linear-gradient(135deg, #aab8d9, #c59ccf)'}}>
            <h4>Budget Summary</h4>

            <form onSubmit={(e) => { 
                e.preventDefault();
                onSetBudget(Number(inputBudget));
                setInputBudget("");
             }}
            >

            <div className="input-group">
                <input
                    type="number"
                    className="form-control"
                    placeholder="Set Monthly Budget"
                    value={inputBudget}
                    onChange={(e) => setInputBudget(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                    Set Budget
                </button>
            </div>
            </form>

            <h5>Monthly Budget: <strong>KES {totalBudget || 0}</strong></h5>
            <h5>Money Spent: <strong>KES {totalSpent || 0}</strong></h5>
            <h5>Money Remaining: <strong>KES {totalBudget - totalSpent || 0}</strong></h5>

            <div className="progress mb-2">
                <div className={`progress-bar ${percentage > 100 ? 'bg-danger' : 'bg-success'}`}
                     style={{ width: `${Math.min(percentage, 100)}%` }}>
                     {Math.min(percentage, 100).toFixed(1)}%
                </div>
            </div> 
            {percentage > 100 && (
                <div className="alert alert-danger">You have exceeded your budget!</div>
            )}
            
        </div>
    );
}