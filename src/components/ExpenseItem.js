import React, {useContext} from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import { FaPlus, FaMinus } from 'react-icons/fa';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });
    };

    const buttonStyle = {
        border: 'none',
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: '1.2em',
        color: 'white',
    };

    const buttonGreen = {
        ...buttonStyle,
        backgroundColor: 'green',
    };

    const buttonRed = {
        ...buttonStyle,
        backgroundColor: 'red',
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button onClick={event => increaseAllocation(props.name)} style={buttonGreen}><FaPlus size={40}/></button></td>
            <td><button onClick={event => decreaseAllocation(props.name)} style={buttonRed}><FaMinus size={40}/></button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;