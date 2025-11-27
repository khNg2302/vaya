
import { QueryKeys } from "../queryKeys"
import { deleteApi } from "@/axios"
import { useMutation } from "@/hooks/useMutation"

export const useDeletePost = ({ id }: { id: string }) => {

    const mutation = useMutation({
        options: {
            mutationFn: () => deleteApi(`/posts/${id}`)
        }, invalidateQueriesProps: { filters: [QueryKeys.post, id] }
    })

    const handleDelete = () => {
        mutation.mutate()
    }

    return { handleDelete }
}