import React from 'react';
import TextField from "@/common/TextField";
import RadioInput from "@/common/RadioInput";
import Select from "react-select";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import LoadingSpinner from "@/components/LoadingSpinner";

const CouponForm = ({
                        formData,
                        handelSubmitForm,
                        handelChangeValue,
                        setType,
                        type,
                        options,
                        onChangeSelect,
                        expireDate,
                        setExpireDate,
                        isLoading,
                        defaultValue = ""
                    }) => {
    return (

        <div className={'max-w-sm'}>
            <form className={'space-y-3'} onSubmit={handelSubmitForm}>
                <TextField label={'کد'} name={'code'} value={formData.code || ""} onChange={handelChangeValue}/>
                <TextField label={'مقدار'} name={'amount'} value={formData.amount || ""} onChange={handelChangeValue}/>
                <TextField label={'ظرفیت'} name={'usageLimit'} value={formData.usageLimit || ""}
                           onChange={handelChangeValue}/>
                <div className="">
                    <span className={'mb-2 block'}>نوع کد تخفیف</span>
                    <div className={'flex items-center gap-x-2'}>
                        <RadioInput checked={type === "percent"}
                                    id={'percent-type'}
                                    onChange={(e) => setType(e.target.value)}
                                    label={'درصد'}
                                    value={'percent'}
                                    name={'type'}
                        />
                        <RadioInput checked={type === "fixedProduct"}
                                    id={'fixedProduct-type'}
                                    onChange={(e) => setType(e.target.value)}
                                    label={'قیمت ثابت '}
                                    value={'fixedProduct'}
                                    name={'type'}
                        />
                    </div>
                </div>
                <div className="">
                    <label htmlFor="products" className={'mb-2 block'}>شامل محصولات</label>
                    <Select
                        instanceId={'products'}
                        isMulti
                        options={options}
                        onChange={onChangeSelect}
                        getOptionLabel={(option) => option.title}
                        getOptionValue={(option) => option._id}
                        defaultValue={defaultValue}
                    />
                </div>
                <div className="">
                    <span className={'mb-2 block'}>تاریخ انقضا</span>
                    <DatePicker value={expireDate}
                                inputClass={'textField__input w-full'}
                                onChange={date => setExpireDate(date)}
                                format={'YYYY/MM/DD'}
                                calendar={persian}
                                locale={persian_fa}

                    />
                </div>
                {
                    isLoading ? <LoadingSpinner/> : <button className={'btn btn--primary w-full'}>تایید</button>
                }
            </form>
        </div>


    );
};

export default CouponForm;