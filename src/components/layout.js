import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Header from "./header"
import { container} from "./layout.module.css"


const Layout = ({children})=>{
     
 
    return(
        <div>
           <Header />
           
            <main className={container}>
                {/*All the body contents will go here.*/}
              
               {children} 
            </main>
        </div>
    )
}

export default Layout