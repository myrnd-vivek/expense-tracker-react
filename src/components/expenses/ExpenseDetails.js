const ExpenseDetails = ({title,amount,location}) => {
  return (
    <div className="expense-item__description">
      <h2>{title}, {location}</h2>
      <div className="expense-item__price">${amount}</div>
    </div>
  )
}

export default ExpenseDetails