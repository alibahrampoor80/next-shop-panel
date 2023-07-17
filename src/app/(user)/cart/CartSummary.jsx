'use client'

export default function CartSummary({payDetail}) {
    console.log(payDetail)
    const {totalGrossPrice, totalOffAmount, totalPrice} = payDetail


    return <>
        <div className={'border p-2 rounded-xl shadow-xl '}>
            <p className={'mb-4 font-bold'}> اطلاعات پرداخت </p>
            <div className={'mb-4 flex items-center justify-between'}>
                <span>جمع کل : </span>
                <span>{totalGrossPrice}</span>
            </div>
            <div className={'mb-4 flex items-center justify-between'}>
                <span>تخفیف : </span>
                <span>{totalOffAmount}</span>
            </div>
            <div className={'mb-4 flex items-center justify-between font-bold'}>
                <span>مبلغ قابل پرداخت : </span>
                <span className={''}>{totalPrice}</span>
            </div>
            <button className={'btn btn--primary mt-3 w-full'}>ثبت سفارش </button>
        </div>
    </>
}