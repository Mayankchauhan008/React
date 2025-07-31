import Header from './Header';
import './Hellow.css';
import wb from './386745.jpg';
function Home(){
    var a = 10
    var b = 20
    var mycolor = {color:'yellow',backgroundColor:'green'}
    return(
        <>
            <h1>Home</h1>
            A value is {a} <br/>
            B value is {b}
            <p style={{color:'red',backgroundColor:'yellow'}}>Hello I am P tag</p>
            <p style={{color:'red',backgroundColor:'yellow'}}>Hello I am P tag</p>
            <p style={mycolor}>I am P</p>
            <p style={mycolor}>I am P</p>
            <p style={mycolor}>I am P</p>
            <img src={wb} height={100}/>  <img src={wb} height={100}/>  <img src={wb} height={100}/>
        </>
    )
}
export default Home;