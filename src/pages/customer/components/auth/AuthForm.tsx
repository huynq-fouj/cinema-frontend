import { useCallback, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";
import Input from "../../../../shared/components/input/Input";
import AuthService from "../../../../shared/services/AuthService";
import toast from "react-hot-toast";
import clsx from "clsx";

import fbLogo from "../../../../assets/icons8/icons8-facebook.svg";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../../../shared/hooks";
import { login } from "../../../../shared/toolkits/authSlice";
import { AuthRequest } from "../../../../shared/interfaces/AuthRequest";

const LOGIN = 'LOGIN';
const REGISTER = 'REGISTER';

export default function AuthForm() {

    const [variant, setVariant] = useState<string>(LOGIN);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {register, handleSubmit, formState: {errors}} = useForm<AuthRequest>({})

    //Thay đổi variant khi phần hash của location chứa #register
    useEffect(() => {
        if(location.hash.includes('#register')) setVariant(REGISTER);
        else setVariant(LOGIN);
    }, [location]);

    const toggleVariant = useCallback(() => {
        setVariant(prev => prev === LOGIN ? REGISTER : LOGIN);
    }, [variant]);

    const onSubmit = (data: AuthRequest) => {
        setIsLoading(true);
        const toaster = toast.loading("Vui lòng chờ...")
        if(variant === LOGIN) {
            AuthService.login(data).then(res => {
                dispatch(login(res.data));
                toast.success("Đăng nhập thành công!", { id: toaster });
                if(res.data.user.role === "ADMIN") navigate("/admin");
                else navigate("/");
            }).catch(err => {
                toast.error(err?.response?.data?.error ? err?.response?.data?.error : "Đăng nhập thất bại!", { id: toaster });
            }).finally(() => setIsLoading(false))
        }
        if(variant === REGISTER) {

            if(data.password !== data.confirm) {
                setIsLoading(false);
                toast.error("Mật khẩu xác nhận không hợp lệ!", { id: toaster });
                return;
            }

            AuthService.signup(data).then(res => {
                console.log(res);
                navigate("/login");
                toast.success("Đăng ký thành công!", { id: toaster });
            }).catch(err => {
                toast.error(err?.response?.data?.error ? err?.response?.data?.error : "Đăng ký thất bại!", { id: toaster });
            }).finally(() => setIsLoading(false))
        }
    }

    return (
        <div className="my-4 row justify-content-center">
            <div className="p-4 border col-md-6 col-lg-4 shadow-sm rounded-3">
                <h4 className="fw-semibold text-center text-uppercase">
                    {variant === LOGIN ? "Đăng nhập" : "Đăng ký"}
                </h4>
                <form className="needs-validation" noValidate onSubmit={handleSubmit(onSubmit)}>
                    {variant === REGISTER ? <Input
                        id="fullname"
                        label="Họ và tên"
                        required
                        errorText="Vui lòng nhập họ tên hợp lệ!"
                        errors={errors}
                        register={register}/> : ''}
                    <Input
                        id="email"
                        label="Email"
                        type="email"
                        errors={errors}
                        required
                        errorText="Vui lòng nhập email hợp lệ!"
                        register={register}/>
                    <Input
                        id="password"
                        type="password"
                        label="Mật khẩu"
                        required
                        errorText="Vui lòng nhập mật khẩu hợp lệ!"
                        errors={errors}
                        register={register}/>
                    {variant === REGISTER ? <Input
                        id="confirm"
                        type="password"
                        label="Xác nhận mật khẩu"
                        required
                        errorText="Vui lòng nhập mật khẩu xác nhận hợp lệ!"
                        errors={errors}
                        register={register}/> : ''}
                    {variant === REGISTER ? <Input
                        id="phoneNumber"
                        label="Số điện thoại"
                        required
                        errorText="Vui lòng nhập số điện thoại hợp lệ!"
                        errors={errors}
                        register={register}/> : ''}
                    <div className="mb-3">
                        <button className={clsx("btn btn-primary w-100",
                            isLoading ? "disabled" : '')}
                            type="submit">
                            {variant === LOGIN ? "Đăng nhập" : "Đăng ký"}
                        </button>
                    </div>
                    <div className="mb-3">
                        <button className={clsx("btn border border-primary w-100 d-flex align-items-center justify-content-center",
                            isLoading ? "disabled" : '')}
                            type="button">
                            <img src={fbLogo} className="me-1" width={25} alt="Logo facebook" />
                            <span>Tiếp tục với Facebook</span>
                        </button>
                    </div>
                    <div className="text-center">
                        {variant === LOGIN ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'}
                        <span className="ms-1 text-primary"
                        onClick={toggleVariant}
                        style={{cursor: 'pointer'}}>
                            {variant === REGISTER ? "Đăng nhập" : "Đăng ký"}
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}