import React, { useState, useEffect } from "react";

export default function Information(props) {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    function handleChange(e) {
        setState((prevState) => {
            const { name, value } = e.target;
            return { ...prevState, [name]: value };
        });
        console.log(state);
    }

    return (
        <div className="information--container">
            <h2 className="information--title">General information:</h2>
            <input
                type="text"
                name="firstName"
                className="information--first-name"
                placeholder="First Name"
                onChange={handleChange}
                value={state.firstName}
            ></input>
            <input
                type="text"
                name="lastName"
                className="information--last-name"
                placeholder="Last Name"
                onChange={handleChange}
                value={state.lastName}
            ></input>
            <input
                type="email"
                name="email"
                className="information--email"
                placeholder="Email Address"
                onChange={handleChange}
                value={state.email}
            ></input>
            <input
                type="text"
                name="phone"
                className="information--phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={state.phone}
            ></input>
            <button
                className="builder--add-btn"
                onClick={() => props.save(state)}
            >
                Save
            </button>
        </div>
    );
}
