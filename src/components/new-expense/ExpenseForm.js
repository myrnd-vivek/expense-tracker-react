import React, { useState } from 'react';
import "./expense-form.css";

const ExpenseForm = () => {
  const [title,setTitle] = useState('');
  const [amount,setAmount] = useState(0);
  const [date,setDate] = useState('');

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  }
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  }
  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({title,amount,date});
  }

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Expense Title</label>
          <input type="text" onChange={titleChangeHandler}/> 
        </div>
        <div className='new-expense__control'>
          <label>Expense Amount</label>
          <input type="number" onChange={amountChangeHandler}/> 
        </div>
        <div className='new-expense__control'>
          <label>Expense Date</label>
          <input type="date" onChange={dateChangeHandler}/> 
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={submitHandler}>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm;