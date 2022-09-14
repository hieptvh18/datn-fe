import React from "react";
import "./styles.scss";
import image12 from "../../assets/image/image12.png";
import image13 from "../../assets/image/image13.png";
import image14 from "../../assets/image/image14.png";
import image15 from "../../assets/image/image15.png";
import image11 from "../../assets/image/image 11.png";
import hero_2 from "../../assets/image/hero-2.png";



import { Button } from "primereact/button";

const HomePage = () => {
    return (

        <>
            {/* Specialiezd team */}
            <div className="mb-8  ">
                <div className="relative">
                    <div className="w-4 text-center absolute Specialized">
                        <div className="contact font-medium text-6xl">DentiCare</div>
                        <div className="denticare font-bold text-8xl">Specialized Team</div>
                        <hr className="hr my-7 w-4 m-auto" />
                        <div>We are a team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.</div>
                        <hr className="hr my-7 w-4  m-auto" />
                        <img style={{ width: '20%' }} src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/02/img-signature.png' />
                    </div>
                    <img style={{ width: '100%' }} src='http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/background-3.jpg' />
                    <div className='footer'>
                        <div className="grid   ">
                            <div className="col-12 pb-8 lg:col">
                                <div className=" h-full">
                                    <div className="h-full flex flex-column">
                                        <img style={{ width: '100%' }} src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-01.jpg" />
                                        <div className="title pt-5 font-medium">Alex Terrel</div>
                                        <hr className="hr" />
                                        <div className="text-600 text-2xl pt-5">Senior Orthodontist
                                        </div>
                                        <div className="text-600 text-2xl pt-5">Appropriately empower dynamic leadership skills after business portals. Globally myocardinate interactive supply chains with quality.
                                        </div>
                                        <ul className="flex pb-5 pt-7 lg:pt-7">
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-facebook text-5xl icon"></i>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-youtube text-5xl text-red-500 icon"></i>

                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-twitter text-5xl icon"></i>

                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-telegram text-5xl icon"></i>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col">
                                <div className=" h-full">
                                    <div className="  h-full flex flex-column">
                                        <img style={{ width: '100%' }} src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-02.jpg" />
                                        <div className="title pt-5 font-medium">Michél Anderson</div>
                                        <hr className="hr" />
                                        <div className="text-600 text-2xl pt-5">Pediatric Dentist
                                        </div>
                                        <div className="text-600 text-2xl pt-5">Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service leadership rather than prospective experiences.
                                        </div>
                                        <ul className="flex pb-5 pt-7 lg:pt-7">
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-facebook text-5xl icon"></i>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-youtube text-5xl text-red-500 icon"></i>

                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-twitter text-5xl icon"></i>

                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-telegram text-5xl icon"></i>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col">
                                <div className=" h-full">
                                    <div className="  h-full flex flex-column">
                                        <img style={{ width: '100%' }} src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-03.jpg" />
                                        <div className="title pt-5 font-medium">Edwin Southgate</div>
                                        <hr className="hr" />
                                        <div className="text-600 text-2xl pt-5">Senior Orthodontist
                                        </div>
                                        <div className="text-600 text-2xl pt-5">Objectively integrate enterprise-wide strategic theme areas with good infrastructures. Interactively productize premium technologies.
                                        </div>
                                        <ul className="flex pb-5 pt-7 lg:pt-7">
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-facebook text-5xl icon"></i>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-youtube text-5xl text-red-500 icon"></i>

                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-twitter text-5xl icon"></i>

                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-telegram text-5xl icon"></i>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 lg:col">
                                <div className=" h-full">
                                    <div className="  h-full flex flex-column">
                                        <img style={{ width: '100%' }} src="http://denticare.bold-themes.com/allen/wp-content/uploads/sites/16/2020/01/people-04.jpg" />
                                        <div className="title pt-5 font-medium">Carlie Addison</div>
                                        <hr className="hr" />
                                        <div className="text-600 text-2xl pt-5">Dental Nurse
                                        </div>
                                        <div className="text-600 text-2xl pt-5">Uniquely deploy cross-unit benefits with wireless testing procedures. Build backward compatible relationships whereas tactical paradigms.
                                        </div>
                                        <ul className="flex pb-5 pt-7 lg:pt-7">
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-facebook text-5xl icon"></i>
                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-youtube text-5xl text-red-500 icon"></i>

                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-twitter text-5xl icon"></i>

                                            </li>
                                            <li className="flex align-items-center mb-3">
                                                <i className="pi pi-telegram text-5xl icon"></i>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ContactDentiCare */}
            <div className="mb-8  ">
                <div className="text-700 text-center">
                    <span className="contact font-medium text-7xl mb-3 mr-2">Contact</span>{" "}
                    <span className="denticare font-bold text-7xl mb-3">DentiCare</span>
                    <div className="text-800 text-2xl mb-5">
                        Globally incubate standards compliant channels before scalable
                        benefits.
                        <br /> Quickly disseminate superior deliverables whereas web-enabled
                        applications.{" "}
                    </div>
                </div>
                <div className="mb-8 ">
                    <div className="relative">
                        <div className="workingHours absolute px-6 py-4">
                            <div className="mb-5">
                                <h2 className="text-white">Working Hours</h2>
                                <p className="text-300">
                                    Check out DentiCare’s Office hours to plan your visit.
                                </p>
                            </div>
                            <div><div className="flex justify-content-between align-items-center mb-3">
                                <div className="text-white col-5">Monday</div>
                                <div className="text-right col-4">
                                    <div className="text-300  font-semibold">8AM-9PM</div>
                                </div>

                                <Button label="Book" className="button" icon="pi pi-clock" />
                            </div>
                                <div className="flex justify-content-between align-items-center mb-3">
                                    <div className="text-white col-5">Tuesday</div>
                                    <div className="text-right col-4">
                                        <div className="text-300  font-semibold">8AM-9PM</div>
                                    </div>
                                    <Button label="Book" className="button" icon="pi pi-clock" />
                                </div>
                                <div className="flex justify-content-between align-items-center mb-3">
                                    <div className="text-white col-5 ">Wednesday</div>
                                    <div className="text-right col-4">
                                        <div className="text-300  font-semibold">8AM-9PM</div>
                                    </div>
                                    <Button label="Book" className="button" icon="pi pi-clock" />
                                </div>
                                <div className="flex justify-content-between align-items-center mb-3">
                                    <div className="text-white col-5">Thursday</div>
                                    <div className="text-right col-4">
                                        <div className="text-300  font-semibold">8AM-9PM</div>
                                    </div>
                                    <Button label="Book" className="button" icon="pi pi-clock" />
                                </div>
                                <div className="flex justify-content-between align-items-center mb-3">
                                    <div className="text-white col-5 ">Friday</div>
                                    <div className="text-right col-4">
                                        <div className="text-300  font-semibold">8AM-9PM</div>
                                    </div>
                                    <Button label="Book" className="button" icon="pi pi-clock" />
                                </div>
                                <div className="flex justify-content-between align-items-center mb-3">
                                    <div className="text-white col-5">Saturday-Sunday</div>
                                    <div className="text-right col-4">
                                        <div className="text-300  font-semibold">Close</div>
                                    </div>
                                    <Button label="Book" className="button" icon="pi pi-clock" />
                                </div>
                            </div>
                            <div className="text-white text-5xl font-bold mt-5 mb-2">Need Flexible Time?</div>
                            <Button label="Suggest Checkup Time" className="buttonBig" />
                        </div>
                        <div className=""><img style={{ width: "75%" }} src={image11} /></div>

                    </div>

                </div>
                <div className="sectionContact">
                    <div className="grid mb-8  ">
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="text-center">
                                <div className="mb-3">
                                    <div>
                                        <img src={image12} />
                                        <div className="text-900 font-bold text-3xl">
                                            Emergency Phone
                                        </div>
                                    </div>
                                </div>
                                <div className="text-600 text-2xl mb-1">415-205-5550</div>
                                <div className="text-600 text-2xl mb-">Call us Anytime 24/7</div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="text-center">
                                <div className="mb-3">
                                    <div>
                                        <img src={image13} />
                                        <div className="text-900 font-bold text-3xl">Address</div>
                                    </div>
                                </div>
                                <div className="text-600 text-2xl mb-1">
                                    500 Linden Ave, South San Francisco,
                                    <br />
                                    CA 94080, United States
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="text-center">
                                <div className="mb-3">
                                    <div>
                                        <img src={image14} />
                                        <div className="text-900 font-bold text-3xl">Book By Phone</div>
                                    </div>
                                </div>
                                <div className="text-600 text-2xl mb-1">415-205-5550</div>
                                <div className="text-600 text-2xl mb-">405-222-5551</div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 lg:col-3">
                            <div className="text-center">
                                <div className="mb-3">
                                    <div>
                                        <img src={image15} />
                                        <div className="text-900 font-bold text-3xl">Email Us</div>
                                    </div>
                                </div>
                                <div className="text-600 text-2xl mb-1">office@denticare.com</div>
                                <div className="text-600 text-2xl mb-">
                                    emergencies@denticare.com
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
