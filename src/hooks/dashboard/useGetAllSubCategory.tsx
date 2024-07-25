import { getAllSubCategory } from "@/api/dashboard/getAllSubCategory";
import { useQuery } from "@tanstack/react-query";

function useGetAllSubCategory(id: string) {
  return useQuery<any>({
    queryKey: ["get-all-subcategories"],
    queryFn: () => getAllSubCategory(id),
  });
}

export default useGetAllSubCategory;
