/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TaxonomyQuery
// ====================================================

export interface TaxonomyQuery_tags_group {
  name: string | null;
  totalCount: number;
}

export interface TaxonomyQuery_tags {
  group: TaxonomyQuery_tags_group[];
}

export interface TaxonomyQuery_categories_group {
  name: string | null;
  totalCount: number;
}

export interface TaxonomyQuery_categories {
  group: TaxonomyQuery_categories_group[];
}

export interface TaxonomyQuery {
  tags: TaxonomyQuery_tags;
  categories: TaxonomyQuery_categories;
}
