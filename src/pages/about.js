import React from "react"
import Layout from "../components/_App/layout"
import SEO from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Footer from "../components/_App/Footer"
import PageBanner from "../components/Common/PageBanner"

import * as Icon from "react-feather"
import AboutImg1 from "../assets/images/about.png"
import AboutImg2 from "../assets/images/about1-1.png"
import AboutImg3 from "../assets/images/about1-2.png"
import AboutImg4 from "../assets/images/about1-3.png"
import AboutImg5 from "../assets/images/about1-4.png"
import CEOAvatar from "../assets/images/ceo-avatar.png"
import NewsletterImg from "../assets/images/Service1.jpg"
import Man1 from "../assets/images/Man1.png"

import ISO from "../assets/images/iso.png"
import OSHA from "../assets/images/osha.png"
import API from "../assets/images/api.png"

const About = () => (
  <Layout>
    <SEO title="About Us" />

    <Navbar />

    <PageBanner pageTitle="About Us" />

    <div className="agency-about-area ptb-80">
      <div className="container-fluid">
        <div className="iot-features-area ptb-80 bg-f7fafd">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 iot-features-content">
                <h2>Engaging New Audiences Through Smart Approach</h2>
                <p>
                  <strong>
                    TrainBeyond is a metaverse-connected LMS where you can host
                    an immersive, risk-free and retention-focused version of
                    your traditional training curriculum.
                  </strong>
                </p>

                <p>
                  The TrainBeyond team is comprised of the best software
                  engineering talent in the world, helping you bring your
                  training programs to another level.
                </p>
              </div>

              <div className="col-lg-6 iot-features-image">
                <img
                  src={AboutImg1}
                  className="animate__animated animate__fadeInUp animate__delay-0.6s"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="iot-features-area ptb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 iot-features-image">
                <img
                  src={AboutImg2}
                  className="animate__animated animate__fadeInUp animate__delay-0.6s"
                  alt="image"
                />
              </div>

              <div className="col-lg-6 iot-features-content">
                <h2>
                  Integrated performance measurability for your operational
                  training programs.
                </h2>
                <p>
                  The Admin Site (LMS) is the center for all training reports.
                  From there, you can monitor your team members’ progress and
                  test results.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="iot-features-area ptb-80 bg-f7fafd">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 iot-features-content">
                <h2>Easily accessible on mobile devices</h2>
                <p>
                  No virtual experience is complete without mobile.
                  TrainBeyond’s framework allows any training environment to be
                  translated to mobile devices seamlessly.
                </p>
              </div>

              <div className="col-lg-6 iot-features-image">
                <img
                  src={AboutImg3}
                  className="animate__animated animate__fadeInUp animate__delay-0.6s"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="iot-features-area ptb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 iot-features-image">
                <img
                  src={AboutImg4}
                  className="animate__animated animate__fadeInUp animate__delay-0.6s"
                  alt="image"
                />
              </div>

              <div className="col-lg-6 iot-features-content">
                <h2>
                  Gamification: a powerful tool to drive trainee engagement
                </h2>
                <p>
                  Gamification taps into intrinsic motivations from users.
                  TrainBeyond’s gamification concept mixes training evaluation
                  with badges and awards that make trainees enjoy their learning
                  experience and amplify content retention.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="iot-features-area ptb-80 bg-f7fafd">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 iot-features-content">
                <h2>VR Optimized Training experiences</h2>
                <p>
                  Own your personalized 3D virtual environment which can be
                  accessed online by multiple people at the same time. Provide
                  your team with an immersive and collaborative learning
                  experience.
                </p>
              </div>

              <div className="col-lg-6 iot-features-image">
                <img
                  src={AboutImg5}
                  className="animate__animated animate__fadeInUp animate__delay-0.6s"
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="team-area repair-team-area pt-80 pb-50 bg-f9f6f6">
        <div className="container">
          <div className="section-title">
            <div className="bar"></div>
            <p>
              <strong>
                “After almost 30 years developing digital solutions, I can say
                with confidence that TrainBeyond is the next-generation concept
                many industries have been waiting for. We’re going to take the
                LMS industry by storm.”
              </strong>
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="single-team">
                <div className="team-image">
                  <img src={CEOAvatar} alt="image" />
                </div>

                <div className="team-content">
                  <div className="team-info">
                    <h3>Jason Bott</h3>
                    <span>CEO of TrainBeyond</span>
                  </div>

                  <ul>
                    <li>
                      <a href="https://www.linkedin.com/">
                        <Icon.Linkedin />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="pricing-area pb-50 mt-5">
      <div className="container">
        <div className="section-title st-fs-28">
          <h2>Remote training is a scalable and cost-effective tool</h2>
          <div className="bar"></div>
          <p>
            Lifelike, scalable, personalized, easily accessible, and
            process-based training. Industry-standardized incorporated
            e-learning and micro-learning content—with no cost for trainers nor
            logistics, and no long classroom sessions.
          </p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="pricing-box">
              <div className="pricing-header">
                <h3>On-site Training</h3>
              </div>
              <ul className="pricing-features">
                <li>
                  <Icon.XCircle /> High risk and direct / indirect costs
                </li>
                <li>
                  <Icon.XCircle /> Dated way to deliver content
                </li>
                <li>
                  <Icon.XCircle /> Does not mimic a real emergency
                </li>
                <li>
                  <Icon.XCircle /> Difficult to measure
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="pricing-box">
              <div className="pricing-header">
                <h3>TrainBeyond</h3>
              </div>
              <ul className="pricing-features">
                <li>
                  <Icon.Check /> Available anytime, anywhere, from multiple
                  devices
                </li>
                <li>
                  <Icon.Check /> Immersive Virtual Environment
                </li>
                <li>
                  <Icon.Check /> Real emergency scenarios
                </li>
                <li>
                  <Icon.Check /> Real-time measurability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="newsletter-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="newsletter-image">
              <img src={NewsletterImg} alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div className="newsletter-content">
              <h2>Oil and Gas</h2>
              <p>
                Test drive our comprehensive Oil and Gas training program
                covering the fundamentals:{" "}
                <strong>
                  Rig Site Components, Safety Awareness and Emergencies{" "}
                </strong>
              </p>
              <button type="button" className="btn btn-secondary">
                Download Oil and Gas Demo
              </button>
              <div className="mt-3">
                <span>
                  Built considering industry best practices and standards
                </span>
                <div>
                  <span>
                    <a href="#" target="_blank" rel="noreferrer">
                      <img src={ISO} alt="partner" width="103px" />
                    </a>
                  </span>
                  <span>
                    <a href="#" target="_blank" rel="noreferrer">
                      <img src={OSHA} alt="partner" width="103px" />
                    </a>
                  </span>
                  <span>
                    <a href="#" target="_blank" rel="noreferrer">
                      <img src={API} alt="partner" width="103px" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 iot-features-image">
          <img
            src={Man1}
            className="animate__animated animate__fadeInUp animate__delay-0.6s"
            alt="image"
          />
        </div>
        <div className="col-lg-6 iot-features-content">
          <h2>
            Don’t know where to start? Reach out and let’s build a proof of
            concept.
          </h2>
          <button className="btn btn-primary">Get Started Today</button>
        </div>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default About
