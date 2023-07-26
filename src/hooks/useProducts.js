import {useMutation, useQuery} from "react-query";
import {addProduct, getProducts} from "@/services/productService";

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



