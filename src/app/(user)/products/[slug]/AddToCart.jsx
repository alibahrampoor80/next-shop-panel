'use client'
import {useGetUser} from "@/hooks/useAuth";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {useQueryClient} from "react-query";
import LoadingSpinner from "@/components/LoadingSpinner";
import {useAddToCart} from "@/hooks/useCart";
import Link from "next/link";

export default function AddToCart({product}) {
    const queryClient = useQueryClient()


    const router = useRouter()
    const {data} = useGetUser()
    const {user} = data || {}

    const {isLoading, mutateAsync} = useAddToCart()

    const addToCartHandler = async () => {
        if (!user) {
            toast.error("لطفا وارد حساب خود شوید")
            router.push('/auth')
            return
        }
        try {
            const {message} = await mutateAsync(product._id)
            await queryClient.invalidateQueries({queryKey: ["get-user"]})
            toast.success(message)

        } catch (err) {
            if (err?.response?.data) {
                toast.error(err.response.data.message)
            }
        }
    }

    const isInCart = (user, product) => {
        if (!user) return false
        return user.cart?.products.some((p) => p.productId === product._id)
    }

    return <>
        <div>
            {

                isInCart(user, product) ? (
                    <Link href={'/cart'} className={'text-primary-900 font-bold '}>ادامه ی سفارش</Link>
                ) : isLoading ? (
                    <LoadingSpinner/>
                ) : (
                    <button onClick={addToCartHandler} className={'btn btn--primary py-2'}>افزودن به سبد خرید</button>
                )
            }


        < /div>
    </>

}