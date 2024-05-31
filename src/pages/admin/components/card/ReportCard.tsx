import { useState } from "react";
import { DAY, MONTH, YEAR, TimeFilter } from "../../../../shared/types/TimeFilter";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

export default function ReportCard() {

    const [filter, setFilter] = useState<TimeFilter>(DAY);

    const series = [{
        name: 'Sales',
        data: [31, 40, 28, 51, 42, 82, 56],
      }, {
        name: 'Revenue',
        data: [11, 32, 45, 32, 34, 52, 41]
      }, {
        name: 'Customers',
        data: [15, 11, 32, 18, 9, 24, 11]
    }];

    const options: ApexOptions = {
        chart: {
            height: 350,
            type: 'area',
            toolbar: {
              show: false
            },
          },
          markers: {
            size: 4
          },
          colors: ['#4154f1', '#2eca6a', '#ff771d'],
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.3,
              opacityTo: 0.4,
              stops: [0, 90, 100]
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 2
          },
          xaxis: {
            type: 'datetime',
            categories: ["2024-05-19T00:00:00.000Z", "2024-05-19T01:30:00.000Z", "2024-05-19T02:30:00.000Z", "2024-05-19T03:30:00.000Z", "2024-05-19T04:30:00.000Z", "2024-05-19T05:30:00.000Z", "2024-05-19T06:30:00.000Z"]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          }
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
            <div className="card-body">
                <h5 className="card-title">Reports <span>/{ filter.label }</span></h5>
                <Chart type="area" options={options} series={series}/>
            </div>
        </div>
    )
}