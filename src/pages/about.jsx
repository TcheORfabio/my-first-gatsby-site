import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const AboutPage = () => (
  <Layout>
    <div>
      <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
      <h1>About Me</h1>
      <p>I currently learning full-stack development</p>
    </div>
  </Layout>
);

export default AboutPage;
