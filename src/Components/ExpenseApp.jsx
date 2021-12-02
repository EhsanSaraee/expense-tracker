import { useEffect, useState } from 'react';
import Overview from './Overview';
import TransactionComp from './TransactionComp';

const ExpenseApp = () => {
   const [expense, setExpense] = useState(0);
   const [income, setIncome] = useState(0);
   const [transactions, setTransactions] = useState([]);

   const addTransaction = (formValues) => {
      const data = { ...formValues, id: Date.now() };
      setTransactions([...transactions, data]);
   };

   useEffect(() => {
      let exp = 0;
      let inc = 0;
      transactions.forEach((transaction) =>
         transaction.type === 'expense'
            ? (exp += parseFloat(transaction.amount))
            : (inc += parseFloat(transaction.amount))
      );
      setExpense(exp);
      setIncome(inc);
   }, [transactions]);

   return (
      <section className="container">
         <Overview
            income={income}
            expense={expense}
            addTransaction={addTransaction}
         />
         <TransactionComp transactions={transactions} />
      </section>
   );
};

export default ExpenseApp;
