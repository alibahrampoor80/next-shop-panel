"use client";



import PaymentListTable from "./PaymentListTable";
import LoadingSpinner from "@/components/LoadingSpinner";
import {useGetPayments} from "@/hooks/usePayments";

function page() {
    const { isLoading, data } = useGetPayments();
    const { payments } = data || {};

    if (isLoading) return <LoadingSpinner />;
    return (
        <div>
            <div className="mb-5 flex items-center justify-between">
                <h1 className="text-xl font-bold mb-5">سفارشات</h1>
            </div>
            <PaymentListTable payments={payments} />
        </div>
    );
}
export default page;
