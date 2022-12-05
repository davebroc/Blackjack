import React from 'react'
import '../styles/Popup.css';

export default function Help(props) {
    const { setPopUp } = props

    return (
        <div className="PopUp">
            <button className="popup-x" onClick={() => setPopUp(false)} >X</button>
            <h2>Help</h2>
            <div className="pu-content-container">
                <p>
                    Help and settings sections are under development.
                </p>


            </div>
            <div className="pu-button-container">

            </div>
        </div>
    )
}




