import React from 'react'
import '../styles/EndBanner.css'

export default function EndBanner({ dealerState, playerState, winner, parent }) {
    let state;
    let didWin = false;
    let winLose = 'loseBanner'

    if (parent === winner) {
        didWin = true;
        winLose = 'winBanner'
    }

    switch (parent) {
        case "player":
            state = playerState;
            parent = "you"
            break;
        case "dealer":
            state = dealerState;
            break;
        default:
            break;
    }

    if (state === '') {
        if (didWin)
            state = `${parent} Won!`
        if (!didWin)
            state = `${parent} Lost`
    }
    state = capitalizeFirst(state);







    function capitalizeFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className={winLose + "  banner"}>
            <p>{state}</p>
        </div>
    )
}
