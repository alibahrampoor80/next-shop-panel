'use client'
import {useParams, useRouter} from "next/navigation";
import {UseGetProductById, UseUpdateProduct} from "@/hooks/useProducts";
import ProductForm from "@/components/ProductForm";
import {UseGetCategories} from "@/hooks/useCategories";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";

import Link from "next/link";
import {HiArrowLeft} from "react-icons/hi";
import LoadingSpinner from "@/components/LoadingSpinner";
import {includesObject} from "@/utils/objectUtils";

const includesProductKey = [
    "title",
    "description",
    "slug",
    "brand",
    "price",
    "offPrice",
    "discount",
    "countInStock",
    "imageLink"
]

export default function page() {
    const router = useRouter()
    const {id} = useParams()
    const {data, isLoading: isLoadingProduct} = UseGetProductById(id)
    const {product} = data || {}
    const {data: categoryData} = UseGetCategories()
    const {categories} = categoryData || {}


    const [formData, setFormData] = useState({})
    const [tags, setTags] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("")

    const {isLoading, mutateAsync} =
        UseUpdateProduct()

    const handelChangeFormData = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handelSubmit = async (event) => {
        event.preventDefault()
        try {
            const {message} = await mutateAsync({
                    productId: product._id,
                    data: {
                        ...formData,
                        tags,
                        category: selectedCategory._id
                    }
                }
            )
            await router.push('/admin/products')
            toast.success(message)

        } catch (err) {

            toast.error(err?.response?.data?.message)
        }
    }

    useEffect(() => {
        if (product) {
            setFormData(includesObject(product, includesProductKey))
            setTags(product.tags)
            setSelectedCategory(product.category)
        }
    }, [data])


    if (isLoadingProduct) return <LoadingSpinner/>

    return <>
        <div className={' mb-10'}>
            <div className="mb-5 flex items-center justify-between">
                <h1 className={'mb-4 font-bold text-xl'}>ویرایش محصول</h1>
                <Link
                    href="/admin/products"
                    className="font-bold text-primary-900 flex items-center gap-x-2"
                >
                    <span>بازگشت</span> <HiArrowLeft className="w-6 h-6"/>
                </Link>
            </div>


            <ProductForm onSubmit={handelSubmit}
                         categories={categories}
                         setSelectedCategory={setSelectedCategory}
                         tags={tags}
                         setTags={setTags}
                         isLoading={isLoading}
                         productData={formData}
                         productDataOnChange={handelChangeFormData}
                         selectedCategory={product.category}
            />
        </div>

    </>
}