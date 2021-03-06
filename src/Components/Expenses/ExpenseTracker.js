import React,{useState} from "react";
import ExpenseTrackerItem from "./ExpenseTrackerItem";
import Card from "./ExpenseTrackerCard";
import NewExpense from "../NewExpense/NewExpense";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";


const dummyExpenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

function ExpenseTracker() {
    const[expenses, setExpenses] = useState(dummyExpenses);

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }
    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
        const addExpenseHandler = (expense) => {
        console.log({expense});
            setExpenses((prevExpenses) => {
                return [expense, ...prevExpenses];
            });
        }

        return (
            <div>
                <h2>Expense Tracker App</h2>
                <NewExpense onAddExpense={addExpenseHandler}/>
                <Card className="expenses">
                    <ExpenseChart expenses={filteredExpenses}/>
                    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
                    {filteredExpenses.length === 0 ? <p>No expenses found!</p> :
                        filteredExpenses.map(
                        expense =>
                            <ExpenseTrackerItem
                                key={expense.id}
                                title={expense.title}
                                amount={expense.amount}
                                date={expense.date}
                            />
                    )}
                </Card>
            </div>
        )

}

export default ExpenseTracker;
