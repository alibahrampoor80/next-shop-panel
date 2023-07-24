'use client'
import {userListTableHeads} from "@/constants/tableHeads";
import {toPersianNumbersWithComma} from "@/utils/toPersianNumbers";
import {ToLocalDateString} from "@/utils/toLocalDate";
import Link from "next/link";
import {HiCheck} from "react-icons/hi";


export default function UsersTable({users}) {

    return <>
        <div className="shadow-sm overflow-auto my-8">
            <table className={'border-collapse table-auto w-full min-w-[800px] text-sm '}>
                <thead>
                <tr>
                    {
                        userListTableHeads.map((item, index) => {
                            return <th key={index} className={'whitespace-nowrap table__th'}>{item.label}</th>
                        })
                    }
                </tr>
                </thead>

                <tbody>
                {
                    users.map((user, index) => {
                        return <tr key={index}>
                            <td className={'table__td'}>{index}</td>
                            <td className={'table__td whitespace-nowrap truncate'}>{user.name}</td>
                            <td className={'table__td '}>{user.email}</td>
                            <td className={'table__td '}>

                                <div className="flex whitespace-nowrap gap-x-2 items-center">
                                    {user.phoneNumber}
                                    {
                                        user.isVerifiedPhoneNumber &&
                                        <HiCheck className={'w-6 h-6 text-green-600'}/>
                                    }
                                </div>
                            </td>
                            <td className={'table__td'}>
                                <span className={'whitespace-nowrap flex flex-col gap-y-2'}>
                                    {
                                        user.Products.map((product, index) => {
                                            return (
                                                <div key={index}
                                                         className={'px-2 py-0.5 rounded-xl bg-secondary-600 text-white text-center'}> {index} {product.title}</div>
                                            )
                                        })}
                                </span>
                            </td>
                            <td className={'table__td'}>{ToLocalDateString(user.createdAt)}</td>

                            <td className={'table__td font-bold'}>
                                <Link href={`/admin/users/${user._id}`}>مشاهده ی جزئیات</Link>
                            </td>


                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    </>
}