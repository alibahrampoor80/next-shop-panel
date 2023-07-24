'use client'
import {useGetUser} from "@/hooks/useAuth";
import LoadingSpinner from "@/components/LoadingSpinner";
import PaymentTable from "@/pages/(profile)/profile/payment/PaymentTable";

export default function page() {
    const {data, isLoading} = useGetUser()
    const {user, payments} = data || {}
    if (isLoading) return <LoadingSpinner/>

    return <>
        <div>
            <h1>سفارشات کاربر</h1>
            <PaymentTable payments={payments}/>
        </div>
    </>
}