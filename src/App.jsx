import './App.css';
import ExpenseApp from './Components/ExpenseApp';

const App = () => {
   return (
      <div className="App">
         <header>
            <h2>Expense Tracker</h2>
            <ExpenseApp />
         </header>
      </div>
   );
};

export default App;
