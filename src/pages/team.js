import React from "react";
import Layout from "../components/_App/layout";
import SEO from "../components/_App/seo"; 
import Navbar from "../components/_App/Navbar";
import PageBanner from '../components/Common/PageBanner';
import TeamMember from "../components/Team/TeamMember";
import Footer from "../components/_App/Footer";
  
const Team = () => (
    <Layout>
        <SEO title="Team" /> 

        <Navbar />

        <PageBanner pageTitle="Team" />

        <TeamMember />
   
        <Footer />
    </Layout>
)

export default Team;