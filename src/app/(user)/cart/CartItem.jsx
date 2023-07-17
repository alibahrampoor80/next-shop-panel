'use client'


import {HiMinus, HiOutlineTrash, HiPlus} from "react-icons/hi";
import {toPersianNumbers, toPersianNumbersWithComma} from "@/utils/toPersianNumbers";

export default function CartItem({cartItem}) {
    return <>
        <div className="border rounded-xl p-4 flex justify-between">
            <span className="flex-1 font-bold">{cartItem.title}</span>
            <div className="flex items-center justify-between  gap-x-8 flex-1">
                <div>
                    <div>
                        قیمت :{" "}
                        <span
                            className={`${
                                cartItem.discount ? "line-through text-gray-500" : "font-bold"
                            }`}
                        >
              {toPersianNumbersWithComma(cartItem.price)}
            </span>
                    </div>
                    {!!cartItem.discount && (
                        <div className="flex items-center gap-x-2 mt-2">
                            <p className="font-bold">
                                {" "}
                                {toPersianNumbersWithComma(cartItem.offPrice)}
                            </p>
                            <div className="bg-rose-500 px-2 py-0.5 rounded-xl text-white text-sm">
                                {toPersianNumbers(cartItem.discount)} %
                            </div>
                        </div>
                    )}
                </div>

                <span className="border-r-2 pr-2">
          تعداد : {toPersianNumbers(cartItem.quantity)}
        </span>
                <div className="flex gap-x-3">
                    <button
                        className="bg-primary-900 text-white rounded p-1"
                    >
                        <HiPlus className="w-4 h-4"/>
                    </button>
                    <button className="border rounded p-1">
                        <HiOutlineTrash className=" text-rose-500 w-6 h-6" />
                    </button>
                    <button className="border rounded p-1">
                        <HiMinus className="w-4 h-4"/>
                    </button>

                </div>
            </div>
        </div>


    </>
}