import { Link } from "react-router-dom";
import InforCard from "./components/card/InforCard";
import ReportCard from "./components/card/ReportCard";
import ActivityCard from "./components/card/ActivityCard";
import BudgetReportCard from "./components/card/BudgetReportCard";
import { MONTH } from "../../shared/types/TimeFilter";

export default function Dashboard() {

    return (
        <>
            <div className="pagetitle">
                <h1>Bảng điều khiển</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/admin">Trang chủ</Link></li>
                        <li className="breadcrumb-item active">Bảng điều khiển</li>
                    </ol>
                </nav>
            </div>

            <section className="section dashboard">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-xxl-4 col-md-6">
                                <InforCard label="Bán hàng" className="sales-card" icon="bi bi-cart" value="145" valuePercent="12%"/>
                            </div>
                            <div className="col-xxl-4 col-md-6">
                                <InforCard label="Doanh thu" className="revenue-card" icon="bi bi-currency-dollar" value="$3,264" valuePercent="8%" defaultFilter={MONTH}/>
                            </div>
                            <div className="col-xxl-4 col-xl-12">
                                <InforCard label="Khách hàng" className="customers-card" icon="bi bi-people" value="1244" valuePercent="12%" decrease defaultFilter={MONTH}/>
                            </div>
                            <div className="col-12">
                                <ReportCard/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <ActivityCard/>
                        <BudgetReportCard/>
                    </div>
                </div>
            </section>
        </>
    )
}