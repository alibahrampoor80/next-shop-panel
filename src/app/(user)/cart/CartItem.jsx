'use client'


import {HiMinus, HiOutlineTrash, HiPlus} from "react-icons/hi";

export default function CartItem({cartItem}) {
    return <>
        <div className={'border rounded-xl p-4 flex justify-between'}>
            <p className={'flex-1 font-bold'}>{cartItem.title}</p>
            <div className="flex items-center justify-between gap-x-8">
                <span>تعداد : {cartItem.quantity}</span>
                <div className="flex gap-x-3">
                    <button className={'bg-primary-900 text-white rounded p-1'}>
                        <HiPlus className={'w-4 h-4'}/>
                    </button>
                    <button className={' rounded p-1'}>
                        <HiOutlineTrash className={'text-rose-500 w-4 h-4'}/>
                    </button>
                    <button className={'bg-primary-900 text-white rounded p-1'}>
                        <HiMinus className={' w-4 h-4'}/>
                    </button>
                </div>
            </div>
        </div>


    </>
}