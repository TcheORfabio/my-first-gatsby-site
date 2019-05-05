/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export const query = graphql`
  query(
    $slug: String
  ) {
    markdownRemark(
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) 
    {
      frontmatter {
        title 
        date
        author
      }
      html
    }
  }`;

const Post = ({ data }) => {
  const { title, author, date } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <p>Author: {author}</p>
        <p>Date: {date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  );
};

export default Post;
