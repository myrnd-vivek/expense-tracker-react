import React, { useState } from "react";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./expense-items.css";

const ExpenseItems = (props) => {

	const [expenseAmount,setExpenseAmount ]= useState(props.amount)

	const expenseDate = props.date;
	const expenseTitle = props.title;
	const locationOfExpenditure = props.location;

	return (
		<Card className="expense-item">
	    <ExpenseDate date={expenseDate}/>
	    <ExpenseDetails amount={expenseAmount} title={expenseTitle} location={locationOfExpenditure} />
			<button onClick={() => setExpenseAmount(100)}>Update Amount</button>
		</Card>
	);
};

export default ExpenseItems;
