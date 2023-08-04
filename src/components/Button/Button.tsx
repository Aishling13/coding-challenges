import { useState } from "react";

const Button = () => {

    // set initical state
    const [counter, setCounter] = useState(0);
    const [bgColor, setBgColor] = useState('aqua');
    
    // variable addOne, function to add one when button is clicked on
    const addOne = () => {
        if ( counter >= 9) {
            setBgColor('green');
        }
                
        setCounter(counter + 1) 
        // console.log("a click occurred")
        // counter++;
        // console.log(counter);
    }

    return (
        <button 
            className="button" 
            type="button" 
            onClick={addOne}
            style={{backgroundColor: bgColor}}
        > 
        {counter} 
        </button>
    );
    }
export default Button;