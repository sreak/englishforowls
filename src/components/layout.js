import { Link } from "gatsby"
import * as React from "react"
import { container } from "./layout.module.css"

const Layout = ({children})=>{
    return(
        <div className={container}>
            <h3>englishforowls</h3>
            <nav>
                <ul>
                    <li>
                        <Link to="/email">Emails</Link>
                    </li>
                </ul>
            </nav>

            <main>
                {/*All the body contents will go here.*/}
              
               {children} 
            </main>
        </div>
    )
}

export default Layout