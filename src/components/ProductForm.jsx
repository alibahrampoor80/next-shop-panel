import TextField from "@/common/TextField";
import {TagsInput} from "react-tag-input-component";
import Select from "react-select";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function ProductForm(
    {
        onSubmit,
        tags,
        setTags,
        productData,
        productDataOnChange,
        setSelectedCategory,
        categories,
        isLoading,
        selectedCategory = ""
    }) {

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

    return <>
        <form className={'space-y-4  mt-5'} onSubmit={onSubmit}>
            <div className={'grid grid-cols-4 gap-5'}>
                {
                    productsFormData.map(item => {
                        return <TextField key={item.id}
                                          label={item.label}
                                          name={item.name}
                                          value={productData[item.name] ?? ""}
                                          onChange={productDataOnChange}
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
                        defaultValue={selectedCategory}
                    />
                </div>
            </div>
            {
                isLoading ? <LoadingSpinner/> :
                    <button className={'btn btn--primary mx-auto flex justify-center mt-4'}
                            type={'submit'}>تایید</button>
            }
        </form>
    </>
}