'use client'
import {useState} from "react";
import TextField from "@/common/TextField";
import Select from "react-select";

import {UseAddCategory} from "@/hooks/useCategories";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";

export default function page() {
    const router = useRouter()
    const categoryTypes = [
        {
            id: 1,
            label: "محصول",
            value: "product"
        },
        {
            id: 2,
            label: "پست",
            value: "post"
        },
        {
            id: 3,
            label: "تیکت",
            value: "ticket"
        },
        {
            id: 4,
            label: "نظرات",
            value: "comment"
        },
    ]
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
            <div className="max-w-sm mb-10">
                <form className={'space-y-4'} onSubmit={handelSubmitCategory}>
                    <TextField name={'title'}
                               label={'عنوان'}
                               value={category.title}
                               onChange={handelChange}/>

                    <TextField name={'englishTitle'}
                               label={'عنوان انگلیسی'}
                               value={category.englishTitle}
                               onChange={handelChange}/>

                    <TextField name={'description'}
                               label={'توضیحات'}
                               value={category.description}
                               onChange={handelChange}/>
                    <div>
                        <label htmlFor="type" className={'mb-2 block'}>
                            نوع
                        </label>
                        <Select instanceId={'type'}
                                onChange={setSelectedType}
                                options={categoryTypes}
                                defaultValue={selectedType}

                        />
                    </div>
                    <button className={'btn badge--primary w-full'}>تایید</button>
                </form>
            </div>
        </div>
    </>
}