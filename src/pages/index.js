import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import '../css/index.css'; // add some style if you want!
import {
  PostCard,
  PostTitle,
  Date,
  Excerpt,
  BlogContainer,
  Tags,
} from "./styles"

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <SEO title="Blog" />
      <BlogContainer>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <PostCard key={post.id}>
                {post.frontmatter.tags.map(tag => (
                  <Tags key={tag}>{tag}</Tags>
                ))}
                <Link
                  style={{ textDecoration: "none" }}
                  to={post.frontmatter.path}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                    }}
                  >
                    <Date>{post.frontmatter.date}</Date>
                    <Date>Publicado por: {post.frontmatter.author}</Date>
                  </div>
                  <PostTitle>{post.frontmatter.title}</PostTitle>
                  <Excerpt>{post.excerpt}</Excerpt>
                </Link>
              </PostCard>
            )
          })}
      </BlogContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            author
          }
        }
      }
    }
  }
`
