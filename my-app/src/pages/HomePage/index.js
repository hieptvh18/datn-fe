import React from "react";
import "./styles.scss";
import image12 from "../../assets/image/image12.png";
import image13 from "../../assets/image/image13.png";
import image14 from "../../assets/image/image14.png";
import image15 from "../../assets/image/image15.png";
import image11 from "../../assets/image/image 11.png";
import { Button } from "primereact/button";

const HomePage = () => {
    return (
        <div className="mb-8">
            <div className="text-700 text-center">
                <span className="contact font-medium text-6xl mb-3 mr-2">Contact</span>{" "}
                <span className="denticare font-bold text-6xl mb-3">DentiCare</span>
                <div className="text-800 text-2xl mb-5">
                    Globally incubate standards compliant channels before scalable
                    benefits.
                    <br /> Quickly disseminate superior deliverables whereas web-enabled
                    applications.{" "}
                </div>
            </div>
            <div className="mb-8">
                <div className="workingHours lg:absolute px-6 py-4">
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
                <img style={{ width: "75%" }} src={image11} />
            </div>
            <div className="grid mb-8 ">
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
    );
};

export default HomePage;
