'use client'
import React, {useState} from 'react';
import {UseGetProducts} from "@/hooks/useProducts";
import {useAddNewCoupon} from "@/hooks/useCoupons";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import CouponForm from "@/components/CouponForm";

const Page = () => {
    const router = useRouter()
    const {isLoading, mutateAsync} = useAddNewCoupon()

    const {data} = UseGetProducts()
    const {products} = data || {}
    const [formData, setFormData] = useState({
        code: "",
        amount: "",
        usageLimit: "",
    })
    const [type, setType] = useState("percent")
    const [productId, setProductId] = useState([])
    const [expireDate, setExpireDate] = useState(new Date())

    const handelChangeValue = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handelSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const {message} = await mutateAsync({
                ...formData,
                type,
                expireDate: new Date(expireDate).toISOString(),
                productIds: productId.map(p => p._id)
            })
            toast.success(message)
            router.push('/admin/coupons')
        } catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }


    return (
        <div>
            <h1 className={'mb-4 font-bold text-xl'}>اضافه کردن تخفیف</h1>
            <CouponForm
                isLoading={isLoading}
                type={type}
                setType={setType}
                formData={formData}
                setExpireDate={setExpireDate}
                expireDate={expireDate}
                handelChangeValue={handelChangeValue}
                options={products}
                handelSubmitForm={handelSubmitForm}
                onChangeSelect={setProductId}
            />
        </div>
    );
};

export default Page;