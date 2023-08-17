import {useMutation, useQuery} from "react-query";
import {addProduct, getOneProductById, getProducts, removeProduct, updateProduct} from "@/services/productService";

export const UseGetProducts = () => {
    return useQuery({
        queryKey: ['get-products'],
        queryFn: getProducts,
        retry: false,
        refetchOnWindowFocus: true
    })
}


export const UseAddProducts = () => {
    return useMutation({mutationFn: addProduct})
}


export const UseGetProductById = (id) => {
    return useQuery({
        queryKey: ['get-product-id', id],
        queryFn: () => getOneProductById(id),
        retry: false,
        refetchOnWindowFocus: true
    })
}


export const UseUpdateProduct = () => {
    return useMutation({mutationFn: updateProduct})
}

export const UseRemoveProduct = () => {
    return useMutation({mutationFn: removeProduct})
}

