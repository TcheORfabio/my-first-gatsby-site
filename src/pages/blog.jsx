/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const getPosts = edges => edges.map(({ node }) => (
  <li key={node.title}>
    <Link to={`/blog/${node.slug}/`}>
      <article>
        <h2>{node.title}</h2>
        <p>By: {node.author}</p>
        <p>Created in: {node.date}</p>
      </article>
    </Link>
  </li>
));

const BlogPage = () => (
  <StaticQuery
    query={
      graphql`
      query {
        allContentfulBlogPost(
          sort: {
            fields: date,
            order: DESC
          }
        ) 
        {
          edges {
            node {
              title
              slug
              author
              date(formatString: "DD-MM-YYYY")
            }
          }
        }
      }
      `
    }
    render={
      data => (
        <Layout>
          <SEO title="Blog" keywords={['gatsby', 'application', 'react']} />
          <h1>Blog Posts!</h1>
          <ol>
            {
              getPosts(data.allContentfulBlogPost.edges)
            }
          </ol>
        </Layout>
      )
    }
  />
);

export default BlogPage;
