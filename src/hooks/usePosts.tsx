import { useCallback, useEffect, useMemo, useState } from 'react'
import { IPagination, IPost, ISort } from '../interfaces'
const usePosts = ({ autoLoad }: { autoLoad?: boolean }) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [posts, setPosts] = useState<IPost[]>([])
  const [filter, setFilter] = useState<string>('')
  const [sort, setSort] = useState<ISort | null>(null)
  const [total, setTotal] = useState(0)
  const [pagination, setPagination] = useState<IPagination>({
    page: 1,
    perPage: 10,
  })
  const fetchPosts = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/posts`)

      const posts = (await res.json()) as IPost[]

      setPosts(posts)
      setTotal(posts.length)
    } catch (error) {
      console.log(error)
      setLoading(false)
    } finally {
      setLoading(false)
    }
  }, [setPosts])

  useEffect(() => {
    if (autoLoad === true) void fetchPosts()
  }, [autoLoad, fetchPosts])

  const postsData = useMemo(() => {
    const start = (pagination?.page - 1 ?? 0) * pagination.perPage
    console.log(start)
    let slicedPosts = posts.slice(start, start + pagination.perPage)

    console.log(slicedPosts)
    if (sort != null) {
    }
    if (filter.length > 0) {
      console.log(filter)
    }
    return slicedPosts.map((post) => ({
      body: post.body,
      id: post.id.toString(),
      title: post.title,
      userId: post.userId.toString(),
    }))
  }, [posts, sort, filter, pagination])
  return {
    loading,
    fetchPosts,
    postsData,
    setSort,
    setFilter,
    pagination,
    setPagination,
    total,
  }
}

export default usePosts
