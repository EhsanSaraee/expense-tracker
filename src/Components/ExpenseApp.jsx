import { useState } from 'react';
import Overview from './Overview';
import TransactionComp from './TransactionComp';

const ExpenseApp = () => {
   const [expense, setExpense] = useState(0);
   const [income, setIncome] = useState(0);
   const [transactions, setTransactions] = useState([]);

   return (
      <section className="container">
         <Overview income={income} expense={expense} />
         <TransactionComp transactions={transactions} />
      </section>
   );
};

export default ExpenseApp;
