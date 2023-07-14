'use client'
import RadioInput from "@/common/RadioInput";
import {useCallback, useEffect, useState} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const sortOption = [
    {
        id: 1,
        value: "latest",
        label: "جدیدترین"
    },
    {
        id: 2,
        value: "earliest",
        label: "قدیمی ترین"
    },
    {
        id: 3,
        value: "popular",
        label: "محبوب ترین"
    },
]

export default function ProductSort() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [sort, setSort] = useState("")


    const createQueryString = useCallback((name, value) => {
        const params = new URLSearchParams(searchParams)
        params.set(name, value)
        return params.toString()
    }, [searchParams])

    const sortHandler = (e) => {
        setSort(e.target.value)
        const value = e.target.value
        router.push(pathname + "?" + createQueryString("sort", value))
    }
    useEffect(() => {
        setSort(searchParams.get('sort') || "")
    }, [searchParams])
    return <>
        <p className={'font-bold mt-4'}>مرتب سازی </p>
        <div className={'space-y-3 mt-4'}>
            {
                sortOption.map(item => {
                    return <>
                        <RadioInput key={item.id}
                                    name={'product-sort'}
                                    label={item.label}
                                    value={item.value}
                                    id={item.id}
                                    checked={sort === item.value}
                                    onChange={sortHandler}/>
                    </>
                })
            }
        </div>
    </>
}