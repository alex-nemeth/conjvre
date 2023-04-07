import React, { useState, useEffect } from "react";

export default function Education(props) {
    const [state, setState] = useState({
        university: "",
        degree: "",
        uniStartDate: "2023-04-07",
        uniEndDate: "2023-04-07",
    });

    function handleChange(e) {
        setState((prevState) => {
            const { name, value } = e.target;
            return { ...prevState, [name]: value };
        });
    }

    return (
        <div className="form--container">
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
            <div className="dates--container">
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
            </div>
            <button
                className="builder--add-btn"
                onClick={() => props.add(state)}
            >
                Add
            </button>
            <button className="builder--remove-btn" onClick={props.remove}>
                Remove Last
            </button>
        </div>
    );
}
