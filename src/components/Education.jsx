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
            return { [name]: value };
        });
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
            ></input>
            <input
                type="text"
                name="degree"
                className="education--degree"
                placeholder="Degree or Field"
                onChange={handleChange}
            ></input>
            <input
                type="date"
                name="uniStartDate"
                className="education--date-start"
                onChange={handleChange}
            ></input>
            <input
                type="date"
                name="uniEndDate"
                className="education--date-end"
                onChange={handleChange}
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
