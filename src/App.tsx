import usePosts from './hooks/usePosts'
import CustomTable from './components/custom-table'
import { POSTS_TABLE_HEADS } from './constants'
import { SearchInput } from './components/search-input'
import { SearchIcon } from './components/icons'

export default function App() {
  const { postsData, loading, setSort, setFilter } = usePosts({
    autoLoad: true,
  })
  return (
    <div className="container">
      <SearchInput
        disabled={loading}
        endIcon={<SearchIcon />}
        placeholder={'Search'}
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
    </div>
  )
}
