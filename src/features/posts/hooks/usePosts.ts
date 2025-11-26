import { get } from "@/axios"
import { useQuery } from "@/hooks/useQuery"
import { QueryKeys } from "../queryKeys"

export const usePosts = () => {
    const definedQueryResult = useQuery({
        queryKey: [QueryKeys.posts],
        queryFn: async () => get('/blogs/2399953/posts'),
        initialData: []

    })

    return definedQueryResult
}