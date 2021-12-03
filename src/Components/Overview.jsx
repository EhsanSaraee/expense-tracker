import { useState } from 'react';
import TransactionForm from './TransactionForm';

const Overview = ({ income, expense, addTransaction }) => {
   const [isShow, setIsShow] = useState(false);
   return (
      <>
         <div className="topSection">
            <p>Balance : {income - expense}</p>
            <button
               className={`btn ${isShow ? 'cancel' : 'add'}`}
               onClick={() => setIsShow((prevState) => !prevState)}
            >
               {isShow ? 'Cancel' : 'Add'}
            </button>
         </div>
         {isShow && <TransactionForm addTransaction={addTransaction} setIsShow={setIsShow} />}
         <div className="resultSection">
            <div className="expenseBox">
               Expense : <span className="red">${expense}</span>
            </div>
            <div className="expenseBox">
               Income : <span className="green">${income}</span>
            </div>
         </div>
      </>
   );
};

export default Overview;
