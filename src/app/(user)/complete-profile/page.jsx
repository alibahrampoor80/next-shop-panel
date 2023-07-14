'use client'
import TextField from "@/common/TextField";
import {useState} from "react";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import {useMutation} from "react-query";
import {completeProfile} from "@/services/authServices";
import LoadingSpinner from "@/components/LoadingSpinner";

const CompleteProfile = () => {
    const router = useRouter()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const {data, isLoading, error, mutateAsync} =
        useMutation({mutationFn: completeProfile})
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            const {message, user} = await mutateAsync({name, email})
            toast.success(message)
            router.push('/')

        } catch (err) {
            toast.error(err?.response?.data?.message)
        }

    }

    return <>
        <div className="flex justify-center">
            <div className="w-full sm:max-w-sm">
                <form onSubmit={submitHandler} className={'space-y-5'}>
                    <TextField name={'name'} label={'نام و نام خانوادگی'} value={name}
                               onChange={(e) => setName(e.target.value)}/>

                    <TextField name={'email'} label={'ایمیل'} value={email}
                               onChange={(e) => setEmail(e.target.value)}/>

                    <div>
                        {isLoading ? <div className={'flex justify-center mt-5'}><LoadingSpinner/></div> :
                            <button type={"submit"} className={'btn btn--primary w-full mt-5'}>تایید</button>}
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default CompleteProfile