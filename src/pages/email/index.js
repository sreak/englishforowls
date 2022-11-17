import * as React from "react"
import Layout from "../../components/layout"
import {Link, graphql } from "gatsby"

const BlogPage=({data})=>{
    return(
        <Layout>
            <p>Cool blog post will go here.</p>

            {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/email/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))
      }
        </Layout>
    )
}



export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM D,YYYY")
          slug
        }
        id
      }
    }
  }
`


export default BlogPage