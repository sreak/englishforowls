import { Link } from "gatsby"
import * as React from "react"
import { container} from "./layout.module.css"


const Layout = ({children})=>{
     
 
    return(
        <div className={container}>
       
        <ul>
               <li style={{display: "inline"}}>
                        <Link to="/">Home</Link>
                    </li>

                    <li style={{display: "inline", marginLeft: "5px"}}>
                        <Link to="/content/email">Emails</Link>
                    </li>
                  
                </ul>
      

            <main>
                {/*All the body contents will go here.*/}
              
               {children} 
            </main>
        </div>
    )
}

export default Layout