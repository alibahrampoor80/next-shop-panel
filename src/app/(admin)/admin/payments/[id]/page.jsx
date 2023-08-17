'use client'
import React from 'react';
import {useParams} from "next/navigation";

const Page = () => {
    const {id} = useParams()
    console.log(id)
    return (
        <div>

        </div>
    );
};

export default Page;