'use client'

import TextField from "@/common/TextField";
import {useState} from "react";
import {TagsInput} from "react-tag-input-component";
import {UseGetCategories} from "@/hooks/useCategories";
import Select from "react-select";
import {UseAddProducts} from "@/hooks/useProducts";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import LoadingSpinner from "@/components/LoadingSpinner";

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

    const productsFormData = [
        {
            id: 1,
            label: "عنوان",
            name: "title"
        },
        {
            id: 2,
            label: "توضیحات",
            name: "description"
        },
        {
            id: 3,
            label: "اسلاگ",
            name: "slug"
        },
        {
            id: 4,
            label: "برند",
            name: "brand"
        },
        {
            id: 5,
            label: "قیمت",
            name: "price"
        },
        {
            id: 6,
            label: "تخفیف",
            name: "discount"
        },
        {
            id: 7,
            label: "قیمت روی تخفیف",
            name: "offPrice"
        },
        {
            id: 8,
            label: "موجودی",
            name: "countInStock"
        },
        {
            id: 9,
            label: "لینک عکس محصول",
            name: "imageLink"
        },
    ]

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
    console.log(selectedCategory._id)
    return <>
        <div className="w-full  mb-10">
            <h1 className={'mb-4 font-bold text-xl'}>اضافه کردن محصول</h1>
            <form className={'space-y-4  mt-5'} onSubmit={handelSubmit}>
                <div className={'grid grid-cols-4 gap-5'}>
                    {
                        productsFormData.map(item => {
                            return <TextField key={item.id}
                                              label={item.label}
                                              name={item.name}
                                              value={formData[item.name]}
                                              onChange={handelChangeFormData}
                            />
                        })
                    }
                    <div>
                        <label htmlFor="tags">تگ محصولات</label>
                        <TagsInput
                            id={'tags'}
                            // placeHolder={'تگ'}
                            value={tags}
                            onChange={setTags}
                            name={'tags'}
                        />
                    </div>
                    <div>
                        <label htmlFor="category" className={'mb-2'}>دسته بندی</label>
                        <Select
                            instanceId={'category'}
                            id={'category'}
                            onChange={setSelectedCategory}
                            options={categories}
                            getOptionLabel={(option) => option.title}
                            getOptionValue={(option) => option._id}
                        />
                    </div>
                </div>
                {
                    isLoading ? <LoadingSpinner/> :
                        <button className={'btn btn--primary mx-auto flex justify-center mt-4'} type={'submit'}>اضافه کردن محصول</button>
                }
            </form>
        </div>
    </>
}