import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import { graphql, useStaticQuery } from "gatsby"

import MapImg from "../../assets/images/map.png"
import Shape1 from "../../assets/images/shape1.png"
import Shape2 from "../../assets/images/shape2.svg"
import FooterLogo from "../../assets/images/footer-logo.png"
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

const Footer = () => {
  const data = useStaticQuery(query)
  const {
    strapiSiteLogo: { blackLogo, whiteLogo },
  } = data

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link to="/">
                  <img src={FooterLogo} alt="Logo" />
                </Link>
              </div>
              <p>
                TrainBeyond uses gamification to increase knowledge retention
                and engagement while giving companies powerful data to manage
                learning practices.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Product</h3>
              <ul className="list">
                <li>
                  <a href="#trainbeyond">TrainBeyond</a>
                </li>
                <li>
                  <a href="#theplatform">The Platform</a>
                </li>
                <li>
                  <a href="#ourprocess">Our Process</a>
                </li>
                <li>
                  <a href="#industries">Industries</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>Company</h3>
              <ul className="list">
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6">
            <div className="single-footer-widget">
              <h3>Resources</h3>
              <ul className="list">
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/terms">Terms and Conditions</Link>
                </li>
                <li>
                  <Link to="/policy">Privacy Policy</Link>
                </li>
              </ul>
              <ul className="social-links mt-3">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Facebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/"
                    className="twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Twitter />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    className="instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Instagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon.Linkedin />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <div className="text-center mt-3">
              <p>
                If you prefer to talk to one of our specialists over the phone,
                please reach out at:
                <p>
                  <Icon.PhoneCall />
                  Phone: <Link to="tel:3462586656"> +1 (346) 258-6656</Link>
                </p>
              </p>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>
                Copyright &copy; {currentYear} TrainBeyond LLC. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src={MapImg} className="map" alt="map" />

      {/* Shape Images */}
      <div className="shape1">
        <img src={Shape1} alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src={Shape2} alt="shape" />
      </div>
    </footer>
  )
}

export default Footer
