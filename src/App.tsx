import usePosts from './hooks/usePosts'
import CustomTable from './components/custom-table'
import { POSTS_TABLE_HEADS } from './constants'

export default function App() {
  const { postsData, loading, setSort } = usePosts({
    autoLoad: true,
  })
  return (
    <div className="container">
      <CustomTable
        rows={postsData}
        heads={POSTS_TABLE_HEADS}
        isLoading={loading}
        onSort={setSort}
      />
    </div>
  )
}
