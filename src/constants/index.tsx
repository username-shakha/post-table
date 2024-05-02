import { ETableHeaderType, IHeads } from '../interfaces'

export const POSTS_TABLE_HEADS: IHeads[] = [
  {
    key: 'id',
    label: 'ID',
    type: ETableHeaderType.Number,
    style: {
      width: 100,
      padding: 5,
    },
  },
  {
    key: 'title',
    label: 'Title',
    type: ETableHeaderType.Text,
    style: { width: 500, padding: 5 },
  },
  {
    key: 'body',
    label: 'Body',
    type: ETableHeaderType.Text,
    style: { width: 400, padding: 5 },
  },
]
