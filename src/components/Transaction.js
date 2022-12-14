import React from "react";

function Transaction(props) {

  let {date, description, category, amount} = props.transaction

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
}

export default Transaction;
