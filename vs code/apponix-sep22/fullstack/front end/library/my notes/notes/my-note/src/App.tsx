import React, { Component } from "react";

class App extends Component{
 state = {
  incerement: 50
 }

 incerement=()=>{
  this.setState(prevState => (<>
  
    incerement:prevState.incerement +1

  </>));
 }

 

  render() {
    console.log("rendering")
    return <div>
      <p> hello world </p>
      <p>{this.state.incerement}</p>
      <button onClick={this.incerement}>in</button>

     </div>;
  }
  
}

export default App;
