
import './App.scss';
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        //Khởi tạo một ref
        this.myRef = React.createRef();
    }
    handleClick = () => {
        this.myRef.current.focus();
    }
    render() {
        return (
            <>
            <input
                name="email"
                onChange={this.onChange}
                ref={this.myRef}
                type="text"
            />
            <button onClick={this.handleClick}>
                Focus Input
            </button>
                </>
        );
    }
}

export default App;
