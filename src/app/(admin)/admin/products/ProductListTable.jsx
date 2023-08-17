import {productListTableTHeads} from "@/constants/tableHeads";

import Link from "next/link";
import {toPersianNumbers, toPersianNumbersWithComma} from "@/utils/toPersianNumbers";
import {HiEye, HiPencil, HiTrash} from "react-icons/hi";
import {UseRemoveProduct} from "@/hooks/useProducts";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {useQueryClient} from "react-query";

export default function ProductListTable({products}) {
    const {isLoading, mutateAsync} = UseRemoveProduct()
    const queryClient = useQueryClient()
    const router = useRouter()
    const removeProductHandler = async (id) => {
        try {
            const {message} = await mutateAsync(id)
            toast.success(message)
            await queryClient.invalidateQueries({queryKey: ['get-products']})
        } catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }

    return <>
        <div className="shadow-sm overflow-auto my-8">
            <table className={'border-collapse table-auto w-full min-w-[800px] text-sm '}>
                <thead>
                <tr>
                    {
                        productListTableTHeads.map((item, index) => {
                            return <th key={index} className={'whitespace-nowrap table__th'}>{item.label}</th>
                        })
                    }
                </tr>
                </thead>

                <tbody>
                {
                    products.map((product, index) => {
                        return <tr key={index}>
                            <td className={'table__td'}>{index}</td>
                            <td className={'table__td whitespace-nowrap font-bold'}>{product.title}</td>
                            <td className={'table__td '}>{product.category.title}</td>
                            <td className={'table__td '}>
                                {toPersianNumbersWithComma(product.price)}
                            </td>
                            <td className={'table__td '}>
                                {toPersianNumbers(product.discount)}
                            </td>
                            <td className={'table__td '}>
                                {toPersianNumbersWithComma(product.offPrice)}
                            </td>
                            <td className={'table__td '}>
                                {toPersianNumbers(product.countInStock)}
                            </td>
                            <td className={'table__td '}>
                                <div className={'flex items-center gap-x-4'}>
                                    <Link href={`/admin/products/${product._id}`}
                                          className={'font-bold'}>
                                        <HiEye className={'w-6 h-6 text-primary-900 '}/>
                                    </Link>
                                    <button onClick={() => removeProductHandler(product._id)}>
                                        <HiTrash className={'w-6 h-6 text-rose-600 '}/>
                                    </button>

                                    <Link href={`/admin/products/edit/${product._id}`}
                                          className={'font-bold'}>
                                        <HiPencil className={'w-6 h-6 text-secondary-600 '}/>
                                    </Link>


                                </div>
                            </td>


                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    </>
}