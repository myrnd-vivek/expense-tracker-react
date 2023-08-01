import React, { useState } from 'react'
import ExpenseItems from './components/expenses/ExpenseItems'
import "./App.css";
import Card from './components/ui/Card';
import NewExpense from './components/new-expense/NewExpense';
import ExpenseFilter from './components/expenses/ExpenseFilter';

const INTIAL_EXPENSE = [
  {
    id: Math.random().toString(),
    expenseDate: new Date(),
    expenseTitle: 'Car Insurance',
    expenseAmount: '294.67',
  },
]

const App = () => {
  const [expense,setExpense] = useState(INTIAL_EXPENSE);
  const [filteredYear, setFilteredYear] = useState('2022');
  const [IsOpen, setIsOpen] = useState(false);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpense((prevState) => {
      return [expense,...prevState]
    })
  }


  const filterChangeHandler = (ev) => {
    const selectedYear = ev.target.value
		setFilteredYear(selectedYear);
    const newExp = expense.filter((item) => {
      return item.expenseDate.getFullYear() ===  +selectedYear;
    })
    setExpense(newExp);
	}

  return (
    <Card className='expenses'>
      <NewExpense addExpenseHandler={addExpenseHandler} IsOpen={IsOpen} setIsOpen={setIsOpen}/>
			<ExpenseFilter selected={filteredYear} dropDownChangeHandler={filterChangeHandler}/>
      {
        expense.map((item,index) => {
          return <ExpenseItems date={item.expenseDate} title={item.expenseTitle} amount={item.expenseAmount} key={index} />
        })
      } 
      {expense.length === 1 && <p style={{color:"white"}}>Only single Expense here. Please add more...</p>}
      {expense.length === 0 && <p style={{color:"white"}}>No expense found...</p>}
    </Card>
  )
}

export default App