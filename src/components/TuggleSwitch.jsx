import React from "react";

export default function ToggleSwitch({ label }){
    return (
        <div className="toggle-container">
            
            <div className="toggle-switch">
                <input
                    type="checkbox"
                    className="checkbox"
                    name={label}
                    id={label}
                />
                <label className="label" htmlFor={label}>
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
            {label}{" "}
        </div>
    );
};