import React from 'react'
import ExpenseItems from './components/ExpenseItems'

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
    <div>
      {
        data.map((item,index) => {
          return <ExpenseItems date={item.expenseDate} title={item.expenseTitle} amount={item.expenseAmount} location={item.locationOfExpenditure} key={index}/>
        })
      }
      
    </div>
  )
}

export default App