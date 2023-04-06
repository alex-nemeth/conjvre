import { useState, Component } from "react";

import Buttons from "./components/Buttons";
import Information from "./components/Information";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Landing from "./components/Landing";

class App extends Component {
    constructor() {
        super();
        this.state = {
            part: -1,
            information: {
                firstName: "Your Name Here",
                lastName: "",
                email: "",
                phone: "",
            },
            education: [
                {
                    //                   university: "",
                    //                   degree: "",
                    //                   uniStartDate: "",
                    //                   uniEndDate: "",
                },
            ],
            experience: [
                {
                    //                   position: "",
                    //                   company: "",
                    //                    expStartDate: "",
                    //                    expEndDate: "",
                    //                    notes: "",
                },
            ],
        };
        //part: -1,
        //    information: {
        //        firstName: "Alex",
        //        lastName: "Nemeth",
        //        email: "nemeth@alex.sk",
        //        phone: "0912345678",
        //    },
        //    education: [
        //        {
        //            university: "University of Economics Bratislava",
        //            degree: "Economic Informatics",
        //            uniStartDate: "10-10-2010",
        //            uniEndDate: "10-10-2013",
        //        },
        //        {
        //            university: "University of Economics Bratislava",
        //            degree: "Economic Informatics",
        //            uniStartDate: "10-10-2010",
        //            uniEndDate: "10-10-2013",
        //        },
        //    ],
        //    experience: [
        //        {
        //            position: "Customer Care",
        //            company: "AT&T",
        //            expStartDate: "10-10-2014",
        //            expEndDate: "10-10-2016",
        //            notes: "Tech support for AT&T customers",
        //        },
        //        {
        //            position: "Customer Care",
        //            company: "AT&T",
        //            expStartDate: "10-10-2014",
        //            expEndDate: "10-10-2016",
        //            notes: "Tech support for AT&T customers",
        //        },
        //    ],
        //};
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

    handleChange = (e) => {
        this.setState((prevState) => {
            const { name, value } = e.target;
            return { [name]: value };
        });
    };

    addInformation = (information) => {
        this.setState((prevState) => ({ ...prevState, information }));
    };

    addEducation = (education) => {
        this.setState((prevState) => {
            prevState.education = [...prevState.education, education];
            return prevState;
        });
    };

    addExperience = (experience) => {
        this.setState((prevState) => {
            prevState.experience = [...prevState.experience, experience];
            return prevState;
        });
        console.log(this.state.experience);
    };

    render() {
        return (
            <div className="App">
                <img className="logo" src="../src/assets/logo.png"></img>
                {this.state.part === -1 && <Landing />}
                {this.state.part === 0 && (
                    <div className="wrapper">
                        <Information save={this.addInformation} />
                        <Resume data={this.state} />
                    </div>
                )}
                {this.state.part === 1 && (
                    <div className="wrapper">
                        <Education add={this.addEducation} />
                        <Resume data={this.state} />
                    </div>
                )}
                {this.state.part === 2 && (
                    <div className="wrapper">
                        <Experience add={this.addExperience} />
                        <Resume data={this.state} />
                    </div>
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
