interface SimplifiedData {
  id: string
  date: string
  slug: string
  tags: string[]
  categories: string[]
  title: string
  description: string
  thumbnail?: FixedObject | FixedObject[]
}

type YearListData = Record<string, SimplifiedData[]>

interface SideGroupItem {
  name: string
  totalCount: number
}

type SideData = Record<string, Record<string, SideGroupItem[]>>

interface ImageItem {
  id: number
  name: string
  url: string
}
