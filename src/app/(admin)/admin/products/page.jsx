'use client'
import {UseGetProducts} from "@/hooks/useProducts";
import LoadingSpinner from "@/components/LoadingSpinner";
import ProductListTable from "@/pages/(admin)/admin/products/ProductListTable";
import {HiPlusCircle} from "react-icons/hi";
import Link from "next/link";

export default function page() {

    const {isLoading, data} = UseGetProducts()
    const {products} = data || {}


    if (isLoading) return <LoadingSpinner/>

    return <>
    <div className="mb-5 flex items-center justify-between">
        <h1 className="text-xl font-bold mb-5">محصولات</h1>
        <Link
            href="/admin/products/add"
            className="font-bold text-primary-900 flex items-center gap-x-2"
        >
            <HiPlusCircle className="w-6 h-6"/> <span>اضافه کردن محصول</span>
        </Link>
    </div>
    <ProductListTable products={products}/>

</>
}