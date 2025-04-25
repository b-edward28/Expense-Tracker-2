import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import BudgetSummary from '../components/BudgetSummary';
import ExpenseForm from '../components/ExpenseForm';

function Home(){
    const [expenses, setExpenses] = useState([]);
    const [budget, setBudget] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3001/expenses')
            .then((response) => response.json())
            .then((data) => setExpenses(data));

        fetch('http://localhost:3001/budget')
            .then((response) => response.json())
            .then((data) => setBudget(data.monthly));
    }, []);

    const handleSetBudget = (newBudget) => {
        fetch('http://localhost:3001/budget', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ monthly: newBudget }),
        })
            .then(() => setBudget(newBudget))      
    };

    const addExpense = (newExpense) => {
        fetch("http://localhost:3001/expenses", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newExpense)
        })
          .then((res) => res.json())
          .then((data) => {
            setExpenses((prev) => [...prev, data]);
            alert("Expense added successfully!");
          })
          .catch(() => {
            alert("Failed to add expense!");
          });
    };
    
    const deleteExpense = (id) => {
        fetch(`http://localhost:3001/expenses/${id}`, {
            method: "DELETE"
        })
          .then(() => {
            setExpenses((prev) => prev.filter((expense) => expense.id !== id));
          })
          .catch((error) => console.error("Delete failed:", error));
    };

    return (
        <div className= "container py-5">
            <div
                className="text-center mb-5 py-4 px-3 rounded shadow"
                style={{ background: 'linear-gradient(135deg, #aab8d9, #c59ccf)', color: '#212529' }}>
                <h1 className="display-4 fw-bold mb-2">PesaTracker</h1>
                <p className="lead mb-0">
                    Start tracking your spending, managing your budget, and taking control of your finances.
                </p>
            </div>
             
            <div className="row gy-4">
                <div className="col-md-5">
                    <ExpenseForm addExpense={addExpense} />
                </div>
                
                <div className="col-md-7">
                    <BudgetSummary 
                       onSetBudget={handleSetBudget}
                       totalBudget={budget}
                       expenses={expenses}
                    />
                </div>
            </div>
            
            <div className="text-center mt-5">
                <button className="btn btn-primary px-4 py-2" onClick={() => navigate('/expenses')}>
                    View All Expenses
                </button>
            </div>
        </div>
    );
}

export default Home;
    