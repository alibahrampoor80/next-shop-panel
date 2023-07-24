'use client'
import {useGetUser} from "@/hooks/useAuth";
import LoadingSpinner from "@/components/LoadingSpinner";
import {ToLocalDateString} from "@/utils/toLocalDate";
import PaymentTable from "@/pages/(profile)/profile/payment/PaymentTable";
import Link from "next/link";

const Profile = () => {
    const {data, isLoading, error} = useGetUser()
    const {user, payments} = data || {}
    console.log(user)
    if (isLoading) return (<LoadingSpinner/>)
    return <>
        <h1>{user.name} خوش آمدی</h1>
        <p>
            <span>تاریخ پیوستن : </span>
            <span>{ToLocalDateString(user.createdAt)}</span>
        </p>
        <div className={'border rounded-xl p-4 mt-8'}>
            <div className={'flex items-center justify-between'}>
                <h2>آخرین سفارشات کاربر</h2>
                <Link href={'/profile/payment'} className={'font-bold'}>مشاهده همه ی سفارشات</Link>
            </div>
            <PaymentTable payments={
                payments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                    .slice(0, 3)}
            />
        </div>
    </>
}
export default Profile