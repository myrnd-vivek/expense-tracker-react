import React from 'react'

const ExpenseForm = () => {
  const changeHandler = (e) => {
    console.log(e.target.value);
  }
  return (
    <form>
      <div>
        <label>Expense Title</label>
        <input type="text" onChange={changeHandler}/>
      </div>
      <div>
        <label>Expense Amount</label>
        <input type="number" onChange={changeHandler}/>
      </div>
      <div>
        <label>Expense Date</label>
        <input type="date" onChange={changeHandler}/>
      </div>
      <button>Add Expense</button>
    </form>
  )
}

export default ExpenseForm;