'use client'
import SendOTPForm from "@/pages/(user)/auth/sendOTPForm";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {useMutation} from "react-query";
import {getOTP, checkOtp} from "@/services/authServices";
import CheckOTPForm from "@/pages/(user)/auth/CheckOTPForm";
import {useRouter} from "next/navigation";


const AuthPage = () => {
    const RESEND_TIME = 90

    const [phoneNumber, setPhoneNumber] = useState("")
    const [step, setStep] = useState(2)
    const [otp, setOtp] = useState("")
    const [time, setTime] = useState(RESEND_TIME)

    const router = useRouter()
    const {
        data: otpResponse, isError, isLoading
        , mutateAsync: mutateGetOtp
    } = useMutation({mutationFn: getOTP})

    const {mutateAsync: mutateCheckOtp, isLoading: isCheckingOtp} =
        useMutation({
            mutationFn: checkOtp
        })
    const phoneNumberHandler = (event) => {
        setPhoneNumber(event.target.value)
    }
    const sendOTPHandler = async (e) => {
        e.preventDefault()
        try {
            const data = await mutateGetOtp({phoneNumber})
            toast.success(data.message)
            setStep(2)
            setTime(RESEND_TIME)
            setOtp("")
        } catch (err) {
            toast.error(err?.response?.data?.message)
        }

    }
    const checkOtpHandler = async (e) => {
        e.preventDefault()
        try {
            const {message, user} = await mutateCheckOtp({phoneNumber, otp})
            toast.success(message)
            if (user.isActive) {
                // router.push('/')
                document.location.href = '/'
            } else {
                router.push('/complete-profile')
            }

        } catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }
    useEffect(() => {
        const timer = time > 0 && setInterval(() => {
            setTime((t) => t - 1)
        }, 1000)

        return () => {
            if (timer) clearInterval(timer)
        }

    }, [time])

    const renderSteps = () => {
        switch (step) {
            case 1:
                return (
                    <SendOTPForm
                        phoneNumber={phoneNumber}
                        onChange={phoneNumberHandler}
                        onSubmit={sendOTPHandler}
                        isLoading={isLoading}
                    />
                )
            case 2:
                return <>
                    <CheckOTPForm setOtp={setOtp}
                                  otp={otp}
                                  onSubmit={checkOtpHandler}
                                  onBack={() => setStep((s) => s - 1)}
                                  time={time}
                                  onResendOtp={sendOTPHandler}
                                  otpResponse={otpResponse}
                                  isCheckingOtp={isCheckingOtp}
                    />
                </>

            default:
                return null
        }
    }
    return <>
        <div className="flex justify-center">
            <div className="w-full sm:max-w-sm">
                {renderSteps()}
            </div>
        </div>
    </>
}
export default AuthPage