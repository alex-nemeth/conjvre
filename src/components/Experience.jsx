import React, { useState, useEffect } from "react";

export default function Experience(props) {
    const [state, setState] = useState({
        position: "",
        company: "",
        expStartDate: "2023-04-07",
        expEndDate: "2023-04-07",
        notes: "",
    });

    function handleChange(e) {
        setState((prevState) => {
            const { name, value } = e.target;
            return {
                ...prevState,
                [name]: value,
            };
        });
    }

    return (
        <div className="experience--container">
            <h2 className="experience--title">Experience: </h2>
            <input
                type="text"
                name="position"
                className="experience--position"
                placeholder="Position"
                onChange={handleChange}
            ></input>
            <input
                type="text"
                name="company"
                className="experience--company"
                placeholder="Company Name"
                onChange={handleChange}
            ></input>
            <input
                type="date"
                className="experience--date-start"
                name="expStartDate"
                onChange={handleChange}
            ></input>
            <input
                type="date"
                className="experience--date-end"
                name="expEndDate"
                onChange={handleChange}
            ></input>
            <br />
            <textarea
                type="text"
                name="notes"
                className="experience--text"
                placeholder="Notes"
                onChange={handleChange}
            ></textarea>
            <button
                className="builder--add-btn"
                onClick={() => props.add(state)}
            >
                Add New
            </button>
            <button className="builder--add-btn" onClick={props.remove}>
                Remove Last
            </button>
        </div>
    );
}
