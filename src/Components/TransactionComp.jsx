const TransactionComp = ({ transactions }) => {
   return (
      <section>
         {transactions?.map((transaction) => (
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
         ))}
      </section>
   );
};

export default TransactionComp;
