import TextField from "@/common/TextField";
import LoadingSpinner from "@/components/LoadingSpinner";

const SendOTPForm = ({onChange, phoneNumber, onSubmit, isLoading}) => {

    return <>
        <form className={'space-y-10'} onSubmit={onSubmit}>
            <div>
                <TextField label={'شماره موبایل'} name={'phoneNumber'} value={phoneNumber}
                           onChange={onChange}/>
                <div>
                    {isLoading ? <div className={'flex justify-center mt-5'}><LoadingSpinner/></div> :
                        <button type={"submit"} className={'btn btn--primary w-full mt-5'}> ارسال کد اعتبار
                            سنجی</button>}
                </div>
            </div>
        </form>

    </>
}
export default SendOTPForm