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
  loading?: boolean
}

export default function CustomTable({
  heads,
  rows,
  loading = false,
}: TCustomTableProps) {
  const headsNotEmpty = Array.isArray(heads) && heads.length >= 1
  const rowsNotEmpty = Array.isArray(rows) && rows.length >= 1
  return (
    !loading && (
      <div>
        <table>
          <thead>
            {headsNotEmpty ? (
              <tr>
                {heads.map((h) => (
                  <th key={h.key} style={{ ...defaultStyle, ...h.style }}>
                    {h.label}
                  </th>
                ))}
              </tr>
            ) : (
              <tr>
                <th className="error-notification">no column data available</th>
              </tr>
            )}
          </thead>
          <tbody>
            {rowsNotEmpty ? (
              rows.map((r, i) => (
                <tr key={i}>
                  {headsNotEmpty ? (
                    heads.map((h) => (
                      <td
                        key={h.key}
                        style={{
                          ...defaultStyle,
                          ...h.style,
                        }}
                      >
                        {!r[h.key] ? `key mismatch: ${r[h.key]}` : r[h.key]}
                      </td>
                    ))
                  ) : (
                    <td>
                      <td className="error-notification" colSpan={3}>
                        The column data is not available and does not match the
                        row data
                      </td>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td className="error-notification" colSpan={heads.length ?? 20}>
                  there is no data in the table
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  )
}
