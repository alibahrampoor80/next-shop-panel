'use client'
import Link from "next/link";

import {useGetUser} from "@/hooks/useAuth";
import {logout} from "@/services/authServices";
import toast from "react-hot-toast";

const Header = () => {
    const {data, error, isLoading} = useGetUser()

    const {cart, user} = data || {}


    return <>
        <header
            className={`shadow-md mb-10 sticky top-0 bg-white transition-all duration-200 ${isLoading ? 'blur-sm opacity-100' : "opacity-100 blur-0"}`}>
            <nav>
                <ul className={'flex items-center justify-around py-2 container xl:max-w-screen-xl'}>
                    <li>
                        <Link href={'/'}>
                            خانه
                        </Link>
                    </li>
                    <li>
                        <Link href={'/products'}>
                            محصولات
                        </Link>
                    </li>
                    <li>
                        <Link href={'/admin'}>
                            مدیریت
                        </Link>
                    </li>
                    <li>
                        <Link href={'/profile'}>
                            پروفایل
                        </Link>
                    </li>

                    <li>
                        <Link href={'/cart'}>
                            سبد خرید - {" "}
                            {cart ? cart.payDetail.productIds.length : 0}
                        </Link>
                    </li>
                    {user ? <span>{user.name}</span> :
                        (
                            <li>
                                <Link href={'/auth'}>
                                    ورود
                                </Link>
                            </li>
                        )
                    }

                </ul>
            </nav>
        </header>
    </>
}
export default Header