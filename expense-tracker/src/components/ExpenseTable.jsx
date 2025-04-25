import {useState} from 'react';

function ExpenseTable({expenses, deleteExpense}) {
    const [search, setSearch] = useState('');
    const filtered = expenses.filter(expense =>
        expense.name.toLowerCase().includes(search.toLowerCase()) ||
        expense.category.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
        <div className= "mb-3">
            <input
                type="text"
                className="form-control"
                placeholder="Search"
                value={search}
                style={{ maxWidth: '250px' }}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>

        <div className="table-responsive">
            <table className="table table-striped table-bordered table-hover">
                <thead className= "table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filtered.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.name}</td>
                            <td>{expense.category}</td>
                            <td>{expense.amount}</td>
                            <td>{expense.date}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => deleteExpense(expense.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
        </>
    );
}
export default ExpenseTable;