'use client'
import React from "react";
import {ThreeDots} from "react-loader-spinner";

export default function LoadingSpinner({width = "75", height = "40"}) {
    return (
        <ThreeDots
            visible={true}
            height={height}
            width={width}
            radius="9"
            color="rgb(var(--color-primary-900))"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
                display: "flex",
                justifyContent:"center"
            }}
            wrapperClassName=""
        />
    );
}