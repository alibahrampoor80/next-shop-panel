import {useQuery} from "react-query";
import {getUserProfile} from "@/services/authServices";

export const useGetUser = () => {
    return useQuery({
        queryFn: getUserProfile,
        queryKey: ['get-user'],
        retry: false,
        refetchOnWindowFocus: true
    })
}