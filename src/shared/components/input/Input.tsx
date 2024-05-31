import clsx from "clsx";

export default function Input({label,
                                id,
                                type = 'text',
                                placeholder,
                                disabled,
                                errors,
                                errorText = 'Vui lòng nhập dữ liệu hợp lệ!',
                                required,
                                register}: any) {

    return (
        <div className="mb-3">
            <label className="form-label" htmlFor={id}>{label}</label>
            <input
                className={clsx('form-control',
                errors[id] && 'focus-ring-danger border-danger',
                disabled && '')}
                type={type}
                id={id}
                autoComplete={id}
                disabled={disabled}
                placeholder={placeholder}
                {...register(id, {required})}
            />
            <div className={clsx("text-danger", errors[id] ? '' : 'd-none')} style={{fontSize:13}}><i>{errorText}</i></div>
        </div>
    )
}