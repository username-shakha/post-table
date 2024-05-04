import usePosts from './hooks/usePosts'
import CustomTable from './components/custom-table'
import { POSTS_TABLE_HEADS } from './constants'
import { SearchInput } from './components/search-input'
import { SearchIcon } from './components/icons'
import Pagination from './components/Pagination'

export default function App() {
  const { postsData, loading, setSort, setFilter, pagination, setPagination } =
    usePosts({
      autoLoad: true,
    })
  return (
    <div className="container">
      <SearchInput
        disabled={loading}
        endIcon={<SearchIcon />}
        // eslint ↓7v current 7
        placeholder="Search"
        style={{ maxWidth: 600, marginTop: 24, marginBottom: 16 }}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setFilter(e.target.value)
        }}
      />
      <CustomTable
        rows={postsData}
        heads={POSTS_TABLE_HEADS}
        isLoading={loading}
        onSort={setSort}
      />
      {!loading && (
        <Pagination
          page={pagination.page}
          total={95}
          perPage={10}
          onChangePage={(page) => {
            setPagination((prev) => ({ ...prev, page }))
            history.replaceState({}, '', `?page=${page}`)
          }}
          style={{ padding: '0 45px' }}
        />
      )}
    </div>
  )
}
