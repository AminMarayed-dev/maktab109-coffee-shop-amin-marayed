import { getAllProducts } from "@/api/shared/shared.api";
import { useQuery } from "@tanstack/react-query";

function useGetProductsByLimit({
  limit,
  page = 1,
  props,
}: {
  limit: string | number;
  page: number;
  props: any;
}) {
  return useQuery({
    queryKey: ["get-products-by-limit", limit],
    queryFn: () => getAllProducts({ limit, page }),
    initialData: props.serverData,
  });
}

export default useGetProductsByLimit;
