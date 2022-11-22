import * as React from "react"
import Layout from "../components/layout"

const HomePage=()=>{
  return(
   <Layout>

     <p>Hi, Thnaks for visiting my website.</p>
     <p>This is so called home page of this website. 
      I am trying hard to make this eye-catching.
      For the time being this page is under construction.
      Thnaks for your love.
     </p>
   </Layout>
  )
}

export default HomePage

export const Head = () => <title>Home Page</title>
