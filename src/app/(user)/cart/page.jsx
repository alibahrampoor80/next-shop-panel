'use client'


import {useGetUser} from "@/hooks/useAuth";
import Link from "next/link";

export default function page() {
    const {data, isLoading} = useGetUser()
    const {user, cart} = data || {}
    if (!user || !cart) return <div className={'container lg:max-w-screen-lg'}>
        <p className={'font-bold mb-4'}>برای مشاهده ی سبد خرید لطفا وارد سایت شوید</p>
        <Link href={'/auth'} className={'text-lg font-bold text-primary-900'}>رفتن به صفحه ی لاگین ؟</Link>
    </div>
    return <>
        cart
    </>
}