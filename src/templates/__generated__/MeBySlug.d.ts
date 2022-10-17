/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeBySlug
// ====================================================

export interface MeBySlug_markdownRemark_frontmatter {
  title: string | null;
  slug: string | null;
}

export interface MeBySlug_markdownRemark {
  html: string | null;
  frontmatter: MeBySlug_markdownRemark_frontmatter | null;
}

export interface MeBySlug {
  markdownRemark: MeBySlug_markdownRemark | null;
}

export interface MeBySlugVariables {
  slug: string;
}
