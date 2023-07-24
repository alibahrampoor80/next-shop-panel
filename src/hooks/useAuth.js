import {useQuery} from "react-query";
import {getAllUsers, getUserProfile} from "@/services/authServices";

export const useGetUser = () => {
    return useQuery({
        queryFn: getUserProfile,
        queryKey: ['get-user'],
        retry: false,
        refetchOnWindowFocus: true
    })
}

export const useGetUsers = () => {
    return useQuery({
        queryFn: getAllUsers,
        queryKey: ['get-users'],
        retry: false,
        refetchOnWindowFocus: true
    })
}

