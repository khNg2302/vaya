import { InvalidateOptions, InvalidateQueryFilters, QueryClient, UseMutationOptions, useMutation as useMutationTanstack, useQueryClient } from '@tanstack/react-query';
export const useMutation = <TData = unknown, TError = string, TVariables = void, TOnMutateResult = unknown>({ options, queryClient, invalidateQueriesProps }: { options: UseMutationOptions<TData, TError, TVariables, TOnMutateResult>, queryClient?: QueryClient | undefined, invalidateQueriesProps: { filters?: InvalidateQueryFilters<readonly unknown[]> | undefined, options?: InvalidateOptions } }) => {

    const definedQueryClient = useQueryClient(queryClient);

    const { mutate, ...mutation } = useMutationTanstack({
        ...options,
        onSuccess: (...props) => {
            if (options.onSuccess) {
                options.onSuccess(...props)
            }
            definedQueryClient.invalidateQueries(invalidateQueriesProps.filters, invalidateQueriesProps.options)
        }
    });
    return { mutate, ...mutation }
}