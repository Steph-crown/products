import React from 'react';
import './../css/Checkbox.css'

export default function CheckBox() {
    return (
        <div className="my-checkbox">
            <label className="checkbox-container">
                <input type="checkbox" />
                
                <span className="checkmark"></span>
            </label>
        </div>
    )
}
