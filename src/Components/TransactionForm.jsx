const TransactionForm = () => {
   return (
      <form>
         <input type="text" name="desc" />
         <input type="number" name="value" />
         <div>
            <input type="radio" id="expense" value="expense" name="type" />
            <label htmlFor="expense">Expense</label>
            <input type="radio" id="income" value="income" name="type" />
            <label htmlFor="income">income</label>
         </div>
         <button>Add Transaction</button>
      </form>
   );
};

export default TransactionForm;
