import React, { useContext } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch} = useContext(AppContext);

    const handleCurrencyChange = (eventKey) => {
        dispatch({ type: 'CHG_CURRENCY', payload: eventKey })
    }

    return (
        <div className="alert alert-secondary" style={{ display: 'flex', alignItems: 'center' }}>
            <DropdownButton
                id="currency-item"
                title={`Currency (${currency})`}
                onSelect={handleCurrencyChange}
            >
                <Dropdown.Item eventKey="$" className="custom-dropdown-menu">$ Dollar</Dropdown.Item>
                <Dropdown.Item eventKey="£" className="custom-dropdown-menu">£ Pound</Dropdown.Item>
                <Dropdown.Item eventKey="€" className="custom-dropdown-menu">€ Euro</Dropdown.Item>
                <Dropdown.Item eventKey="₹" className="custom-dropdown-menu">₹ Rupee</Dropdown.Item>
            </DropdownButton>
        </div>
    );
};

export default CurrencySelector;