import {useMutation, useQuery} from "react-query";
import {getProducts} from "@/services/productService";
import {AddNewCategory, getCategory, getCategoryById, removeCategory, updateCategory} from "@/services/categoryService";

export const UseGetCategories = () => {
    return useQuery({
        queryKey: ['get-categories'],
        queryFn: getCategory,
        retry: false,
        refetchOnWindowFocus: true
    })
}

export const UseGetCategoryById = (id) => {
    return useQuery({
        queryKey: ['get-category', id],
        queryFn: () => getCategoryById(id),
        retry: false,
        refetchOnWindowFocus: true
    })
}


export const UseAddCategory = () => {
    return useMutation({mutationFn: AddNewCategory})
}

export const UseUpdateCategory = () => {
    return useMutation({mutationFn: updateCategory})
}

export const useRemoveCategory = () => {
    return useMutation({mutationFn: removeCategory})
}

