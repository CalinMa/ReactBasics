import React from "react";
import "../../CSS/ExpenseItem.css"
import ExpenseTrackerDate from "./ExpenseTrackerDate";
import Card from "./ExpenseTrackerCard";

//Stateless component
function ExpenseTrackerItem(props){

    return (
        <Card className="expense-item">
            <ExpenseTrackerDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>

    )
}

export default ExpenseTrackerItem;