import {userPaymentTHeads} from "@/constants/tableHeads";
import {toPersianNumbersWithComma} from "@/utils/toPersianNumbers";
import {ToLocalDateString} from "@/utils/toLocalDate";

export default function PaymentTable({payments}) {

    return <>
        <div className="shadow-sm overflow-auto my-8">
            <table className={'border-collapse table-auto w-full min-w-[800px] text-sm '}>
                <thead>
                <tr>
                    {
                        userPaymentTHeads.map((item) => {
                            return <th key={item.key} className={'whitespace-nowrap table__th'}>{item.label}</th>
                        })
                    }
                </tr>
                </thead>

                <tbody>
                {
                    payments.map((payment, index) => {
                        return <tr key={payment._id}>
                            <td className={'table__td'}>{index}</td>
                            <td className={'table__td'}>{payment.invoiceNumber}</td>
                            <td className={'table__td max-w-[280px] whitespace-nowrap truncate'}>{payment.description}</td>
                            <td className={'table__td'}>
                                <span className={'whitespace-nowrap flex flex-col gap-y-2'}>
                                    {payment.cart.productDetail.map((product) => {
                                        return (<div key={product._id}
                                                     className={'px-2 py-0.5 rounded-xl bg-secondary-600 text-white text-center'}>{product.title}</div>)
                                    })}
                                </span>
                            </td>
                            <td className={'table__td font-bold'}>{toPersianNumbersWithComma(payment.amount)}</td>
                            <td className={'table__td'}>{ToLocalDateString(payment.createdAt)}</td>
                            <td className={'table__td'}>{payment.status === "COMPLETED" ?
                                <span className={'badge badge--success px-2 py-0.5 rounded-xl text-white '}>موفق</span> :
                                <span
                                    className={'badge badge--error text-white px-2 py-0.5 rounded-xl'}>ناموفق</span>}</td>

                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    </>
}