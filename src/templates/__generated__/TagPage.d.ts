/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TagPage
// ====================================================

export interface TagPage_allMarkdownRemark_edges_node_fields {
  slug: string | null;
}

export interface TagPage_allMarkdownRemark_edges_node_frontmatter {
  date: any | null;
  title: string | null;
  tags: (string | null)[] | null;
  categories: (string | null)[] | null;
}

export interface TagPage_allMarkdownRemark_edges_node {
  id: string;
  fields: TagPage_allMarkdownRemark_edges_node_fields | null;
  frontmatter: TagPage_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface TagPage_allMarkdownRemark_edges {
  node: TagPage_allMarkdownRemark_edges_node;
}

export interface TagPage_allMarkdownRemark {
  totalCount: number;
  edges: TagPage_allMarkdownRemark_edges[];
}

export interface TagPage {
  allMarkdownRemark: TagPage_allMarkdownRemark;
}

export interface TagPageVariables {
  tag?: string | null;
}
