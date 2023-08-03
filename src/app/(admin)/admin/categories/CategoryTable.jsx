import {categoryListTableTHeads} from "@/constants/tableHeads";
import Link from "next/link";
import {RiEdit2Line} from "react-icons/all";
import {HiEye, HiTrash,} from "react-icons/hi";

export default function CategoryTable({categories}) {

    return <>
        <div className="shadow-sm overflow-auto my-8">
            <table className={'border-collapse table-auto w-full  text-sm'}>
                <thead>
                <tr>
                    {
                        categoryListTableTHeads.map((item, index) => {
                            return (
                                <th className={'whitespace-nowrap table__th'} key={index}>
                                    {item.label}
                                </th>
                            )
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    categories.map((category, index) => {
                        return (
                            <tr key={index}>
                                <td className={'table__td whitespace-nowrap font-bold'}>
                                    {index}
                                </td>
                                <td className={'table__td whitespace-nowrap font-bold'}>
                                    {category.title}
                                </td>
                                <td className={'table__td whitespace-nowrap font-bold'}>
                                    {category.description}
                                </td>
                                <td className={'table__td whitespace-nowrap font-bold'}>
                                    {category.englishTitle}
                                </td>
                                <td className={'table__td whitespace-nowrap font-bold'}>
                                   <span className={'badge badge--secondary'}>
                                        {category.type}
                                   </span>
                                </td>
                                <td className={'table__td whitespace-nowrap font-bold text-xl'}>
                                    <div className="flex items-center gap-x-4">
                                        <Link href={`/admin/categories/${category._id}`}>
                                            <HiEye className={'text-primary-900 h-6 h-6'}/>
                                        </Link>
                                        {/*onClick={() => removeCategoryHandler(category._id)}*/}
                                        <button>
                                            <HiTrash className="text-rose-600 w-6 h-6"/>
                                        </button>
                                        <Link href={`/admin/categories/edit/${category._id}`}>
                                            <RiEdit2Line className="w-6 h-6 text-secondary-600"/>
                                        </Link>
                                    </div>

                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </>
}