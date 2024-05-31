import { useState } from "react"
import { DAY, MONTH, YEAR } from "../../../../shared/types/TimeFilter";

export default function ActivityCard() {

    const [filter, setFilter] = useState(DAY);

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
                <h5 className="card-title">Recent Activity <span>| { filter.label }</span></h5>

                <div className="activity">

                    <div className="activity-item d-flex">
                        <div className="activite-label">32 min</div>
                        <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                        <div className="activity-content">
                            Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo officiis</a> beatae
                        </div>
                    </div>

                    <div className="activity-item d-flex">
                        <div className="activite-label">56 min</div>
                        <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                        <div className="activity-content">
                            Voluptatem blanditiis blanditiis eveniet
                        </div>
                    </div>

                    <div className="activity-item d-flex">
                        <div className="activite-label">2 hrs</div>
                        <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                        <div className="activity-content">
                            Voluptates corrupti molestias voluptatem
                        </div>
                    </div>

                    <div className="activity-item d-flex">
                        <div className="activite-label">1 day</div>
                        <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                        <div className="activity-content">
                            Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati voluptatem</a> tempore
                        </div>
                    </div>

                    <div className="activity-item d-flex">
                        <div className="activite-label">2 days</div>
                        <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                        <div className="activity-content">
                            Est sit eum reiciendis exercitationem
                        </div>
                    </div>

                    <div className="activity-item d-flex">
                        <div className="activite-label">4 weeks</div>
                        <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                        <div className="activity-content">
                            Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                        </div>
                    </div>
                </div>
            </div>
         </div>
    )
}