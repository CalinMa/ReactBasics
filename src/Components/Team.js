import React from "react";
import "../App.css";
import TeamList from "./TeamList";
import Game from "./TicTacToe";
import Pluralsight from "./Pluralsight";
import GitHubCards from "./GitHubCards";

function Team (){
    return (
        <div>
            <TeamList/>
            <Game/>
            <Pluralsight/>
            <GitHubCards title={"The GitHub Cards App"}/>
        </div>
    );
}

export default Team;