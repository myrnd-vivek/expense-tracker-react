import React from 'react'
import ExpenseItems from './components/expenses/ExpenseItems'
import "./App.css";
import Card from './components/ui/Card';

const App = () => {
  const data = [
    {
      expenseDate: new Date(),
      expenseTitle: 'Car Insurance',
      expenseAmount: '294.67',
      locationOfExpenditure: 'Patna'
    },
    {
      expenseDate: new Date(),
      expenseTitle: 'Bike Insurance',
      expenseAmount: '294.67',
      locationOfExpenditure: 'Delhi'
    },
    {
      expenseDate: new Date(),
      expenseTitle: 'Bus Insurance',
      expenseAmount: '294.67',
      locationOfExpenditure: 'Bangalore'
    }
  ]
  return (
    <Card className='expenses'>
      {
        data.map((item,index) => {
          return <ExpenseItems date={item.expenseDate} title={item.expenseTitle} amount={item.expenseAmount} location={item.locationOfExpenditure} key={index} index={index}/>
        })
      } 
    </Card>
  )
}

export default App