import React, { useState, useEffect } from "react";

export default function Education(props) {
    const [state, setState] = useState({
        university: "",
        degree: "",
        uniStartDate: "",
        uniEndDate: "",
    });

    function handleChange(e) {
        setState((prevState) => {
            const { name, value } = e.target;
            return { ...prevState, [name]: value };
        });
        console.log(state);
    }

    return (
        <div className="education--container">
            <h2 className="education--title">Education: </h2>
            <input
                type="text"
                name="university"
                className="education--school"
                placeholder="School or University"
                onChange={handleChange}
                value={state.university}
            ></input>
            <input
                type="text"
                name="degree"
                className="education--degree"
                placeholder="Degree or Field"
                onChange={handleChange}
                value={state.degree}
            ></input>
            <input
                type="date"
                name="uniStartDate"
                className="education--date-start"
                onChange={handleChange}
                value={state.uniStartDate}
            ></input>
            <input
                type="date"
                name="uniEndDate"
                className="education--date-end"
                onChange={handleChange}
                value={state.uniEndDate}
            ></input>
            <button
                className="builder--add-btn"
                onClick={() => props.add(state)}
            >
                Add New
            </button>
        </div>
    );
}
