import { Link } from "gatsby";
import * as React from "react"
import Layout from "../../../components/layout";


const Paragraph=()=>{
    
    const listStyle = {
        marginTop: "8px",
      }

    //All individual pages url of the paragraphs
    
      const para_1="/content/flight-attendants";
      const para_2="/content/benefits-of-early-rising";
      const para_3="/content/traffic-jam";
      const para_4="/content/global-warming";
      const para_5="/content/deforestation";
      const para_6="/content/dowry-system";
      const para_7="/content/computer";
      const para_8="/content/a-street-begger";
      const para_9="/content/the-causes-effects-of-teenage-depression";
      const para_10="/content/corruption";
      const para_11="/content/the-importance-of-female-education";
      const para_12="/content/eve-teasing";
      
      const para_14="/content/price-hike";
      const para_15="/content/air-pollution";
      const para_16="/content/tree-plantation";
     




    return(
       <Layout>
        <h2>Paragraphs for class 6 to 12 for students of Bangladesh.</h2>
         <ol>
            <li style={listStyle}>
                <Link to={para_1}>Flight Attendants</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_2}>Benefits of Early Rising.</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_3}>Traffic Jam.</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_4}>Global Warming.</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_5}>Deforestation.</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_6}>Dowry System.</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_7}>About Computer.</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_8}>A Street Begger.</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_9}>Causes and Effects of Teenage Depression</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_10}>About Corruption.</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_11}>The Importance of Female Education.</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_12}>Paragraph about Eve-teasing.</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_14}>Paragraph about Price Hike.</Link>
            </li>
            <li style={listStyle}>
                <Link to={para_15}>Paragraph about Air Pollution.</Link>
            </li>

            <li style={listStyle}>
                <Link to={para_16}>Tree Plantation.</Link>
            </li>
            
         </ol>

       </Layout>
    )
}


export default Paragraph


export const Head=()=><title>Paragraphs | A list of paragraphs for class 6 to 12.</title>