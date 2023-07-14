'use client'

import {useGetUser} from "@/hooks/useAuth";
import LoadingSpinner from "@/components/LoadingSpinner";
import TextField from "@/common/TextField";
import {includesObject} from "@/utils/objectUtils";
import {useEffect, useState} from "react";
import {useMutation, useQueryClient} from "react-query";
import {updateProfile} from "@/services/authServices";
import toast from "react-hot-toast";

const Me = () => {
    const [formData, setFormData] = useState({})
    const {data, isLoading} = useGetUser()
    const {user} = data || {}

    const includesKey = ['name', 'email', 'phoneNumber', 'biography']

    const QueryClient = useQueryClient()

    useEffect(() => {
        if (user) setFormData(includesObject(user, includesKey))
    }, [user])

    const {isLoading: isUpdating, mutateAsync} =
        useMutation({mutationFn: updateProfile})

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const {message} = await mutateAsync(formData)
            QueryClient.invalidateQueries({queryKey:['get-user']})
            toast.success(message)
        } catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }

    if (isLoading) return <LoadingSpinner/>
    return <>
        <div className="max-w-sm">
            <h1>اطلاعات کاربری</h1>
            <form onSubmit={submitHandler} className={'space-y-5'}>
                {
                    Object.keys(includesObject(user, includesKey)).map(key => {
                        return <TextField key={key}
                                          label={key}
                                          name={key}
                                          value={formData[key] || ""}
                                          onChange={(e) => setFormData({
                                              ...formData,
                                              [e.target.name]: e.target.value
                                          })}
                        />
                    })
                }
                <div className={'mt-5'}>
                    {isUpdating ? (<LoadingSpinner/>) : (
                        <button type={'submit'} className={'btn btn--primary w-full'}>
                            تایید
                        </button>
                    )}
                </div>
            </form>
        </div>
    </>
}

export default Me