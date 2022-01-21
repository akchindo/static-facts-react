import React from "react"
import reactLogo from "../images/react-logo-icon.png"
import classes from "./Header.module.css"

function Header() {
    return (
        <header>
         <div className={classes.container}>
            <nav className={classes.nav}>
                <div className={classes.firstLogo}>
                    <img src={reactLogo} alt="logo"  className={classes.navLogo} />
                    <h3>React Facts</h3>
                </div>
                <h4>React Course - Project 1</h4>
            </nav>
        </div>
          
      </header>
    )  
  }

  export default Header