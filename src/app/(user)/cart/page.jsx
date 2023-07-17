'use client'


import {useGetUser} from "@/hooks/useAuth";
import Link from "next/link";
import LoadingSpinner from "@/components/LoadingSpinner";
import CartItem from "@/pages/(user)/cart/CartItem";
import CartSummary from "@/pages/(user)/cart/CartSummary";

export default function page() {
    const {data, isLoading} = useGetUser()
    const {user, cart} = data || {}


    if (isLoading) return <LoadingSpinner/>

    if (!user || !cart) return <div className={'container lg:max-w-screen-lg'}>
        <p className={'font-bold mb-4'}>برای مشاهده ی سبد خرید لطفا وارد سایت شوید</p>
        <Link href={'/auth'} className={'text-lg font-bold text-primary-900'}>رفتن به صفحه ی لاگین ؟</Link>
    </div>
    if (!user.cart?.products || !user.cart?.products.length === 0) return <div>
        <p>سبد خرید خالیه</p>
        <Link href={'/products'} className={'text-lg font-bold text-primary-900'}>رفتن به صفحه ی محصولات ؟</Link>
    </div>
    return <>
        <div className={'grid grid-cols-4 gap-3'}>
            <div className="space-y-5 col-span-3">
                {
                    cart && cart.productDetail.map(item => {
                        return <CartItem cartItem={item} key={item._id}/>
                    })
                }
            </div>

            <div className={'col-span-1'}>
                <CartSummary payDetail={cart.payDetail}/>
            </div>

        </div>
    </>
}