import logo from "../logo.svg";
import Clock from "./Clock";
import "../CSS/Header.css";

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