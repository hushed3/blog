/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PostBySlug
// ====================================================

export interface PostBySlug_markdownRemark_fields {
  slug: string | null;
}

export interface PostBySlug_markdownRemark_frontmatter_thumbnail_childImageSharp_fixed {
  base64: string | null;
  width: number;
  height: number;
  src: string;
  srcSet: string;
}

export interface PostBySlug_markdownRemark_frontmatter_thumbnail_childImageSharp {
  fixed: PostBySlug_markdownRemark_frontmatter_thumbnail_childImageSharp_fixed | null;
}

export interface PostBySlug_markdownRemark_frontmatter_thumbnail {
  /**
   * Returns the first child node of type ImageSharp or null if there are no children of given type on this node
   */
  childImageSharp: PostBySlug_markdownRemark_frontmatter_thumbnail_childImageSharp | null;
}

export interface PostBySlug_markdownRemark_frontmatter {
  title: string | null;
  date: any | null;
  tags: (string | null)[] | null;
  categories: (string | null)[] | null;
  thumbnail: PostBySlug_markdownRemark_frontmatter_thumbnail | null;
}

export interface PostBySlug_markdownRemark {
  html: string | null;
  excerpt: string | null;
  fields: PostBySlug_markdownRemark_fields | null;
  frontmatter: PostBySlug_markdownRemark_frontmatter | null;
}

export interface PostBySlug {
  markdownRemark: PostBySlug_markdownRemark | null;
}

export interface PostBySlugVariables {
  slug: string;
}
