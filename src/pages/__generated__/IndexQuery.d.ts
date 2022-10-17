/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndexQuery
// ====================================================

export interface IndexQuery_latest_edges_node_fields {
  slug: string | null;
}

export interface IndexQuery_latest_edges_node_frontmatter {
  date: any | null;
  title: string | null;
  tags: (string | null)[] | null;
  categories: (string | null)[] | null;
}

export interface IndexQuery_latest_edges_node {
  id: string;
  fields: IndexQuery_latest_edges_node_fields | null;
  frontmatter: IndexQuery_latest_edges_node_frontmatter | null;
}

export interface IndexQuery_latest_edges {
  node: IndexQuery_latest_edges_node;
}

export interface IndexQuery_latest {
  edges: IndexQuery_latest_edges[];
}

export interface IndexQuery_Highlights_edges_node_fields {
  slug: string | null;
}

export interface IndexQuery_Highlights_edges_node_frontmatter_thumbnail_childImageSharp_fixed {
  base64: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
}

export interface IndexQuery_Highlights_edges_node_frontmatter_thumbnail_childImageSharp {
  fixed: IndexQuery_Highlights_edges_node_frontmatter_thumbnail_childImageSharp_fixed | null;
}

export interface IndexQuery_Highlights_edges_node_frontmatter_thumbnail {
  /**
   * Returns the first child node of type ImageSharp or null if there are no children of given type on this node
   */
  childImageSharp: IndexQuery_Highlights_edges_node_frontmatter_thumbnail_childImageSharp | null;
}

export interface IndexQuery_Highlights_edges_node_frontmatter {
  date: any | null;
  title: string | null;
  tags: (string | null)[] | null;
  thumbnail: IndexQuery_Highlights_edges_node_frontmatter_thumbnail | null;
}

export interface IndexQuery_Highlights_edges_node {
  id: string;
  fields: IndexQuery_Highlights_edges_node_fields | null;
  frontmatter: IndexQuery_Highlights_edges_node_frontmatter | null;
}

export interface IndexQuery_Highlights_edges {
  node: IndexQuery_Highlights_edges_node;
}

export interface IndexQuery_Highlights {
  edges: IndexQuery_Highlights_edges[];
}

export interface IndexQuery {
  latest: IndexQuery_latest;
  Highlights: IndexQuery_Highlights;
}
