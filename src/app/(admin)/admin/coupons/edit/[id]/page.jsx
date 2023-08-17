'use client'
import React, {useEffect, useState} from 'react';
import {useAddNewCoupon, useGetOneCoupons, useUpdateCoupon} from "@/hooks/useCoupons";
import {useParams, useRouter} from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import CouponForm from "@/components/CouponForm";
import {UseGetProducts} from "@/hooks/useProducts";
import toast from "react-hot-toast";

const Page = () => {
    const router = useRouter()
    const {id} = useParams()
    const {data, isLoading} = useGetOneCoupons(id)
    const {coupon} = data || {}


    const {isLoading: isLoadingUpdateNewCoupon, mutateAsync} = useUpdateCoupon()

    const {data: productData} = UseGetProducts()
    const {products} = productData || {}
    const [formData, setFormData] = useState({
        // code: "",
        // amount: "",
        // usageLimit: "",
    })
    const [type, setType] = useState("")
    const [productId, setProductId] = useState([])
    const [expireDate, setExpireDate] = useState(new Date())

    const handelChangeValue = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handelSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const {message} = await mutateAsync({
                id: coupon._id,
                data: {
                    ...formData,
                    type,
                    expireDate: new Date(expireDate).toISOString(),
                    productIds: productId.map(p => p._id)
                }
            })
            toast.success(message)
            router.push('/admin/coupons')
        } catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }

    useEffect(() => {
        if (coupon) {
            setType(coupon.type)
            setProductId(coupon.productIds)
            setFormData({
                code: coupon.code,
                amount: coupon.amount,
                usageLimit: coupon.usageLimit,
            })
            setExpireDate(new Date(coupon.expireDate))
        }
    }, [coupon])

    if (isLoading) return <LoadingSpinner/>
    return (
        <div>
            <h1 className={'mb-4 font-bold text-xl'}>اضافه کردن تخفیف</h1>

            <CouponForm
                isLoading={isLoadingUpdateNewCoupon}
                type={type}
                setType={setType}
                formData={formData}
                setExpireDate={setExpireDate}
                expireDate={expireDate}
                handelChangeValue={handelChangeValue}
                options={products}
                handelSubmitForm={handelSubmitForm}
                onChangeSelect={setProductId}
                defaultValue={coupon.productIds}
            />
        </div>
    );
};

export default Page;