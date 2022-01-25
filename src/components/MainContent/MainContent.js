import React from "react"
import classes from "../MainContent/MainContent.module.css"



function MainContent() {
    return (
      <main>
        <h1 className={classes.mainTitle}>Fun facts about React</h1>
        <ul className={classes.mainFacts}>
         <li>Was first released in 2013</li>
         <li>Was originally created by Jordan Walke </li>
         <li>Has well over 100k stars on Github</li>
         <li>Is maintained by Facebook</li>
         <li>Powers thousands of enterprise apps, including mobile apps</li>
       </ul>
     </main>
    )
  }

  export default MainContent