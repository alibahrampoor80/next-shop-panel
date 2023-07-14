import {getProducts} from "@/services/productService";
import {getCategory} from "@/services/categoryService";
import Link from "next/link";

import queryString from "query-string";
import {ToLocalDateString} from "@/utils/toLocalDate";
import CategorySidebar from "./categorySidebar";
import AddToCart from "@/pages/(user)/products/[slug]/AddToCart";

export const dynamic = 'force-dynamic'
const Products = async ({searchParams}) => {
    // const {products} = await getProducts(queryString.stringify(searchParams))
    // const {categories} = await getCategory()
    const productsPromise = getProducts(queryString.stringify(searchParams))
    const categoriesPromise = getCategory()

    const [{products}, {categories}] = await Promise.all([productsPromise, categoriesPromise])


    return <>
        <h1 className={'text-xl font-bold mb-6'}>صفحه ی محصولات</h1>
        <div className="grid grid-cols-4">
            <CategorySidebar categories={categories}/>
            <div className="col-span-3">
                <div className=" grid grid-cols-3 gap-4">

                    {
                        products.map((product) => {
                            return (

                                <div className={'col-span-1 border-1 rounded-xl shadow-md p-4'} key={product._id}>
                                    <h2 className={'font-bold'}>{product.title}</h2>
                                    <div className="mb-4">
                                        <span>تاریخ ساختن :</span>
                                        <span className={'font-bold'}>{ToLocalDateString(product.createdAt)}</span>
                                    </div>
                                    <Link href={`/products/${product.slug}`}
                                          className={'text-primary-900 font-bold'}>مشاهده ی محصول</Link>
                                    <AddToCart product={product}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
}
export default Products