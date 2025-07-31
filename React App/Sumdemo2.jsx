import React from "react";

function Sumdemo2(){

    const [No1,setNo1] = React.useState(0)
    const [No2,setNo2] = React.useState(0)
    const [Choice,setChoice] = React.useState("")
    const [ans,setAns] = React.useState("")

    const doProcess = () =>{
        if(Choice == "add"){
            var c = parseInt(No1) + parseInt(No2)
            setAns("Sum is " + c)
        }else if (Choice == "sub"){
            var c = parseInt(No1) - parseInt(No2)
            setAns("Difference is " + c)
        }
        else{
            setAns("Select choice")
        }
    }
    return(
        <div>
            No1 :<input type="text" onChange={(e) => setNo1(e.target.value)} /><br/>
            No2 :<input type="text" onChange={(e) => setNo2(e.target.value)} /><br/>
            Choice:
            <input type="radio" onChange={()=> setChoice("add")} name="txt1" value="add" />+<br/>
            <input type="radio" onChange={()=> setChoice("sub")} name="txt1" value="sub" />-<br/>
            Choice:
            <select onChange={(e) => setChoice(e.target.value)}>
                <option value="add">Add</option>
                <option value="sub">Sub</option>
            </select><br/>
            <input type="button" onClick={doProcess} value="ClickMe"/><br/>
            {ans}
        </div>
    )
}
export default Sumdemo2;