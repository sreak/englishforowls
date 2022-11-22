import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"

const BlogPost=({data, children})=>{

    return(
       <Layout>

        <p>{data.mdx.frontmatter.date}</p>
        {children}
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