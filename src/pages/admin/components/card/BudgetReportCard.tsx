import { useRef, useState } from "react"
import { DAY, MONTH, YEAR } from "../../../../shared/types/TimeFilter";
import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

export default function BudgetReportCard() {

    const [filter, setFilter] = useState(DAY);
    const cardBodyRef = useRef(null);
    const series = [
        {
            name: 'Allocated Budget',
            data: [30, 40, 100, 60, 80, 90],
        },
        {
            name: 'Actual Spending',
            data: [50, 100, 80, 80, 50, 70],
        }
    ];
    const options: ApexOptions = {
        chart: {
            type: 'radar',
            toolbar: { show: false },
        },
        markers: {
            size: 4,
            hover: { size: 8 },
        },
        plotOptions: {
            radar: {
                size: 120,
            },

        },
        xaxis: {
            categories: [
                'Sales',
                'Administration',
                'Information Technology',
                'Customer Support',
                'Development',
                'Marketing'
            ],
        },
    };

    return (
        <div className="card">
            <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></a>
                <ul className="dropdown-menu dropdown-menu-end">
                    <li className="dropdown-header text-start">
                        <h6>Lọc theo</h6>
                    </li>
                    <li><button className="dropdown-item" onClick={() => setFilter(DAY)}>{ DAY.label }</button></li>
                    <li><button className="dropdown-item" onClick={() => setFilter(MONTH)}>{ MONTH.label }</button></li>
                    <li><button className="dropdown-item" onClick={() => setFilter(YEAR)}>{ YEAR.label }</button></li>
                </ul>
            </div>
            <div className="card-body pb-0" ref={cardBodyRef}>
                <h5 className="card-title">Budget Report <span>/{ filter.label }</span></h5>
                <ReactApexChart height={300} type="radar" options={options} series={series}/>
            </div>
        </div>
    )
}