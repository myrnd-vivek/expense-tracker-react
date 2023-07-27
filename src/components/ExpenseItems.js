import "./expense-items.css";

const ExpenseItems = (props) => {
  const expenseDate = props.date;
  const expenseTitle = props.title;
  const expenseAmount = props.amount;
  const locationOfExpenditure = props.location;

	return (
		<div className="expense-items">
			<div>{expenseDate.toString()}</div>
      <div className="expense-items__description">
        <h2>{expenseTitle}</h2>
        <h2>{locationOfExpenditure}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
		</div>
	);
};

export default ExpenseItems;
