import React from "react";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./expense-items.css";

const ExpenseItems = (props) => {
	const expenseDate = props.date;
	const expenseTitle = props.title;
	const expenseAmount = props.amount;
	const locationOfExpenditure = props.location;


	const deleteExpense = (index) => {
		const card = document.querySelectorAll(".expense-item");
		card[index].style.display = "none";
	}

	return (
		<Card className="expense-item">
	    <ExpenseDate date={expenseDate}/>
	    <ExpenseDetails amount={expenseAmount} title={expenseTitle} location={locationOfExpenditure} />
			<button onClick={() => deleteExpense(props.index)}>Delete Expense</button>
		</Card>
	);
};

export default ExpenseItems;
