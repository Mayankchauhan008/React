import React from "react";
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 1 };
        console.log("constructor called")
    }
    increment() {
        if (this.state.counter > 2) {
            this.setState({ msg: "sorry value is > 3" })
        } else {
            this.setState({ counter: this.state.counter + 1, msg: "" })
        }
    }
    decrement() {
        if (this.state.counter < 1) {
            this.setState({ msg: "sorry value is < 0" })
        } else {
            this.setState({ counter: this.state.counter - 1, msg: "" })
        }
    }
    componentDidMount(){
        console.log("component did mount Called")
    }componentDidUpdate(){
        console.log("component did update Called")
    }

    render() {
        console.log("Render Called")
        var a = 10
        return (
            <>
                <h1>Counter</h1>
                A value is {a}
                Countere value is {this.state.counter}<br/>
                <input type="button" value="+" onClick={this.increment.bind(this)} />
                <input type="button" value="-" onClick={this.decrement.bind(this)} />
                <br />
                <p style={{color: 'red'}}>{this.state.msg}</p>

                <input type="button" value="+" onClick={() => this.setState({ counter: this.state.counter+1 })}/>
                <input type="button" value="-" onClick={() => this.setState({ counter: this.state.counter-1 })}/>
            </>
        );
    }
}
export default Counter;