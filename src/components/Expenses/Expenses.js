import './Expenses.css';
import React, {useState} from 'react';
import ExpenseList from './ExpenseList';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';

export default function Expenses(props){
    const [filteredYear,setFilteredYear]=useState('2022');
    const filterChangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear);
    }

    const filteredExpenses=props.items.filter(expense=>{
      return expense.date.getFullYear().toString()===filteredYear;
    })

    
      return(
        <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        {/* {filteredExpenses.length===0 && <p>No expenses found!</p>}
        {filteredExpenses.length>0 && filteredExpenses.map((expense)=><ExpenseItem key={expense.id} title={expense.title} price={expense.price}
        date={expense.date}/>)} */}
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses}/>
    </Card>
      );
}