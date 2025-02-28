import { useState } from "react"
export default function StateFunction()
{
    // var [counter, setCounter] = useState("0");
    var [counter, setCounter] = useState([]);
    // var [count, setCount] = useState(0)
    var count = 0;


    // function handleDecrease()
    // {
    //     setCounter(counter - 1)

    // }
    function handleIncrease()
    {
        console.log(count);
        //first call
        count++;

        // setCounter((prevCounter) => [...prevCounter, count])
        setCounter(count); // counter
        //second call
        // setCounter((prevCounter) => prevCounter + 1)

    }
    return (
        <>
            <button onClick={handleIncrease}>+</button>
            <span>{counter}</span>
            <button onClick={handleDecrease}>-</button>
        </>
    )
}