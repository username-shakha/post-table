import { useCallback, useEffect, useMemo, useState } from 'react'
import { IPost, ISort } from '../interfaces'

export default function usePosts({ autoLoad }: { autoLoad?: boolean }) {
  const [loading, setLoading] = useState<boolean>(false)
  const [posts, setPosts] = useState<IPost[]>([])
  const [sort, setSort] = useState<ISort | null>(null)
  const fetchPosts = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/posts`)

      const posts = (await res.json()) as IPost[]

      setPosts(posts)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }, [setPosts])

  useEffect(() => {
    if (autoLoad === true) void fetchPosts()
  }, [autoLoad, fetchPosts])

  const postsData = useMemo(() => {
    if (sort != null) {
      console.log(sort)
    }
    return posts
  }, [posts, sort])
  return {
    loading,
    fetchPosts,
    postsData,
    setSort,
  }
}
