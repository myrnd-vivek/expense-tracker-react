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

	return (
		<Card className="expense-item">
	    <ExpenseDate date={expenseDate}/>
	    <ExpenseDetails amount={expenseAmount} title={expenseTitle} location={locationOfExpenditure} />
		</Card>
	);
};

export default ExpenseItems;
