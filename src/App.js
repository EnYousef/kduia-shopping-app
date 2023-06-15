import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <AppProvider>
        <div className="container row mt-3">
            <div className="col">
                <CartValue />
            </div>
            <div className="col">
                <Location />
            </div>
            <h1 className="mt-2">ShoppingShopping  Cart</h1>
            <div className="mb-3">
            <ExpenseList />
            </div>
            <h1>Add Item</h1>
            <div className="ml-3"><ItemSelected /></div>
        </div>
    </AppProvider>
  );
}

export default App;
