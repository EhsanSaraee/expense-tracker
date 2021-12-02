const TransactionComp = ({ transactions }) => {
   return (
      <section>
         {transactions.map((transaction) => (
            <div key={transaction.id}>{transaction.desc}</div>
         ))}
      </section>
   );
};

export default TransactionComp;
