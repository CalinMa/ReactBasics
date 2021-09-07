import React, {useState} from 'react';
import '../App.css';
function Button(props){
  //  const[counter,setCounter]  = useState(5);
    const handleClick =() => props.onClickFunction(props.increment);
    return (
    <button
        onClick={handleClick}>+{props.increment}
    </button>

    )
}
function Display(props) {
    return (
        <div>{props.message}</div>
    );
}
function PluralSight() {
    const[counter,setCounter]  = useState(0);
    const incrementCounter = (incrementValue) => setCounter(counter + incrementValue);
    const resetCounter = () => setCounter(0);
    return (
        <div className= "Pluralsight">
            <p>Pluralsight Basic React Concepts</p>
            <Button onClickFunction={incrementCounter} increment={1}/>
            <Button onClickFunction={incrementCounter} increment={5}/>
            <Button onClickFunction={incrementCounter} increment={10}/>
            <Button onClickFunction={incrementCounter} increment={100}/>
            <Button onClickFunction={incrementCounter} increment={500}/>
            <Display message={counter}/>
            <button onClick={resetCounter}>
               Reset
            </button>
        </div>
    );
}

export default PluralSight;