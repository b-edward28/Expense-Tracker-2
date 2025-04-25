import {useState, useEffect} from 'react';

function BudgetForm({setBudget}) {
    const [amount, setAmount] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/budget')
            .then((response) => response.json())
            .then((data) => {
                setBudget(data.amount);
            })
            .catch((error) => {
                console.error('Error fetching budget:', error);
            });
    }, [setBudget]);

    const handleSubmit = (event) => {
        event.preventDefault():

        const budgetAmount = Number(amount);
        if (!amount || budgetAmount <= 0) {
            alert('Please enter a valid budget amount.');
            return;
        }

        fetch('http://localhost:3001/budget', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: budgetAmount }),
        })
            .then((response) => response.json())
            .then((data) => {
                setBudget(data.amount);
                setAmount('');
            })
            .catch((error) => {
                console.error('Error updating budget:', error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className= "mb-3 p-3">
                <label htmlFor="budgetAmount" className="form-label">Set Monthly Budget</label>
                <input
                    type="number"
                    id="budgetAmount"
                    className="form-control"
                    placeholder="Enter Budget Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    />
            
            </div>
            <button type="submit" className="btn btn-primary">
                Set Budget
            </button>
        </form>
    );
}
export default BudgetForm;