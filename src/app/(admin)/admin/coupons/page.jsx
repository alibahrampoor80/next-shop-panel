'use client'
import React from 'react';
import Link from "next/link";
import {HiPlusCircle} from "react-icons/hi";
import LoadingSpinner from "@/components/LoadingSpinner";
import {useGetCoupons} from "@/hooks/useCoupons";
import CouponListTable from "@/pages/(admin)/admin/coupons/CouponListTable";

const Page = () => {
    const {data, isLoading} = useGetCoupons()
    const {coupons} = data || {}

    if (isLoading) return <LoadingSpinner/>
    return (
        <div>
            <div className="mb-5 flex items-center justify-between">
                <h1 className={'text-xl font-bold mb-5'}>کد های تخفیف</h1>
                <Link href={`/admin/coupons/add`} className={'font-bold text-primary-900 flex items-center gap-x-2'}>
                    <HiPlusCircle className={'w-6 h-6'}/>
                    <span>اضافه کردن کد تخفیف</span></Link>
            </div>
            <CouponListTable coupons={coupons}/>
        </div>
    );
};

export default Page;