import React from "react";

function Hooksdemo(){

    const [counter,setCounter] = React.useState(0)
    const [msg,setMassage] = React.useState("")

    const increment = () => {
        if(counter>=5){
            setMassage("Sorry value is > 5.")
        }else{
            setCounter(counter+1)
            setMassage("")
        }
    }
    const decrement = () => {
        if(counter<=0){
            setMassage("Sorry value is < 0.")
        }else{
            setCounter(counter-1)
            setMassage("")
        }
    }
    return(<>
        <h1>Welcome to Hooks</h1>
        <h1>Counter value is {counter}</h1>
        <input type="button" value="+" onClick={increment} />
        <input type="button" value="-" onClick={decrement} />
        <input type="button" value="x" onClick={()=>setCounter(0)} />
        {msg}
    </>)

}
export default Hooksdemo;