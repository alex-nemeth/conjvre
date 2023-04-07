import { useState, useEffect } from "react";

import logo from "../src/assets/logo.png";

import Buttons from "./components/Buttons";
import Information from "./components/Information";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";
import Landing from "./components/Landing";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function App() {
    const [state, setState] = useState({
        part: -1,
        information: {
            firstName: "Your Name Here",
            lastName: "",
            email: "",
            phone: "",
        },
        education: [],
        experience: [],
    });

    function next() {
        setState((prevState) => {
            return {
                ...prevState,
                part: prevState.part + 1,
            };
        });
    }

    function back() {
        setState((prevState) => {
            return { ...prevState, part: prevState.part - 1 };
        });
    }

    function addInformation(information) {
        setState((prevState) => ({ ...prevState, information }));
    }

    function addEducation(education) {
        setState((prevState) => {
            prevState.education.push(education);
            return { ...prevState };
        });
    }

    function removeEducation() {
        setState((prevState) => {
            prevState.education.pop();
            return { ...prevState };
        });
    }

    function addExperience(experience) {
        setState((prevState) => {
            prevState.experience.push(experience);
            return { ...prevState };
        });
    }

    function removeExperience() {
        setState((prevState) => {
            prevState.experience.pop();
            return { ...prevState };
        });
    }

    function printDocument() {
        const input = document.querySelector(".resume--container");
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.save("download.pdf");
        });
    }

    return (
        <div className="App">
            <img className="logo" src={logo}></img>
            {state.part === -1 && <Landing />}
            {state.part === 0 && (
                <div className="wrapper">
                    <Information save={addInformation} />
                    <div className="resume--preview">
                        <Resume data={state} />
                    </div>
                </div>
            )}
            {state.part === 1 && (
                <div className="wrapper">
                    <Education add={addEducation} remove={removeEducation} />
                    <div className="resume--preview">
                        <Resume data={state} />
                    </div>
                </div>
            )}
            {state.part === 2 && (
                <div className="wrapper">
                    <Experience add={addExperience} remove={removeExperience} />
                    <div className="resume--preview">
                        <Resume data={state} />
                    </div>
                </div>
            )}
            {state.part === 3 && <Resume data={state} />}
            <Buttons
                back={back}
                next={next}
                part={state.part}
                download={printDocument}
            />
        </div>
    );
}
