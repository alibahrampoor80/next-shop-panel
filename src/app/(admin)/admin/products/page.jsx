'use client'
import {UseGetProducts} from "@/hooks/useProducts";
import LoadingSpinner from "@/components/LoadingSpinner";
import ProductListTable from "@/pages/(admin)/admin/products/ProductListTable";

export default function page() {

    const {isLoading, data} = UseGetProducts()
    const {products} = data || {}


    if (isLoading) return <LoadingSpinner/>

    return <>
        <div>
            <h1 className={'text-xl font-bold mb-5'}>محصولات</h1>

            <ProductListTable products={products}/>

        </div>
    </>
}