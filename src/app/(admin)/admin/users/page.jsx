'use client'
import {useGetUsers} from "@/hooks/useAuth";
import LoadingSpinner from "@/components/LoadingSpinner";
import UsersTable from "@/pages/(admin)/admin/users/UsersTable";

export default function page() {
    const {data, isLoading} = useGetUsers()
    const {users} = data || {}
    // console.log(users)
    if (isLoading)
        return <LoadingSpinner/>
    return <>
        <h1>اطلاعات کاربران</h1>


        <UsersTable users={users}/>
    </>
}