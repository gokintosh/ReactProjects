// import react and react libraries
import React from 'react';
import ReactDOM from 'react-dom';



function getButtonText(){
    return "Click us!"
}

function getTime(){
    return(new Date()).toLocaleTimeString()
}




// Create a component
const App=()=>{
    return(
        <div className="">
            <label className="label" htmlFor="name">Enter what : </label>
            <input type="text" id="name"/>
            <button style={{backgroundColor:'blue',color:'white'}}>{getButtonText()}</button>
            <h1>Current time is</h1>
            <div>{getTime()}</div>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);


// Take a react component and show it in the screen