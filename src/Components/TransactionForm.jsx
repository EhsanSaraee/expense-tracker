import { useState } from 'react';

const TransactionForm = ({ addTransaction, setIsShow }) => {
   const [formValues, setFormValues] = useState({
      type: 'expense',
      amount: '',
      desc: '',
   });

   const changeHandler = (event) => {
      setFormValues({ ...formValues, [event.target.name]: event.target.value });
   };

   const submitHandler = (event) => {
      event.preventDefault();
      addTransaction(formValues);
      setIsShow(false);
   };

   return (
      <form onSubmit={submitHandler}>
         <input
            type="text"
            name="desc"
            onChange={changeHandler}
            value={formValues.desc}
            placeholder="description"
         />
         <input
            type="number"
            name="amount"
            onChange={changeHandler}
            value={formValues.amount}
            placeholder="amount"
         />
         <div className="radioBox">
            <input
               type="radio"
               id="expense"
               value="expense"
               name="type"
               checked={formValues.type === 'expense'}
               onChange={changeHandler}
            />
            <label htmlFor="expense">Expense</label>
            <input
               type="radio"
               id="income"
               value="income"
               name="type"
               checked={formValues.type === 'income'}
               onChange={changeHandler}
            />
            <label htmlFor="income">income</label>
         </div>
         <button type="submit" className="btn primary">
            Add Transaction
         </button>
      </form>
   );
};

export default TransactionForm;
