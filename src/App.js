import React, { useState } from 'react'
import ExpenseItems from './components/expenses/ExpenseItems'
import "./App.css";
import Card from './components/ui/Card';
import NewExpense from './components/new-expense/NewExpense';
import ExpenseFilter from './components/expenses/ExpenseFilter';

const App = () => {
  const data = [
    {
      expenseDate: new Date(),
      expenseTitle: 'Car Insurance',
      expenseAmount: '294.67',
      locationOfExpenditure: 'Patna'
    },
  ]
  const [expense,setExpense] = useState(data);
  const addExpenseHandler = (expense) => {
    setExpense((prevState) => {
      return [...prevState,expense]
    })
  }

	const [filteredYear, setFilteredYear] = useState('2022');

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
      <NewExpense addExpenseHandler={addExpenseHandler} />
			<ExpenseFilter selected={filteredYear} dropDownChangeHandler={filterChangeHandler}/>
      {
        expense.map((item,index) => {
          return <ExpenseItems date={item.expenseDate} title={item.expenseTitle} amount={item.expenseAmount} location={item.locationOfExpenditure} key={index} index={index}/>
        })
      } 
    </Card>
  )
}

export default App