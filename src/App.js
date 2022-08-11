import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const Dummy_expenses=[
  {id:'e1',title:'Car insurance',price:294.7, date:new Date(2022,7,8)},
  {id:'e2',title:'Toilet paper',price:94.7, date:new Date(2022,4,12)},
  {id:'e3',title:'New TV',price:394.7, date:new Date(2022,6,13)}
];
function App() {
  const [expenses,setExpenses]=useState(Dummy_expenses);
   const addExpenseHandler=(expense)=>{
    // console.log('in app.js');
    // console.log(expense);
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses]
    });
   }
  return (
    <>
    <NewExpense onAddExpense={addExpenseHandler}/>
    <Expenses items={expenses}/>
    </>
  );
}

export default App;
