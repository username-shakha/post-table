import { ReactNode, useState } from 'react'
import './style.css'
import { IHeads, ISort, SortOption } from '../../interfaces'
import SortColumnIndicator from './SortColumnIndicator'

const defaultStyle: React.CSSProperties = {
  width: 200,
  textAlign: 'center',
  padding: 5,
}

type TCustomTableProps = {
  heads: Array<IHeads>
  rows: Array<{ [key: string]: ReactNode }>
  isLoading?: boolean
  onSort?: (data: ISort | null) => void
}

export default function CustomTable({
  heads,
  rows,
  isLoading,
  onSort,
}: TCustomTableProps) {
  const [sortType, setSortType] = useState<SortOption | null>(null)
  const [sortedColumn, setSortedColumn] = useState('')

  return (
    <table>
      <thead>
        <tr>
          {heads.map((h) => (
            <th
              onClick={() => {
                if (h.sortable === false) return
                let sort: SortOption | null = null

                if (sortType == null) sort = SortOption.ASC
                if (sortType === SortOption.ASC) sort = SortOption.DESC
                if (sortType === SortOption.DESC) sort = null
                onSort?.(
                  sort != null
                    ? {
                        key: h.key,
                        sort,
                        type: h.type,
                      }
                    : null
                )
                setSortType(sort)
                setSortedColumn(sort != null ? h.key : '')
              }}
              key={h.key}
              style={{ ...defaultStyle, ...h.style }}
            >
              {h.label}

              {(h.sortable ?? true) && sortedColumn === h.key && (
                <div style={{ marginLeft: 16, display: 'inline' }}>
                  <SortColumnIndicator sortType={sortType} />
                </div>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td className="loading" colSpan={heads.length}>
              Loading....
            </td>
          </tr>
        ) : (
          rows.map((r, i) => (
            <tr key={i}>
              {heads.map((h) => (
                <td
                  key={h.key}
                  style={{
                    ...defaultStyle,
                    ...h.style,
                  }}
                >
                  {r[h.key]}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}
