import {useMutation} from "react-query";
import {addToCart, decrementFromCart} from "@/services/cartService";

export const useAddToCart = () => {
    return useMutation({mutationFn: addToCart})
}

// export const useRemoveFromCart = () => {
//     return useMutation({mutationFn: addToCart})
// }
export const useDecrementFromCart = () => {
    return useMutation({mutationFn: decrementFromCart})
}