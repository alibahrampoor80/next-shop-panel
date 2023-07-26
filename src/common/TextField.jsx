export default function TextField({label, name, value, onChange}) {

    return <>
        <div>
            <label htmlFor={name} className={'block text-black '}>{label}</label>
            <input autoComplete={'off'}
                   type="text"
                   className={'textField__input'}
                   name={name} id={name} onChange={onChange} value={value}/>
        </div>
    </>
}