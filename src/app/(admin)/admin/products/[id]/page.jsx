'use client'
import {useParams} from "next/navigation";
import {UseGetProductById} from "@/hooks/useProducts";
import LoadingSpinner from "@/components/LoadingSpinner";
import {toPersianNumbers, toPersianNumbersWithComma} from "@/utils/toPersianNumbers";
import {ToLocalDateString} from "@/utils/toLocalDate";

export default function page() {
    const {id} = useParams()
    const {data, isLoading} = UseGetProductById(id)

    const {product} = data || {}
    // console.log(product)
    if (isLoading) return <LoadingSpinner/>

    return <>
        <div className={'space-y-4'}>
            <h1 className={'mb-4 text-xl font-bold'}>عنوان محصول : {product.title}</h1>
            <p> توضیحات محصول : {product.description}</p>
            <p> برند: {product.brand} </p>
            <p>اسلاگ : {product.slug}</p>
            <p>موجودی : {toPersianNumbers(product.countInStock)}</p>
            <p>تخفیف : {toPersianNumbers(product.discount)}</p>
            <p>قیمت روی تخفیف : {toPersianNumbersWithComma(product.offPrice)}</p>
            <p>قیمت : {toPersianNumbersWithComma(product.price)}</p>
            <p>تاریخ ایجاد محصول : {ToLocalDateString(product.createdAt)}</p>
            <p>تاریخ بروزرسانی محصول : {ToLocalDateString(product.updatedAt)}</p>
            <p>برچسب های محصول : {product.tags.map((item, index) =>
                <span key={index}
                      className={'mx-2 bg-primary-900 text-white rounded-xl px-2 py-1'}>{item}</span>)}</p>
        </div>
    </>
}