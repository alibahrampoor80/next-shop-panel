'use client'
import LoadingSpinner from "@/components/LoadingSpinner";
import {UseGetCategories} from "@/hooks/useCategories";
import Link from "next/link";
import {HiPlusCircle} from "react-icons/hi";
import CategoryTable from "@/pages/(admin)/admin/categories/CategoryTable";

export default function page() {
    const {data, isLoading} = UseGetCategories()
    const {categories} = data || {}

    if (isLoading) return <LoadingSpinner/>

    return <>
        <div className={'mb-5 flex items-center justify-between'}>
            <h1 className={'text-xl font-bold mb-5'}>دسته بندی</h1>
            <Link href={`/admin/categories/add`}
                  className={'font-bold text-primary-900 flex items-center gap-x-2'}>
                <HiPlusCircle className={'w-6 h-6'}/>
                اضافه کردن دسته بندی</Link>

        </div>
            <CategoryTable categories={categories}/>

    </>
}