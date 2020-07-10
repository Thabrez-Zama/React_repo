import React from 'react';
import Profile from './single_user.png';
import './App.css';
// import Hello from "./Hello"
// import Wish from "./Wish"
// import Home from "./Home"

import Greeting from "./components/Greeting";
import Welcome from "./components/Welcome";
import States from "./components/states";
import ClassState from "./components/ClassState";
import Hooks from "./components/Hooks";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      {/* <h1 className="btn btn-primary">Hello</h1> */}
      {/* <ClassState></ClassState>
      <h1>Using Hooks</h1>
      <Hooks /> */}
      {/* <h1>Thabrez</h1>
      <h2>Thabrez Zama</h2>
      <Home />
      <Hello />
      <Wish /> */}
      {/* <Greeting name="thabrez" mail="thabrez918@gmail.com">
        <img src={logo} style={{width:"200px"}}/>
      </Greeting>
      <Greeting name="tabbu" mail="tabbu@gmail.com" >
        <p> Hello Thabrez</p>
        <p> Hello Guys</p>
      </Greeting>
      <h1>We are creating Class Component & pass the props</h1>
      <Welcome name="parvez" college="MITS">
        <p> Hello Parvez</p>
      </Welcome>
      <Welcome name="Tannu" college="MITS">
        <p>Hello tannu how are you</p>
      </Welcome> */}
      {/* <States /> */}
      <Home />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}


let Home=()=>{
  let profile=data.profiles;
  console.log(profile);
  return(
<div className="row justify-content-center">
  {
    profile.map((value,index)=>(
      <div className="col-sm-10 col-md-4 col-lg-4 mt-1" key={index}>
        <div className="card">
          <div className="card-body">
            <img src={Profile} style={{width:"300px"}}/>
            <h2>{value.basic.name}</h2>
            <h3>{value.basic.role}</h3>
            <h5>{value.basic.Phone}</h5>
            <p><a href="mailto:thabrez@gmail.com">{value.basic.email}</a></p>

            <h2 className="btn btn-primary">Profie</h2>

          </div>

        </div>

      </div>
    ))
  }
</div>
  );
}


export default App;
