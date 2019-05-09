/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'gatsby-image';

import Layout from '../components/layout';

const renderBody = documentToReactComponents;
const getImageFluid = (node, data) => {
  const nodeFileName = node.data.target.fields.file['en-US'].fileName;
  const { node: { fluid } } = data.images.edges
    .filter(n => Object.prototype.hasOwnProperty.call(n.node, 'fluid'))
    .find(n => n.node.fluid.originalName === nodeFileName);
  return fluid;
};

export const query = graphql`
query($slug: String) {
  post: contentfulBlogPost(slug: { eq: $slug }) {
    title
    author
    date(formatString: "DD-MM-YYYY")
    body {
      json
    }
  }

  images: allImageSharp{
    edges{
      node{
        fluid(maxWidth:750){
          originalName
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
}`;

const Post = ({ data }) => {
  const {
    title,
    author,
    date,
    body: { json },
  } = data.post;

  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        const fluid = getImageFluid(node, data);
        const imageAlt = node.data.target.fields.description['en-US'];
        return (
          <Image fluid={fluid} alt={imageAlt} />
        );
      },
    },
  };

  return (
    <Layout>
      <article>
        <h1>{title}</h1>
        <p>Author: {author}</p>
        <p>Date: {date}</p>
        { renderBody(json, options) }
      </article>
    </Layout>
  );
};

export default Post;
