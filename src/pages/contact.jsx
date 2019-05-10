import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const ContactPage = () => (
  <Layout>
    <div>
      <SEO title="Contact" keywords={['gatsby', 'application', 'react']} />
      <h1>Contact Me</h1>
      <p>Talk to me on my email: fabio__tche@hotmail.com</p>
      <p><a href="https://www.facebook.com/TcheORfabio" target="blank">My Facebook page</a></p>
      <p>Or my What´s App: (+55) 11 96300-2594</p>
    </div>
  </Layout>
);

export default ContactPage;
