import React from 'react';

class CComponent extends React.Component {
    state={
        message: "class Component",
        time: new Date().toString(),
    }
    componentDidMount() {
        console.log("I am from Old Mount");
        this.interval = setInterval(this.showDate, 1000);
    }
    componentDidUpdate() {
        console.log("I am from update");
    }
    componentWillUnmount () {
        console.log("I am from unmount");
        clearInterval(this.interval);
    }
    showDate = () => {
        this.setState({time: new Date().toString()});
    }

    render() {
        return (
            <div>
                <h1> I am in Class Componet</h1>
                <h2>{this.state.message}</h2>
                <div>{this.state.time}</div>
            </div>
        );
    }
}
export default CComponent;