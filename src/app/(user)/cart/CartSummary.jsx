'use client'

import {toPersianNumbers, toPersianNumbersWithComma} from "@/utils/toPersianNumbers";
import {useMutation, useQueryClient} from "react-query";
import {createPayment} from "@/services/paymentService";
import toast from "react-hot-toast";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function CartSummary({payDetail}) {
    console.log(payDetail)
    const {totalGrossPrice, totalOffAmount, totalPrice} = payDetail

    const {data, isLoading, mutateAsync} =
        useMutation({mutationFn: createPayment})

    const queryClient = useQueryClient()

    const createPaymentHandler = async () => {
        try {
            const {message} = await mutateAsync()
            toast.success(message)
            queryClient.invalidateQueries({queryKey: ['get-user']})
        } catch (err) {

        }
    }

    return <>
        <div className={'border p-2 rounded-xl shadow-xl '}>
            <p className={'mb-4 font-bold'}> اطلاعات پرداخت </p>
            <div className={'mb-4 flex items-center justify-between'}>
                <span>جمع کل : </span>
                <span>{toPersianNumbersWithComma(totalGrossPrice)}</span>
            </div>
            <div className={'mb-4 flex items-center justify-between'}>
                <span>تخفیف : </span>
                <span>{toPersianNumbersWithComma(totalOffAmount)}</span>
            </div>
            <div className={'mb-4 flex items-center justify-between font-bold'}>
                <span>مبلغ قابل پرداخت : </span>
                <span className={''}>{toPersianNumbersWithComma(totalPrice)}</span>
            </div>

            <div>
                {
                    isLoading ? <LoadingSpinner/> :
                        <button className={'btn btn--primary mt-3 w-full'} onClick={createPaymentHandler}>ثبت
                            سفارش</button>
                }
            </div>


        </div>
    </>
}