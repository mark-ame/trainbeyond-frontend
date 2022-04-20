import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import { graphql, useStaticQuery } from "gatsby"
import Logo from "../../assets/images/logo.png"

const query = graphql`
  {
    strapiSiteLogo {
      blackLogo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      whiteLogo {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const Navbar = () => {
  const data = useStaticQuery(query)
  const {
    strapiSiteLogo: { blackLogo, whiteLogo },
  } = data

  const [menu, setMenu] = React.useState(true)

  const toggleNavbar = () => {
    setMenu(!menu)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("header")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
    window.scrollTo(0, 0)
  })

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <header id="header" className="headroom">
      <div className="startp-nav">
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link to="/" onClick={toggleNavbar} className="navbar-brand">
              <img src={Logo} alt="Logo" />
            </Link>

            <button
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link to="/" activeClassName="active" className="nav-link">
                    Home <Icon.ChevronDown />
                  </Link>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a
                        href="#trainbeyond"
                        activeClassName="active"
                        className="nav-link"
                      >
                        TrainBeyond
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#theplatform"
                        activeClassName="active"
                        className="nav-link"
                      >
                        The Platform
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#ourprocess"
                        activeClassName="active"
                        className="nav-link"
                      >
                        Our Process
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#industries"
                        activeClassName="active"
                        className="nav-link"
                      >
                        Industries
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/faq"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/blog"
                    activeClassName="active"
                    onClick={toggleNavbar}
                    className="nav-link"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="others-option">
              <Link to="/login" className="btn btn-light">
                Download Demo
              </Link>
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar
