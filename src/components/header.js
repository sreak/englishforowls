import { Link } from "gatsby"
import * as React from "react"

const Header =()=>{
    
    const style={
        marginTop: "-8px",
        marginLeft: "-8px",
        marginRight: "-8px",
        padding: "25px",
    }
    const listStyle={
      listStyle: "none",
      margin: "0px",
      padding: "0px",
     
    }

    const listStyle1={
      display: "inline-block",
      marginLeft: "8px",
    }
    





    return(
        <div style={style}>

            <ul style={listStyle}>
                <li style={listStyle1}>
                    <Link 
                    to="/" 
                 style={{color: "black"}}
                 >Home</Link>
                </li>
                <li style={listStyle1}>
                    <Link 
                    to="/content/email"
                   style={{color: "black"}}
                >Emails</Link>
                </li>

                <li style={listStyle1}>
                    <Link 
                    to="/content/paragraph"
                    style={{color: "black"}}
                    >Paragraphs</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header