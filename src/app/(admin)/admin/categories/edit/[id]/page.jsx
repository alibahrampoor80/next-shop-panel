'use client'


import {useParams, useRouter} from "next/navigation";
import {UseGetCategoryById, UseUpdateCategory} from "@/hooks/useCategories";
import LoadingSpinner from "@/components/LoadingSpinner";
import CategoryForm, {categoryTypes} from "@/components/CategoryForm";
import {useEffect, useState} from "react";
import {includesObject} from "@/utils/objectUtils";
import toast from "react-hot-toast";
import {useQueryClient} from "react-query";

const includesCategoryObject = ["title", "englishTitle", "description"]
export default function page() {

    const { id } = useParams();
    const { data, isLoading: isLoadingCategory } = UseGetCategoryById(id);
    const { category } = data || {};
    const [formData, setFormData] = useState({});
    const [selectedType, setSelectedType] = useState("");
    const { isLoading, mutateAsync } = UseUpdateCategory();
    const router = useRouter();

    useEffect(() => {
        if (category) {
            setSelectedType(categoryTypes.find((c) => c.value === category.type));
            setFormData(includesObject(category, includesCategoryObject));
        }
    }, [data]);

    const handelChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handelSubmitCategory = async (e) => {
        e.preventDefault();
        try {
            const { message } = await mutateAsync({
                data: {
                    ...formData,
                    type: selectedType.value,
                },
                id: category._id,
            });
            toast.success(message);
            router.push("/admin/categories");
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    if (isLoadingCategory) return <LoadingSpinner/>
    return <>
        <div>
            <h1 className={'mb-6 font-bold text-xl'}>ویرایش دسته بندی</h1>
            <CategoryForm isLoading={isLoading}
                          category={formData}
                          handelChange={handelChange}
                          handelSubmitCategory={handelSubmitCategory}
                          selectedType={categoryTypes.find((c) => c.value === category.type)}
                          setSelectedType={setSelectedType}
            />

        </div>
    </>
}