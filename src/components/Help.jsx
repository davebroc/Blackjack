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
                    Blackjack is usually played at a table of 2-7 players and uses one to eight 52-card decks. All number cards (2-10) score the value indicated on them. The face cards (Jack, Queen, King) score 10 points and Ace can either be treated as 1 or 11.
                    At the beginning of each round, all players place their bets in their betting positions - also known as ‘boxes’. After the bets have been placed, all players are dealt two cards face-up in front of their respective betting positions. The dealer receives two cards, one face-up and another face-down.
                    Starting to the left of the dealer, each player is given a chance to draw more cards. The players can either ‘hit’ or ‘stand’. If the player calls out ‘HIT’, they are given an extra card. They can then either call out ‘HIT’ again, or ‘STAND’ if they do not wish to draw any more cards. The player can ‘HIT’ as many times as they wish, but have to aim not to ‘bust’ (exceed a total of 21).
                    If the player busts, they immediately lose their bet.
                </p>


            </div>
            <div className="pu-button-container">

            </div>
        </div>
    )
}




