import React, { Component } from "react";

export default function Buttons(props) {
    return (
        <div className="builder--buttons">
            {props.part > 0 && (
                <button className="builder--back-btn" onClick={props.back}>
                    Back
                </button>
            )}

            {props.part < 3 && (
                <button className="builder--next-btn" onClick={props.next}>
                    {props.part === -1 ? "Begin" : "Next"}
                </button>
            )}
            {props.part === 3 && (
                <button
                    className="builder--download-btn"
                    onClick={props.download}
                >
                    Download PDF
                </button>
            )}
        </div>
    );
}
