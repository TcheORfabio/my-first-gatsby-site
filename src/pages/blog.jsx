/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const getPosts = edges => edges.map(({ node }) => (
  <li>
    <Link to={`/blog/${node.fields.slug}/`}>
      <article>
        <h2>{node.frontmatter.title}</h2>
        <p>By: {node.frontmatter.author}</p>
        <p>{node.excerpt.substring(0, 35)}...</p>
        <p>Created in: {node.frontmatter.date}</p>
      </article>
    </Link>
  </li>
));

const BlogPage = () => (
  <StaticQuery
    query={
      graphql`
        query getPosts {
          allMarkdownRemark(sort: { fields: [frontmatter___date] }) {
            edges {
              node {
                frontmatter {
                  title
                  author
                  date
                }
                excerpt
                fields {
                  slug
                }
              }
            }
          }
        }
      `
    }
    render={
      data => (
        <Layout>
          <SEO title="Blog Page" />
          <h1>Blog Posts!</h1>
          <ol>
            {
              getPosts(data.allMarkdownRemark.edges)
            }
          </ol>
        </Layout>
      )
    }
  />
);

export default BlogPage;
