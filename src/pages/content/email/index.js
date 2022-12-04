import * as React from "react"

import { Link } from "gatsby"
import Layout from "../../../components/layout"



const EmailPost =()=>{


    const listStyle={
        marginTop: "8px"
    }



    return(

        <Layout>
        <div>
            <h2>Email posts will go here.</h2>

            <div>
        <h3>Emails for class 6 to 12.</h3>
        <p>
          Please, click on the title of the email and then it will bring you a
          new page. On that page you will find the email with few alternatives.
        </p>
      </div>
      <div>
        <ol>
          <li>
            <Link to="/content/for-the-membership-of-the-english-language-club/">
             For the membership of the English Language Club.
            </Link>
          </li>
          <li style={listStyle}>
            <Link to="/content/waht-you-intend-to-do-after-the-annual-exam/">
              What I intend to do after the SSC/annual exam.
            </Link>
          </li>

          <li  style={listStyle}>
            <Link to="/content/thanks-for-the-nice-birthday-present/">
              Thanks for the nice birthday present.
            </Link>
          </li>

          <li  style={listStyle}>
            <Link to="/content/invitation-for-attending-birthday-party/">
              Invitation for attending the birthday party.
            </Link>
          </li>

          <li  style={listStyle}>
            <Link to="/content/congratulation-on-the-brilliant-success/">
              Congratulation on the brilliant success.
            </Link>
          </li>
          <li  style={listStyle}>
            <Link to="/content/invitation-for-joining-a-picnic/">Invitation for joining the picnic.</Link>
          </li>

          <li  style={listStyle}>
            <Link to="/content/thanks-for-the-nice-birthday-present/">Thanks for the nice birthday present.</Link>
          </li>
          <li  style={listStyle}> 
            <Link to="/content/request-for-money-for-buying-books/">Request for money for buying books.</Link>
          </li>
          <li  style={listStyle}>
            <Link to="/content/informing-about-prize-giving-ceremony">Informing about prize giving ceremony.</Link>
          </li>
          <li  style={listStyle}>
            <Link to="/content/about-my-aim-in-life">About my aim in life.</Link>
          </li>
        </ol>
      </div>
    </div>
    
</Layout>
    )
}
    
    


export default EmailPost