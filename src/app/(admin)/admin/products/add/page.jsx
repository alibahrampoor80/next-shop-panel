'use client'

import {useState} from "react";

import {UseGetCategories} from "@/hooks/useCategories";

import {UseAddProducts} from "@/hooks/useProducts";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

import Link from "next/link";
import {HiArrowLeft} from "react-icons/hi";

import ProductForm from "@/components/ProductForm";

export default function page() {
    const router = useRouter()
    const {mutateAsync, isLoading,} = UseAddProducts()

    const {data,} = UseGetCategories()
    const {categories} = data || {}

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        slug: "",
        brand: "",
        price: "",
        discount: "",
        offPrice: "",
        countInStock: "",
        imageLink: "",

    })
    const [tags, setTags] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")



    const handelChangeFormData = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }
    const handelSubmit = async (e) => {
        e.preventDefault()
        try {
            const {message} = await mutateAsync(
                {
                    ...formData,
                    tags,
                    category: selectedCategory._id
                }
            )
            toast.success(message)
            router.push('/admin/products')
        } catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }
    // console.log(selectedCategory._id)
    return <>
        <div className="mb-5 flex items-center justify-between">
            <h1 className={'mb-4 font-bold text-xl'}>اضافه کردن محصول</h1>
            <Link
                href="/admin/products"
                className="font-bold text-primary-900 flex items-center gap-x-2"
            >
                <span>بازگشت</span> <HiArrowLeft className="w-6 h-6"/>
            </Link>
        </div>
        <div className="w-full  mb-10">
            <ProductForm onSubmit={handelSubmit}
                         categories={categories}
                         setSelectedCategory={setSelectedCategory}
                         tags={tags}
                         setTags={setTags}
                         isLoading={isLoading}
                         productData={formData}
                         productDataOnChange={handelChangeFormData}
            />
        </div>

    </>
}