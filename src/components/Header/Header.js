import React from "react";
import reactLogo from "../images/logo192.png";
import classes from "./Header.module.css";

function Header(props) {
  return (
    <header>
      <nav className={props.darkMode ? classes.dark : ""}>
        <img src={reactLogo} alt='logo' className={classes.navLogo} />
        <h3 className={classes.navLogoText}>React Facts</h3>
        <div className={classes.toggler}>
          <p className={classes.togglerLight}>Light</p>
          <div className={classes.togglerSlider} onClick={props.toggleDarkMode}>
            <div className={classes.togglerSliderCircle}></div>
          </div>
          <p className={classes.togglerDark}>Dark</p>
        </div>
      </nav>
    </header>
  );
}

export default Header;
