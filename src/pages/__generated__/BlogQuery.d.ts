/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BlogQuery
// ====================================================

export interface BlogQuery_posts_edges_node_fields {
  slug: string | null;
}

export interface BlogQuery_posts_edges_node_frontmatter {
  date: any | null;
  title: string | null;
  tags: (string | null)[] | null;
  categories: (string | null)[] | null;
}

export interface BlogQuery_posts_edges_node {
  id: string;
  fields: BlogQuery_posts_edges_node_fields | null;
  frontmatter: BlogQuery_posts_edges_node_frontmatter | null;
}

export interface BlogQuery_posts_edges {
  node: BlogQuery_posts_edges_node;
}

export interface BlogQuery_posts {
  edges: BlogQuery_posts_edges[];
}

export interface BlogQuery {
  posts: BlogQuery_posts;
}
