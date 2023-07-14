import OTPInput from "react-otp-input";
import {HiArrowNarrowRight} from "react-icons/hi";
import {CiEdit} from "react-icons/ci";
import LoadingSpinner from "@/components/LoadingSpinner";

const CheckOTPForm = ({onSubmit, otp, setOtp, onBack, time, onResendOtp, otpResponse,isCheckingOtp}) => {
    return <>
        <div>
            <button onClick={onBack} className={'mb-4'}>
                <HiArrowNarrowRight className={'h-6 w-6 text-secondary-600'}/>
            </button>
            {
                otpResponse && (
                    <p>{otpResponse?.message}
                        <button onClick={onBack}>
                            <CiEdit className={'h-6 w-6 text-primary-900'}/>
                        </button>
                    </p>
                )
            }
            <div className={'mb-4'}>
                {time > 0 ? <p>{time} ثانیه تا ارسال مجدد کد</p> : <button onClick={onResendOtp}>ارسال مجدد کد</button>}
            </div>
            <form className={'space-y-10'} onSubmit={onSubmit}>
                <p>کد تایید را وارد کنید</p>
                <OTPInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderSeparator={<span>-</span>}
                    inputStyle={{
                        width: "2.5rem",
                        padding: "0.5rem 0.2rem",
                        border: "1px solid rgb(var(--color-primary-300))",
                        borderRadius: "0.5rem",
                        outline: "none"
                    }}
                    containerStyle={'flex flex-row-reverse gap-x-2 justify-center'}
                    renderInput={(props) => <input {...props}/>}
                />
                <div>
                    {isCheckingOtp ? <div className={'flex justify-center mt-5'}><LoadingSpinner/></div> :
                        <button type={"submit"} className={'btn btn--primary w-full mt-5'}>تایید کد</button>}
                </div>
            </form>
        </div>
    </>
}
export default CheckOTPForm