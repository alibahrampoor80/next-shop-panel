import {useQuery} from "react-query";
import {getProducts} from "@/services/productService";
import {getCategory} from "@/services/categoryService";

export const UseGetCategories = () => {
    return useQuery({
        queryKey: ['get-category'],
        queryFn: getCategory,
        retry: false,
        refetchOnWindowFocus: true
    })
}