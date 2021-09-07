import logo from "../logo.svg";
import Clock from "./Clock";
import "./Header.css";
import Game from "./TicTacToe";

function Header () {
    return (
        <header className="App-header, customClass">
            <img src={logo} className="App-logo" alt="logo"/>
            <p className="customClass">
                My Team <Clock />
            </p>
        </header>
    )

}
export default Header;