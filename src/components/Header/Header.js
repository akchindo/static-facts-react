import React from "react"
import reactLogo from "../images/logo192.png"
import classes from "./Header.module.css"

function Header() {
    return (
        <header>
            <nav className={classes.nav}>
                <img src={reactLogo} alt="logo"  className={classes.navLogo} />
                <h3 className={classes.navLogoText                                        } >React Facts</h3>
                <h4 className={classes.navTitle}> React Course - Project 1</h4>
            </nav>
      </header>
    )  
  }

  export default Header