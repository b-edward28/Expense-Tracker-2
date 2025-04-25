import {useState} from 'react';

function ExpenseForm({addExpense}) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const newExpense = {
            id: Date.now(),
            name,
            category,
            amount: parseFloat(amount),
            date,
        };

        addExpense(newExpense);
        setName('');
        setCategory('');
        setAmount('');
        setDate('');
    };

    return (
        <div className= "card shadow-sm" style={{ background: 'linear-gradient(135deg, #aab8d9, #c59ccf)'}}>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Expense Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="category"
                            placeholder="Expense Category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="number"
                            className="form-control"
                            id="amount"
                            placeholder="Expense Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="date"
                            className="form-control"
                            id="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-dark w-100">Add Expense</button>
                    
                </form>

            </div>

        </div>
    );
}
export default ExpenseForm;