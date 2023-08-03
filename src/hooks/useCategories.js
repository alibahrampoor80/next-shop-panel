import {useMutation, useQuery} from "react-query";
import {getProducts} from "@/services/productService";
import {AddNewCategory, getCategory} from "@/services/categoryService";

export const UseGetCategories = () => {
    return useQuery({
        queryKey: ['get-category'],
        queryFn: getCategory,
        retry: false,
        refetchOnWindowFocus: true
    })
}
export const UseAddCategory = () => {
    return useMutation({mutationFn: AddNewCategory})
}