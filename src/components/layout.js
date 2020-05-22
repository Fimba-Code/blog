/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GitHub, Twitter, Rss, Mic } from "react-feather"
import "@deckdeckgo/highlight-code"
import { defineCustomElements as deckDeckGoElement } from "@deckdeckgo/highlight-code/dist/loader"

import Header from "./header"
import "./layout.css"

// Init Highlighting
deckDeckGoElement()

const Layout = ({ children }) => {
  const foundedYear = "2020",
    currentYear = new Date().getFullYear()
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
            {`© ${foundedYear} - ${currentYear}`} Built with ♥️ by{" "}
            <strong>Fimba Code</strong>
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
            <a
              style={{ margin: 10, color: "#999" }}
              rel="noopener noreferrer"
              href="/feed.xml"
            >
              <Rss size={20} />
            </a>
            <a
              style={{ margin: 10, color: "#999" }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://anchor.fm/fimbacode"
            >
              <Mic size={20} />
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
