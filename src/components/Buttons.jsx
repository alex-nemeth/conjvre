import React, { Component } from "react";

export default class Buttons extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="builder--buttons">
                {this.props.part > 0 && (
                    <button
                        className="builder--back-btn"
                        onClick={this.props.back}
                    >
                        Back
                    </button>
                )}

                {this.props.part < 3 && (
                    <button
                        className="builder--next-btn"
                        onClick={this.props.next}
                    >
                        {this.props.part === -1 ? "Begin" : "Next"}
                    </button>
                )}
                {this.props.part === 3 && (
                    <button className="builder--download-btn">
                        Download PDF
                    </button>
                )}
            </div>
        );
    }
}
