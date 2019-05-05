/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';
import styles from '../styles/layout.module.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <Header className={styles.header} siteTitle={data.site.siteMetadata.title} />
        <div className={styles.content}>
          <main>{children}</main>
        </div>
        <footer>
            ©
          {' '}
          {new Date().getFullYear()}
, Built by
          {' '}
          {data.site.siteMetadata.author}
        </footer>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
