import { useEffect, useState } from 'react';

const TransactionComp = ({ transactions }) => {
   const [searchItem, setSearchItem] = useState('');
   const [filteredTransactions, setFilteredTransactions] =
      useState(transactions);

   const transactionsFilterHandler = (search) => {
      if (!search || search === '') {
         return setFilteredTransactions(transactions);
      }
      const filteredItems = transactions.filter((transaction) =>
         transaction.desc.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredTransactions(filteredItems);
   };

   const changeHandler = (event) => {
      setSearchItem(event.target.value);
      transactionsFilterHandler(event.target.value);
   };

   useEffect(() => {
      transactionsFilterHandler(searchItem);
   }, [transactions]);

   if (!transactions.length)
      return <h4 className="isEmpty">Add some transactions...</h4>;

   return (
      <section>
         <input
            className="search"
            type="text"
            value={searchItem}
            onChange={changeHandler}
            placeholder="Search for Transactions"
         />
         {filteredTransactions.length ? (
            filteredTransactions.map((transaction) => (
               <section
                  className="transaction"
                  key={transaction.id}
                  style={{
                     borderRight:
                        transaction.type === 'expense' && '5px solid red',
                  }}
               >
                  <span>{transaction.desc}</span>
                  <span>${transaction.amount}</span>
               </section>
            ))
         ) : (
            <h4 className="noMatch">
               no item matches! please enter the correct name
            </h4>
         )}
      </section>
   );
};

export default TransactionComp;
