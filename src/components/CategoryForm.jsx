import React from 'react';
import TextField from "@/common/TextField";
import Select from "react-select";
import LoadingSpinner from "@/components/LoadingSpinner";
export const categoryTypes = [
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
const CategoryForm = ({handelSubmitCategory, category, handelChange, setSelectedType, selectedType, isLoading}) => {

    return (
        <div className="max-w-sm mb-10">
            <form className={'space-y-4'} onSubmit={handelSubmitCategory}>
                <TextField name={'title'}
                           label={'عنوان'}
                           value={category.title || ""}
                           onChange={handelChange}/>

                <TextField name={'englishTitle'}
                           label={'عنوان انگلیسی'}
                           value={category.englishTitle || ""}
                           onChange={handelChange}/>

                <TextField name={'description'}
                           label={'توضیحات'}
                           value={category.description || ""}
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
                <div className="mt-4">
                    {
                        isLoading ? <LoadingSpinner/> : <button className={'btn badge--primary w-full'}>تایید</button>
                    }
                </div>
            </form>
        </div>
    );
};

export default CategoryForm;