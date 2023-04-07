import React, { Component } from "react";

export default function Resume(props) {
    function informationData() {
        const informationData = props.data.information;
        return (
            <div className="resume--information">
                <div className="resume--name-container">
                    <h1 className="resume--first-name">
                        {informationData.firstName}
                    </h1>
                    <h1 className="resume--last-name">
                        {informationData.lastName}
                    </h1>
                </div>
                <div className="resume--contact-container">
                    <p className="resume--phone">{informationData.phone}</p>
                    <p className="resume--email">{informationData.email}</p>
                </div>
            </div>
        );
    }

    function educationData() {
        const educationData = props.data.education;
        return educationData.map((edu) => {
            return (
                <div className="resume--education-container">
                    <div className="resume--university-container">
                        <h3 className="resume--university">{edu.university}</h3>
                        <h3 className="resume--degree">{edu.degree}</h3>
                    </div>
                    <div className="resume--uni-dates-container">
                        <h3 className="resume--uni-start-date">
                            {edu.uniStartDate.replaceAll("-", ".")}
                        </h3>
                        <h3 className="resume--uni-end-date">
                            - {edu.uniEndDate.replaceAll("-", ".")}
                        </h3>
                    </div>
                </div>
            );
        });
    }

    function experienceData() {
        const experienceData = props.data.experience;
        return experienceData.map((exp) => {
            return (
                <div className="resume--experience-container">
                    <div className="resume--work-container">
                        <h3 className="resume--position">{exp.position}</h3>
                        <h3 className="resume--company">{exp.company}</h3>
                        <h3 className="resume--notes">{exp.notes}</h3>
                    </div>
                    <div className="resume--exp-dates-container">
                        <h3 className="resume--exp-start-date">
                            {exp.expStartDate.replaceAll("-", ".")}
                        </h3>
                        <h3 className="resume--exp-end-date">
                            - {exp.expEndDate.replaceAll("-", ".")}
                        </h3>
                    </div>
                </div>
            );
        });
    }
    console.log(props.data);
    return (
        <div
            className={`resume--container ${
                props.data.part !== 3 ? "small" : "large"
            }`}
        >
            {informationData()}
            <hr className="resume--separator-bold" />
            <h2 className="resume--education-title">Education</h2>
            {props.data.education.length > 0 && educationData()}
            <hr className="resume--separator" />
            <h2 className="resume--experience-title">Experience</h2>
            {props.data.experience.length > 0 && experienceData()}
        </div>
    );
}
