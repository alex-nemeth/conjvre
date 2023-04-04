import { useState, Component } from "react";

import Information from "./components/Information";
import Education from "./components/Education";
import Experience from "./components/Experience";

class App extends Component {
    constructor() {
        super();
        this.state = {
            part: 0,
        };
    }

    next = () => {
        this.setState((prevState) => {
            return { part: prevState.part + 1 };
        });
    };

    back = () => {
        this.setState((prevState) => {
            return { part: prevState.part - 1 };
        });
    };

    render() {
        console.log(this.state);

        return (
            <div className="App">
                <img className="logo" src="../src/assets/logo.png"></img>
                {this.state.part === 0 && <Information />}
                {this.state.part === 1 && <Education />}
                {this.state.part === 2 && <Experience />}
                <div className="builder--buttons">
                    {this.state.part > 0 && (
                        <button
                            className="builder--back-btn"
                            onClick={this.back}
                        >
                            Back
                        </button>
                    )}
                    <button className="builder--next-btn" onClick={this.next}>
                        Next
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
