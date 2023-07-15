'use client'
import React from "react";
import {ThreeDots} from "react-loader-spinner";

export default function LoadingSpinner({width = "75", height = "40"}) {
    return (
        <ThreeDots
            height={height}
            width={width}
            radius="9"
            color="#4a6dff"
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperClass={'flex justify-center'}
        />
    );
}