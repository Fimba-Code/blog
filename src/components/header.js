import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, avatar }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem`,
        display: "flex",
      }}
    >
      <Link
        to="/"
        style={{
          color: `#1F567A`,
          textDecoration: `none`,
          display: `flex`,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 12,
          fontFamily: `Poppins`,
          fontWeight: 700,
        }}
      >
        <img
          src={require("../images/icon.png")}
          style={{
            width: 60,
            marginRight: 10,
            marginBottom: 0,
          }}
        />
        {/* <span>{siteTitle}</span> */}
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
