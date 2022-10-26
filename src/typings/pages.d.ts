import { IGatsbyImageData } from 'gatsby-plugin-image'

export type SimplifiedData = {
  id: string
  date: string
  title: string
  slug: string
  tags: string[]
  categories?: string[]
  thumbnail?: IGatsbyImageData
}

export type YearListData = Record<string, SimplifiedData[]>

export interface ImageItem {
  id: number
  name: string
  url: string
  thumbnail: string
}
