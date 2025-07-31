function Event(){
const demo = () => {
    alert("Welcome")
}
    const PrintData = (Event) =>{
        console.log(Event.target.value)
    }
    return(
        <>
            <input type="button" onClick={demo} value={"clickme"} />
            <input type="button" onClick={()=> alert("Inline")} value={"Inline"} />
            <input type="button" onClick={PrintData} value={"BTN1"} name="btn1"/>
            Text1<input type="text" name="txt1" onChange={PrintData} />
            Text2<input type="text" name="txt2" onChange={PrintData} />
        </>
    )
}
export default Event;