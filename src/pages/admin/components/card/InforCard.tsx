import clsx from "clsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { DAY, MONTH, YEAR, TimeFilter } from "../../../../shared/types/TimeFilter";

export default function InforCard({className, label, icon, value, valuePercent, decrease, defaultFilter}: any) {

    const [filter, setFilter] = useState<TimeFilter>(defaultFilter ?? DAY);

    return (
        <div className={clsx('card info-card', className)}>
            <div className="filter">
                <Link className="icon" to="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></Link>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                    <li className="dropdown-header text-start"><h6>Lọc theo</h6></li>
                    <li><button className="dropdown-item" onClick={() => setFilter(DAY)}>{ DAY.label }</button></li>
                    <li><button className="dropdown-item" onClick={() => setFilter(MONTH)}>{ MONTH.label }</button></li>
                    <li><button className="dropdown-item" onClick={() => setFilter(YEAR)}>{ YEAR.label }</button></li>
                </ul>
            </div>
            <div className="card-body">
                <h5 className="card-title">{ label } <span>| { filter.label }</span></h5>
                <div className="d-flex align-items-center">
                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i className={ icon }></i>
                    </div>
                    <div className="ps-3">
                        <h6>{ value }</h6>
                        <span className="text-muted small pt-2 pe-1">{ decrease ? 'Giảm' : 'Tăng' }</span>
                        <span className={clsx('small pt-1 fw-bold', decrease ? 'text-danger' : 'text-success ')}>{ valuePercent }</span>
                    </div>
                </div>
            </div>
        </div>
    )
}