import { authCtx } from "index";
import { useContext } from "react";
import useSWR from "swr";
import { Configuration } from "swr/dist/types";
import { fetcher } from "utils/fetcher";

export function useFetchData<T>(url: string | null, revalidate: boolean) {
  const { state } = useContext(authCtx);

  const config: Partial<Configuration> = {
    refreshInterval: revalidate ? 5000 : 0,
    refreshWhenHidden: revalidate,
    refreshWhenOffline: revalidate,
    revalidateOnFocus: revalidate,
    revalidateOnReconnect: revalidate,
  };

  const { data, error, mutate } = useSWR<T>(
    url ? [url, state.token] : null,
    fetcher,
    config
  );

  return { data, error, mutate };
}
