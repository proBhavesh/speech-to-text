import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


class App extends React.Component{
  // defining constructor to add data
  constructor(props){
    super(props);
    this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    this.recognition = new SpeechRecognition();

  }

// methods and defining


speech = ()=>{
  console.log("Speech is running")
}

//rendering components 
render{
  return (
    <div className="App" >
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={this.speech}>
        Start
      </button>
    </div>
  );
}
}




// recognition.onstart = ()=>{
//   console.log("Voive is activated")
// }











export default App;


// speechrecongnistion

// .onstart

// .onend
