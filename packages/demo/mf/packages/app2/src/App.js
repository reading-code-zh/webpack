import React from "react";

const App = (props) => {
  console.log(props);
  return (
    <div style={{
      margin: "10px",
      padding:"10px",
      textAlign:"center",
      backgroundColor:"cyan"
    }}>
      <h1 >App 2 ---data:{props.data}</h1>
    </div>
  )
}

export default App;

