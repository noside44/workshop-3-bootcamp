// import intexus from "../Assets/img/intexus.png"
import "../Styles/JobOffers.css"
import { BsBuildingsFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBill } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { IoCalendar } from "react-icons/io5";

function JobOffers ( {imagen, vacancy, company, location, salary, vacancies, published} ){
    return(
        <div className="job-container d-flex flex-row align-items-center border border-secondary-subtle rounded my-3">
            <img className='logo-company rounded'
                    src={require(`../Assets/img/${imagen}.png`)}
                    alt = {`${imagen}-logo`}
            />
            <div className="info-job-container d-flex flex-column mx-4">
                <div className="d-flex flex-row mb-2 pe-auto">
                    <a href="!#" className='job-name mb-0'>
                      {vacancy}
                    </a>
                    <ul className='skills my-auto'>
                      <li>Sales</li>
                      <li>Coomercial</li>
                      <li>Client</li>
                  </ul>
                </div>
                {/* <div className="company-info d-flex flex-row justify-content-between"> */}
                <div className="container company-info">
                    <div className="row">
                        <div className='company-name col ps-0'>
                            <BsBuildingsFill />
                            <p> 
                                {company}
                            </p>
                        </div>
                        <div className='salary col'>
                            <FaLocationDot />
                            <p>
                                {location}
                            </p>
                        </div>
                        <div className="col">
                            <FaMoneyBill />
                            <p className="text-truncate">
                                {salary}
                            </p>
                        </div>
                        <div className="col ">
                            <IoIosPeople />
                            <p>
                                {vacancies} Vacante
                            </p>
                        </div>
                        <div className=" col">
                            <IoCalendar />
                            <p>
                                Hace {published}
                            </p>
                        </div>
                        <div className="col">
                            <div className="border border-black rounded-pill">
                                xxxx
                            </div>
                            <div className="border border-black rounded-pill mx-1">
                                xxxxxx
                            </div>
                            <div className="border border-black rounded-pill">
                                xxxxxx
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { JobOffers }