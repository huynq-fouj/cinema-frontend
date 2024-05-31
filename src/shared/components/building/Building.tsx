import img from "../../../assets/under-construction.svg";
import "./building.scss";

export default function Building() {
    
    return (
        <div className="flex-center w-100">
            <img src={img} alt="Under construction" className="img-building"/>
        </div>
    )
}