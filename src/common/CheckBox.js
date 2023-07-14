const CheckBox = ({name, checked, id, value, onChange, label}) => {
    return <>
        <div className="flex items-center gap-x-2 text-secondary-600">
            <input type="checkbox"
                   onChange={onChange}
                   value={value}
                   checked={checked}
                   name={name}
                   id={id}
                   className={'cursor-pointer form-checkbox rounded-[5px] border-none bg-secondary-100/80 w-4 h-4 checked:text-primary-900'}/>
            <label htmlFor={id} className={'cursor-pointer'}>{label}</label>
        </div>
    </>
}
export default CheckBox