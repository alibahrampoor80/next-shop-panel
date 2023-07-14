'use client'
import CheckBox from "@/common/CheckBox";
import {useCallback, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";



export default function ProductsFilter({categories}) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const params = new URLSearchParams(searchParams)
    const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category')?.split(',') || [])

    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
        return params.toString()
    }, [searchParams])

    const categoryHandler = (event) => {
        const value = event.target.value
        if (selectedCategory.includes(value)) {
            const categories = selectedCategory.filter((c) => c !== value)
            setSelectedCategory(categories)
            router.push(pathname + "?" + createQueryString('category', categories))
        } else {
            setSelectedCategory([...selectedCategory, value])
            router.push(pathname + "?" + createQueryString('category', [...selectedCategory,value]))
        }
    }
    return <>
        <p className={'font-bold mb-4'}>دسته بندی ها</p>
        <ul className=" space-y-4">
            {categories.map(category => {
                return (
                    <CheckBox key={category._id} id={category._id} name={'product-type'} label={category.title}
                              checked={selectedCategory.includes(category.englishTitle)}
                              onChange={categoryHandler}
                              value={category.englishTitle}/>

                )
            })}
        </ul>
    </>
}