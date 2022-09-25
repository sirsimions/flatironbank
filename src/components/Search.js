import React from "react";

const Search = (props) =>{
  function handleChange(event){
    return props.searchFun(event.target.value)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={props.searchValue}
        onChange={(handleChange) /*=> console.log("Searching...")*/}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
