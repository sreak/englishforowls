import * as React from "react";

import { Link } from "gatsby";
import Layout from "../../../components/layout";

const EmailPost = () => {
  const listStyle = {
    marginTop: "8px",
  };

   
  const email_1= "/content/for-the-membership-of-the-english-language-club/";
  const email_2= "/content/waht-you-intend-to-do-after-the-annual-exam/";
  const email_3="/content/thanks-for-the-nice-birthday-present/";
  const email_4="/content/invitation-for-attending-birthday-party/"
  const email_5="/content/congratulation-on-the-brilliant-success/"
  const email_6="/content/invitation-for-joining-a-picnic/"
  const email_7="/content/thanks-for-the-nice-birthday-present/"
  const email_8="/content/request-for-money-for-buying-books/"
  const email_9="/content/informing-about-prize-giving-ceremony"
  const email_10="/content/about-my-aim-in-life"
  const email_11="/content/food-and-food-habits-of-the-people-of-bangladesh"
  const email_12="/content/co-curricular-activities-of-our-school"
  const email_13="/content/cultural-week-in-out-School"
  const email_14="/content/inviting-to-visit-bangladesh"





  return (
    <Layout>
      <div>
        <h2>Email posts will go here.</h2>

        <div>
          <h3>Emails for class 6 to 12.</h3>
          <p>
            Please, click on the title of the email and then it will bring you a
            new page. On that page you will find the email with few
            alternatives.
          </p>
        </div>
        <div>
          <ol>
            <li>
              <Link to={email_1}>
                For the membership of the English Language Club.
              </Link>
            </li>
            <li style={listStyle}>
              <Link to={email_2}>
                What I intend to do after the SSC/annual exam.
              </Link>
            </li>

            <li style={listStyle}>
              <Link to={email_3}>
                Thanks for the nice birthday present.
              </Link>
            </li>

            <li style={listStyle}>
              <Link to={email_4}>
                Invitation for attending the birthday party.
              </Link>
            </li>

            <li style={listStyle}>
              <Link to={email_5}>
                Congratulation on the brilliant success.
              </Link>
            </li>
            <li style={listStyle}>
              <Link to={email_6}>
                Invitation for joining the picnic.
              </Link>
            </li>

            <li style={listStyle}>
              <Link to={email_7}>
                Thanks for the nice birthday present.
              </Link>
            </li>
            <li style={listStyle}>
              <Link to={email_8}>
                Request for money for buying books.
              </Link>
            </li>

            <li style={listStyle}>
              <Link to={email_9}>
                Informing about prize giving ceremony.
              </Link>
            </li>

            <li style={listStyle}>
              <Link to={email_10}>
                About my aim in life.
              </Link>
            </li>

            <li style={listStyle}>
              <Link to={email_11}>
                About Food & food habits of Bangladeshi people.
              </Link>
            </li>

            <li style={listStyle}> 
              <Link to={email_12}>
                About co-curricular activities of your school or college.
              </Link>
            </li>

            <li style={listStyle}>
              <Link to={email_13}>
                About cultural week in out School
              </Link>
            </li>

            <li style={listStyle}>
              <Link to={email_14}>
                Write an email to your friend to visit your country.
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};







export default EmailPost;
