'use client'
import {useGetUser} from "@/hooks/useAuth";
import LoadingSpinner from "@/components/LoadingSpinner";
import {ToLocalDateString} from "@/utils/toLocalDate";

const Profile = () => {
    const {data, isLoading, error} = useGetUser()
    const {user} = data || {}
    console.log(user)
    if (isLoading) return (<LoadingSpinner/>)
    return <>
        <h1>{user.name} خوش آمدی</h1>
        <p>
            <span>تاریخ پیوستن : </span>
            <span>{ToLocalDateString(user.createdAt)}</span>
        </p>
    </>
}
export default Profile