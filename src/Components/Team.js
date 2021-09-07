import React from "react";
import "../App.css";
import TeamList from "./TeamList";
import Game from "./TicTacToe";
import Pluralsight from "./Pluralsight";
import GitHubCards from "./GitHubCards";
import TheStarMatchGame from "./TheStarMatchGame";

function Team (){
    return (
        <div>
            <TeamList/>
            <Game/>
            <Pluralsight/>
            <GitHubCards title={"The GitHub Cards App"}/>
            <TheStarMatchGame title={"The Star Match Game"}/>
        </div>
    );
}

export default Team;