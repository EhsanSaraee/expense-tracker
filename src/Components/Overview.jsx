import { useState } from 'react';
import TransactionForm from './TransactionForm';

const Overview = ({ income, expense }) => {
   const [isShow, setIsShow] = useState(false);
   return (
      <>
         <div className="topSection">
            <p>Balance : {income - expense}</p>
            <button onClick={() => setIsShow((prevState) => !prevState)}>
               {isShow ? 'Cancel' : 'Add'}
            </button>
         </div>
         {isShow && <TransactionForm />}
         <div className="resultSection">
            <div>Expense : {expense}</div>
            <div>Income : {income}</div>
         </div>
      </>
   );
};

export default Overview;
