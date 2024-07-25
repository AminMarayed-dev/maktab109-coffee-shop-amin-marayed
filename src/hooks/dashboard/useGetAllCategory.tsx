import { getAllCategory } from "@/api/dashboard/getAllCategory.api";

import { useQuery } from "@tanstack/react-query";

export const useGetAllCategory = () => {
  return useQuery<any>({
    queryKey: ["get-all-categories"],
    queryFn: getAllCategory,
  });
};
