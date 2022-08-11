import './ExpenseForm.css';
import React, {useState} from 'react';

const ExpenseForm=(props)=>{
    const [EnteredTitle,setEnteredTitle]=useState('');
    const [EnteredAmount,setEnteredAmount]=useState('');
    const [EnteredDate,steEnteredDate]=useState('');
    const titleChangeHandler=(event)=>{
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler=(event)=>{
        // console.log(event.target.value);
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler=(event)=>{
        // console.log(event.target.value);
        steEnteredDate(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData={
            title: EnteredTitle,
            price: +EnteredAmount,
            date: new Date(EnteredDate)
        };
        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        steEnteredDate('');
        
    }
     return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text"  value={EnteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" steps="0.01"  value={EnteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-01-01" max="2022-12-31" value={EnteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                 <button type='button' onClick={props.onCancel}>Cancel</button>
                 <button type='submit'>Add Expense</button>
            </div>
        </form>
     )
}

export default ExpenseForm;