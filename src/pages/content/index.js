import * as React from "react";
import Layout from "../../components/layout";
import {graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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
