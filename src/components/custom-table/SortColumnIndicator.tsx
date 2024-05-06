import { SortOption } from '../../interfaces'
import { DownIcon, UpIcon } from '../icons'

interface ISortColumnIndicatorProps {
  sortType: SortOption | null
}

export default function SortColumnIndicator({
  sortType,
}: ISortColumnIndicatorProps) {
  if (sortType === SortOption.ASC) return <UpIcon />
  if (sortType === SortOption.DESC) return <DownIcon />
  return sortType
}
