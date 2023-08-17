'use client'
import {useState} from "react";
import TextField from "@/common/TextField";
import Select from "react-select";

import {UseAddCategory} from "@/hooks/useCategories";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import CategoryForm from "@/components/CategoryForm";

export default function page() {
    const router = useRouter()

    const [category, setCategory] = useState({
            title: "",
            englishTitle: "",
            description: ""
        }
    )
    const [selectedType, setSelectedType] = useState("")
    const handelChange = (event) => {
        setCategory({...category, [event.target.name]: event.target.value})
    }

    const {isLoading, mutateAsync} = UseAddCategory()


    const handelSubmitCategory = async (event) => {
        event.preventDefault()
        try {
            const {message} = await mutateAsync({...category, type: selectedType.value})
            toast.success(message)
            router.push('/admin/categories')

        } catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }
    return <>

        <div>
            <h1 className={'mb-6 font-bold text-xl'}>افزودن دسته بندی جدید</h1>
            <CategoryForm isLoading={isLoading}
                          category={category}
                          handelChange={handelChange}
                          setSelectedType={setSelectedType}
                          handelSubmitCategory={handelSubmitCategory}
                          selectedType={selectedType}
            />

        </div>
    </>
}