import { useQuery } from "@/hooks/useQuery"
import { Post } from "../types"
import { QueryKeys } from "../queryKeys"
import { getApi } from "@/axios"

export const usePost = ({ id }: { id: string }) => {

    const definedQueryResult = useQuery<Post>({
        queryKey: [QueryKeys.post, id],
        queryFn: async () => getApi(`/posts/${id}`),
        initialData: { title: '', content: '', id: '', author: { displayName: '' } }
    })

    return definedQueryResult
}