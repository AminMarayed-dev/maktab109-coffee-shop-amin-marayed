import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
      retryOnMount: false,
      refetchInterval: false,
    },
  },
});

interface Props {
  children: ReactNode;
}

function QueryContextProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}

export default QueryContextProvider;
