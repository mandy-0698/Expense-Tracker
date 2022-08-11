import './ExpenseList.css';
import ExpenseItem from './ExpenseItem';
export default function ExpenseList(props){
    if(props.items.length===0){
        return(
             <h2 className='expenses-list__fallback'>Found no expenses.</h2>
        )
    }
    return(
        <ul className="expenses-list">
        {props.items.map((expense)=><ExpenseItem key={expense.id} title={expense.title} price={expense.price}
      date={expense.date}/>)}
      </ul>
    )
}