import React from 'react'

export default function Settings(props) {
    const { setPopUp } = props

    return (
        <div className="PopUp">
            <button className="popup-x" onClick={() => setPopUp(false)} >X</button>
            <h2>Settings</h2>
            <div className="pu-content-container">
                <div className=''>
                    <ul >
                        <li>Surrender</li>
                        <li>Insurance</li>
                        <li>Double down after splitting</li>
                    </ul>
                </div>
            </div>
            <div className="pu-button-container">

            </div>
        </div>
    )
}




