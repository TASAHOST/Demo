import { Component } from "react";


export default class Stateinclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '1',
            name: "tossapon",
            count: 0


        }


    }
    clickPlus = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    clickMinus = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
                <h3>name</h3>
                <p>{this.state.name}</p>
                <h3>Count</h3>
                <p>{this.state.count}</p><br />
                <div>
                    <button onClick={this.clickMinus}>- </button>


                    <button style={{ marginLeft: "10px" }} onClick={this.clickPlus}>+</button>
                </div>


            </div>


        )

    }


}

