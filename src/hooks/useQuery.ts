
import { DefinedInitialDataOptions, QueryClient, QueryKey, useQuery as useQueryTanstack } from '@tanstack/react-query';
export const useQuery = <TQueryFnData = unknown, TError = string, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(options: DefinedInitialDataOptions<TQueryFnData, TError, TData, TQueryKey>, queryClient?: QueryClient) => {

    const { isLoading, ...definedUseQueryResult } = useQueryTanstack(options, queryClient)

    return { isLoading, ...definedUseQueryResult }
}