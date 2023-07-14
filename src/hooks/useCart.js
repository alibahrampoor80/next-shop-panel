import {useMutation} from "react-query";
import {addToCart} from "@/services/cartService";

export const useAddToCart = () => {
    return useMutation({mutationFn: addToCart})
}