import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"

export const BlogPost=({data, children})=>{
    return(
        <Layout>
           
        <main>
            <h2>{data.mdx.frontmatter.title}</h2>
        <p>{data.mdx.frontmatter.date}</p>
         {children}
         </main>
          
        </Layout>
    )
}


export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export default BlogPost