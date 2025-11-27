import { getApi } from "@/axios"
import { useQuery } from "@/hooks/useQuery"
import { QueryKeys } from "../queryKeys"
import { Post } from "../types"

export const usePosts = () => {
    const definedQueryResult = useQuery<{ items: Post[] }>({
        queryKey: [QueryKeys.posts],
        queryFn: async () => getApi('/posts'),
        initialData: { items: [] }

    })

    return definedQueryResult
}