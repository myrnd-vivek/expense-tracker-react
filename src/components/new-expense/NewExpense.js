import React from 'react';
import './newExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({addExpenseHandler}) => {
  const saveExpenseDataHandler = (data) => {
      addExpenseHandler(data)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm  saveExpenseDataHandler={saveExpenseDataHandler}/>
    </div>
  )
}

export default NewExpense