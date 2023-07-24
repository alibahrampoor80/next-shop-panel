'use client'
import Link from "next/link";
import {logout} from "@/services/authServices";

const AdminSideBar = () => {
    const logoutHandler = async () => {
        await logout()
        document.location.href = '/'
    }

    return <>
        <div>
            <ul className={'flex flex-col space-y-8 w-full p-4'}>
                <li className={'w-full'}>
                    <Link href={'/'} className={'w-full block'}>صفحه ی اصلی</Link>
                </li>
                <li className={'w-full'}>
                    <Link href={'/admin'} className={'w-full block'}>داشبورد</Link>
                </li>
                <li className={'w-full'}>
                    <Link href={'/admin/users'} className={'w-full block'}>کاربران</Link>
                </li>
                <li className={'w-full'}>
                    <Link href={'/admin/products'} className={'w-full block'}>محصولات</Link>
                </li>
                <li className={'w-full'}>
                    <Link href={'/admin/categories'} className={'w-full block'}>دسته بندی ها </Link>
                </li>

                <li className={'w-full'}>
                    <Link href={'/admin/payments'} className={'w-full block'}>سفارشات </Link>
                </li>

                <li className={'w-full'}>
                    <Link href={'/admin/coupons'} className={'w-full block'}>کد تخفیف </Link>
                </li>


                <li>
                    <button onClick={logoutHandler}>
                        خروج
                    </button>
                </li>
            </ul>
        </div>
    </>
}
export default AdminSideBar