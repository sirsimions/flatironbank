import React from "react";
import Transaction from "./Transaction";

function TransactionsList (props){

  let array = props.transactions.map(transactionObj => {
    return <Transaction 
            key={transactionObj.id} 
            transaction={transactionObj} 
          />
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {array}
      </tbody>
    </table>
  );
}

export default TransactionsList;



