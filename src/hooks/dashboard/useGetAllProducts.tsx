import { getAllProducts } from "@/api/shared/shared.api";
import { useQuery } from "@tanstack/react-query";

type Props = {
  page: number;
  limit: number | string;
  sort: string;
};
export const useGetAllProductsToDashboard = ({ page, limit, sort }: Props) => {
  return useQuery<any>({
    queryKey: ["products-dashboard", page, limit, sort],
    queryFn: () => getAllProducts({ page, limit, sort }),
  });
};
