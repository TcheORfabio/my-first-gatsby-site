/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';

const renderBody = documentToReactComponents;

export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      author
      date(formatString: "DD-MM-YYYY")
      body {
        json
      }
    }
  }`;

const Post = ({ data }) => {
  const {
    title, author, date, body: { json },
  } = data.contentfulBlogPost;
  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <p>Author: {author}</p>
        <p>Date: {date}</p>
        { renderBody(json) }
      </article>
    </Layout>
  );
};

export default Post;
