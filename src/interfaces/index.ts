export enum SortOption {
  ASC,
  DESC,
}

export enum ETableHeaderType {
  Number,
  Text,
}

export interface IHeads {
  key: string
  label: string
  type: ETableHeaderType
  style?: React.CSSProperties
  sortable?: boolean
}

export type IPost = {
  id: number
  title: string
  body: string
  userId: number
}

export interface ISort {
  sort: SortOption
  key: string
  type: ETableHeaderType
}
