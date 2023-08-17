import {useQuery} from "react-query";
import {getAllPayments} from "@/services/paymentService";


export const useGetPayments = () => {
    return useQuery({queryKey: ['payments'], queryFn: getAllPayments, retry: false})
}