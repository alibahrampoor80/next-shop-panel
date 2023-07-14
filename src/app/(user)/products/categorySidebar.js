'use client'
import ProductsFilter from "./ProductsFilter";
import ProductSort from "./ProductSort";


const CategorySidebar = ({categories}) => {

    return <>
        <div className="col-span-1">
            <ProductsFilter categories={categories} />
            <ProductSort/>
        </div>
    </>
}
export default CategorySidebar