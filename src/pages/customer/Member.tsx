import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import Building from "../../shared/components/building/Building";
import { useAppSelector } from "../../shared/hooks";


export default function Member() {

    const {isLoggedIn, user} = useAppSelector(state => state.auth);
    const navigate = useNavigate();

    //Kiểm tra user đã đăng nhập hay chưa
    useEffect(() => {
        if(!isLoggedIn || user == null) {
            toast.error('Bạn chưa đăng nhập!');
            navigate('/login');
        }
    }, [isLoggedIn, user]);

    return (
        <main className="container mt-5 py-3">
            <Building/>
        </main>
    )
}