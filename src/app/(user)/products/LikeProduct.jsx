'use client'


import {likeProduct} from "@/services/productService";
import toast from "react-hot-toast";
import {AiFillLike, AiOutlineLike} from "react-icons/ai";
import {useRouter, usePathname, useSearchParams} from "next/navigation";

export default function LikeProduct({product}) {
    const router = useRouter()
    const pathName = usePathname()
    const searchParams = useSearchParams()
    const likeHandler = async (id) => {

        try {
            const {message} = await likeProduct(id)
            toast.success(message)
            router.refresh(pathName + "?" + searchParams.toString())
        } catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }
    return <>
        <div className="mb-2">
            <button onClick={() => likeHandler(product._id)}>
                {
                    product.isLiked ? <AiFillLike className={'fill-primary-900 w-6 h-6'}/> :
                        <AiOutlineLike className={'fill-primary-700 w-6 h-6'}/>
                }
            </button>
        </div>
    </>
}