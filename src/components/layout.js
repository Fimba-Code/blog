/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GitHub, Twitter } from "react-feather"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          avatar
        }
      }
    }
  `)

  return (
    <>
      <Header
        avatar={data.site.siteMetadata.avatar}
        siteTitle={data.site.siteMetadata.title}
      />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              color: "#999",
              fontFamily: "Poppins",
              fontSize: 12,
              marginBottom: 0,
            }}
          >
            {`© ${new Date().getFullYear()}`} built with{" <3 "}
            by <strong>Fimba Code</strong>
          </p>
          <div>
            <a
              style={{ margin: 10, color: "#999" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Fimba-Code"
            >
              <GitHub size={20} />
            </a>
            <a
              style={{ margin: 10, color: "#999" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/CodeFimba"
            >
              <Twitter size={20} />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
