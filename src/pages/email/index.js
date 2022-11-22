import * as React from "react";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";

const BlogPage = () => {
  return (
    <Layout>


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
            <Link to="/email/for-the-membership-of-the-english-language-club/">
             For the membership of the English Language Club.
            </Link>
          </li>
          <li>
            <Link to="/email/waht-you-intend-to-do-after-the-annual-exam/">
              What I intend to do after the SSC/annual exam.
            </Link>
          </li>

          <li>
            <Link to="/email/thanks-for-the-nice-birthday-present/">
              Thanks for the nice birthday present.
            </Link>
          </li>

          <li>
            <Link to="/email/invitation-for-attending-birthday-party/">
              Invitation for attending the birthday party.
            </Link>
          </li>

          <li>
            <Link to="/email/congratulation-on-the-brilliant-success/">
              Congratulation on the brilliant success.
            </Link>
          </li>
          <li>
            <Link to="/email/invitation-for-joining-a-picnic/">Invitation for joining the picnic.</Link>
          </li>

          <li>
            <Link to="/email/thanks-for-the-nice-birthday-present/">Thanks for the nice birthday present.</Link>
          </li>
          <li>
            <Link to="/email/request-for-money-for-buying-books/">Request for money for buying books.</Link>
          </li>
          <li>
            <Link to="/email/informing-about-prize-giving-ceremony">Informing about prize giving ceremony.</Link>
          </li>
          <li>
            <Link to="/email/about-my-aim-in-life">About my aim in life.</Link>
          </li>
        </ol>
      </div>


    </Layout>
  );
};






export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`;




export default BlogPage;
