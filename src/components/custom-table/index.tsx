import { ReactNode } from 'react'
import './style.css'

const defaultStyle: React.CSSProperties = {
  width: 200,
  textAlign: 'center',
  padding: 5,
}

type TCustomTableProps = {
  heads: Array<IHeads>
  rows: Array<{ [key: string]: ReactNode }>
  isLoading?: boolean
}

export default function CustomTable({
  heads,
  rows,
  isLoading,
}: TCustomTableProps) {
  return (
    <table>
      <thead>
        <tr>
          {heads.map((h) => (
            <th key={h.key} style={{ ...defaultStyle, ...h.style }}>
              {h.label}
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
