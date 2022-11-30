import React from 'react'
import './Popup.css';

export default function Settings(props) {
    const { setPopUp } = props

    return (
        <div className="PopUp">
            <button className="popup-x" onClick={() => setPopUp(false)} >X</button>
            <h2>Settings</h2>
            <div className="pu-content-container">
                <ul id='settings-list'>
                    {/* <li>
                            <label>Surrender</label>
                            <label className='switch'>
                                <input type="checkbox" id='Surrender'></input>
                                <span className="slider round"></span>
                            </label>
                        </li> */}

                    <li>
                        <label for="Surrender">Surrender</label>
                        <input type="checkbox" id="Surrender" ></input>
                    </li>
                    <li>
                        <label for="Insurance">Insurance</label>
                        <input type="checkbox" id="Insurance" ></input>
                    </li>
                    <li>
                        <label for="soft17">Dealer hits on soft 17</label>
                        <input type="checkbox" id="soft17" ></input>
                    </li>
                    <li>
                        <label for="numDecks">Number of Decks</label>
                        <input type="checkbox" id="numDecks" ></input>
                    </li>
                    <li>
                        <label for="BJPay">Blackjack pays 2 to 1</label>
                        <input type="checkbox" id="BJPay" ></input>
                    </li>
                    <li>
                        <label for="DDSplit">Double down after splitting</label>
                        <input type="checkbox" id="DDSplit" ></input>
                    </li>


                </ul>
            </div>
            <div className="pu-button-container">

            </div>
        </div>
    )
}




