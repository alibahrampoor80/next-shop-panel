import {
    addNewCoupon,
    deleteCoupon,
    getAllCoupon,
    getOneCoupon,
    updateCoupon,
} from "@/services/couponService";
import {useMutation, useQuery} from "react-query";

export const useGetCoupons = () =>
    useQuery({
        queryKey: ["get-coupons"],
        queryFn: getAllCoupon,
        retry: false,
        refetchOnWindowFocus: true,
    });


export const useGetOneCoupons = (id) =>
    useQuery({
        queryKey: ["get-coupon", id],
        queryFn: () => getOneCoupon(id),
        retry: false,
        refetchOnWindowFocus: true,
    });


export const useGetOneCoupon = (id) =>
    useQuery({
        queryKey: ["get-coupon", id],
        queryFn: () => getOneCoupon(id),
        retry: false,
        refetchOnWindowFocus: true,
    });

export const useAddNewCoupon = () => useMutation({mutationFn: addNewCoupon});

export const useUpdateCoupon = () => useMutation({mutationFn: updateCoupon});

export const useRemoveCoupon = () => useMutation({mutationFn: deleteCoupon});
