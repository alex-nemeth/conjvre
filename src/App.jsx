import { useState, Component } from "react";

import Buttons from "./components/Buttons";
import Information from "./components/Information";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

class App extends Component {
    constructor() {
        super();
        this.state = {
            part: 1,
            smallPreview: true,
            firstName: "Alex",
            lastName: "Nemeth",
            email: "nemeth@alex.sk",
            phone: "0912345678",
            university: "University of Economics Bratislava",
            degree: "Economic Informatics",
            uniStartDate: "10-10-2010",
            uniEndDate: "10-10-2013",
            position: "Customer Care",
            company: "AT&T",
            expStartDate: "10-10-2014",
            expEndDate: "10-10-2016",
            notes: "Tech support for AT&T customers",
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

    //add = () => {
    //    this.setState((prevState) => {
    //        {}
    //};

    handleChange = (e) => {
        this.setState((prevState) => {
            const { name, value } = e.target;
            return { [name]: value };
        });
        console.log(this.state);
    };

    render() {
        return (
            <div className="App">
                <img className="logo" src="../src/assets/logo.png"></img>
                {this.state.part === 0 && (
                    <Information handleChange={this.handleChange} />
                )}
                {this.state.part === 1 && (
                    <div className="education--wrapper">
                        <Education
                            handleChange={this.handleChange}
                            add={this.add}
                        />
                        <Resume data={this.state} />
                    </div>
                )}
                {this.state.part === 2 && (
                    <Experience handleChange={this.handleChange} />
                )}
                {this.state.part === 3 && <Resume data={this.state} />}
                <Buttons
                    back={this.back}
                    next={this.next}
                    part={this.state.part}
                />
            </div>
        );
    }
}

export default App;
