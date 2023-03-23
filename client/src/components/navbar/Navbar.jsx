import React, { useState } from "react";

const Navbar = () => {
    
  const [count,setCount] = useState("this is aziz")

  const plus = ()=>{
    setCount("this yassmine")
  }
  const moin = ()=>{
    setCount(count - 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={plus}>+1</button>
      <button onClick={moin}>-1</button>
    </>
  )
    
};

export default Navbar;
