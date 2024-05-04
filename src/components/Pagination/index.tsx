import { useMemo, useState } from 'react'
import './style.css'

interface IPaginationProps {
  perPage: number
  total: number
  page: number
  onChangePage: (page: number) => void
  style: React.CSSProperties
}

const Pagination = ({
  perPage,
  page,
  total,
  onChangePage,
  style,
}: IPaginationProps) => {
  console.log(page, perPage, total, onChangePage, style)
  const [currentPage, setCurrentPage] = useState(page)
  const totalPages = Math.ceil(total / perPage)

  const pageList = useMemo(() => {
    const count = 3
    const leftSection =
      page < count
        ? Array.from({ length: count }).map((_, i) => i + 1)
        : [1, '...']

    const centerSection =
      page > count - 1 && page <= totalPages - count + 1
        ? [page - 1, page, page + 1]
        : []
    const rigthSection =
      page > totalPages - count + 1
        ? Array.from({ length: count }).map(
            (_, i) => totalPages - count + i + 1
          )
        : ['...', totalPages]
    return [...leftSection, ...centerSection, ...rigthSection]
  }, [page, totalPages])

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        ...style,
      }}
    >
      <button
        className={`pagination-item ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={() => {
          onChangePage(currentPage - 1)
          setCurrentPage(currentPage - 1)
        }}
      >
        Назад
      </button>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 8,
        }}
      >
        {pageList?.map((num, i) => {
          if (typeof num === 'string') return num
          return (
            <button
              key={i}
              className={`${
                page.toString() === String(num) ? 'active-pagination-item' : ''
              } pagination-item`}
              onClick={() => {
                onChangePage(num)
                setCurrentPage(num)
              }}
            >
              {num}
            </button>
          )
        })}
      </div>
      <button
        className={`pagination-item ${
          currentPage === totalPages ? 'disabled' : ''
        } `}
        onClick={() => {
          onChangePage(currentPage + 1)
          setCurrentPage(currentPage + 1)
        }}
      >
        Далее
      </button>
    </div>
  )
}

export default Pagination
