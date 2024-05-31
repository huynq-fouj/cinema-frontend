import { useEffect } from "react";
import Building from "../../shared/components/building/Building";

export default function AccessDenied() {

    useEffect(() => {
        document.title = 'Lỗi không được phép truy cập';
    },[]);

    return (
        <Building />
    )
}