/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: CategoryPage
// ====================================================

export interface CategoryPage_allMarkdownRemark_edges_node_fields {
  slug: string | null;
}

export interface CategoryPage_allMarkdownRemark_edges_node_frontmatter {
  title: string | null;
  date: any | null;
  tags: (string | null)[] | null;
  categories: (string | null)[] | null;
}

export interface CategoryPage_allMarkdownRemark_edges_node {
  id: string;
  fields: CategoryPage_allMarkdownRemark_edges_node_fields | null;
  frontmatter: CategoryPage_allMarkdownRemark_edges_node_frontmatter | null;
}

export interface CategoryPage_allMarkdownRemark_edges {
  node: CategoryPage_allMarkdownRemark_edges_node;
}

export interface CategoryPage_allMarkdownRemark {
  totalCount: number;
  edges: CategoryPage_allMarkdownRemark_edges[];
}

export interface CategoryPage {
  allMarkdownRemark: CategoryPage_allMarkdownRemark;
}

export interface CategoryPageVariables {
  category?: string | null;
}
