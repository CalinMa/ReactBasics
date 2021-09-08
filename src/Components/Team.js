import React from "react";
import "../App.css";
import TeamList from "./TeamList";
import Game from "./TicTacToe";
import Pluralsight from "./Pluralsight";
import GitHubCards from "./GitHubCards";

import StarMatch from "./TheStarMatchGame";

function Team (){
    return (
        <div>
            <TeamList/>
            <Game/>
            <Pluralsight/>
            <GitHubCards title={"The GitHub Cards App"}/>
            <StarMatch title={"The Star Match Game"}/>
        </div>
    );
}

export default Team;