import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if(isNaN(value)) {
            alert('Invalid budget value.');
            setNewBudget('');
            return;
        }

        if (value < totalExpenses) {
            alert('You cannot reduce the budget value lower than the spending')
            setNewBudget(value);
        } else {
            setNewBudget(value);
        }

    }

    const containerStyle = {
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
    };
    return (
        <div className='alert alert-secondary' style={containerStyle}>
            <span>Budget: {currency}</span>
            <input type='number' step='10' value={newBudget} onChange={handleBudgetChange} style={{ display: 'inline-block'}}></input>
        </div>
    );
};

export default Budget;