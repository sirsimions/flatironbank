import React, { useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [search, setSearch] = useState('');
  const [transactions, setTransactions] = useState([]);
 
    useEffect(()=> {
      fetch('http://localhost:8001/transactions')
      .then(result=>result)
      .then(data=>{
        setTransactions(data);
      });
    }, []);

    return (
    <div>
      <Search />
      <AddTransactionForm 
      transactions = {transactions}
      setTransactions = {setTransactions}
      />
      <TransactionsList 
      transactions =  {transactions.filter(transaction=>{
        if(search ===''){
          return true;
        }
        return transaction.description.includes(search);
      })}
      />

    </div>
  );
}

export default AccountContainer;
