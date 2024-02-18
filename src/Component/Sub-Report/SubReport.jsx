import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faIndianRupeeSign, faPercent, faGraduationCap, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

export default function SubReport() {
    return (
        <>
            <div className="relative max-w-full flex h-auto justify-center items-center">
                <div className="min-w-7xl sm:px-6 lg:px-8 bg-center bg-cover bg-no-repeat w-full h-auto py-10 bg-sky-900 bg-blend-darken" style={{ backgroundImage: "url('/images/sub-report-bg1.jpg')" }}>

                    {/* --------------------report of on in general----------------------------------  */}
                    <h2 className="text-white font-extrabold my-9 text-center text-2xl sm:text-3xl  md:text-4xl font-sans">
                        Report  as on 30th APR 2023
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 px-6 mx-auto w-10/12">
                        <div className="text-white flex flex-col items-center justify-center space-y-3 sm:space-y-5 mb-8">
                            <p className='text-6xl my-auto'><FontAwesomeIcon icon={faHouseChimney} /></p>
                            <p className="text-white text-2xl font-semibold">
                                22
                            </p>
                            <p className='font-light'>Number Of Branches</p>
                        </div>
                        <div className="text-white flex flex-col items-center justify-center space-y-3 sm:space-y-5 mb-8">
                            <p className='text-6xl my-auto'><FontAwesomeIcon icon={faHandshake} /></p>
                            <p className="text-white text-2xl font-semibold">
                                31,661
                            </p>
                            <p className='font-light'>Active Borrowers</p>
                        </div>
                        <div className="text-white flex flex-col items-center justify-center space-y-3 sm:space-y-5 mb-8">
                            <p className='text-6xl my-auto'><FontAwesomeIcon icon={faIndianRupeeSign} /></p>
                            <p className="text-white text-2xl font-semibold">
                                78
                            </p>
                            <p className='font-light'>Portfolio Outstanding ( cr )</p>
                        </div>
                        <div className="text-white flex flex-col items-center justify-center space-y-3 sm:space-y-5 mb-8">
                            <p className='text-6xl my-auto'><FontAwesomeIcon icon={faPercent} /></p>
                            <p className="text-white text-2xl font-semibold">
                                93
                            </p>
                            <p className='font-light'>Repayment Rate</p>
                        </div>
                    </div>


                    {/* {Report skill Development-------------------------------------------------------------------} */}
                    <h2 className="text-white font-extrabold mt-16 text-center text-2xl sm:text-3xl  md:text-4xl font-sans">
                        Report of Skill Development as on 30th APR 2022
                    </h2>
                    <div className="my-11 flex justify-around items-center flex-col sm:flex-row px-6 max-w-6xl mx-auto">
                        <div className="text-white flex flex-col justify-center items-center space-y-3 sm:space-y-5 mb-8">
                            <p className='text-6xl my-auto'><FontAwesomeIcon icon={faHouseChimney} /></p>
                            <p className="text-2xl font-semibold">
                                22
                            </p>
                            <p className='font-light'>Number of brances</p>
                        </div>
                        <div className="text-white flex flex-col justify-center items-center space-y-3 sm:space-y-5 mb-8">
                            <p className='text-6xl my-auto'><FontAwesomeIcon icon={faGraduationCap} /></p>
                            <p className="text-2xl font-semibold">
                                11476
                            </p>
                            <p className='font-light'>Total Students</p>
                        </div>

                        <div className="text-white flex flex-col justify-center items-center space-y-3 sm:space-y-5 mb-8">
                            <p className='text-6xl my-auto'><FontAwesomeIcon icon={faBookOpen} /></p>
                            <p className="text-2xl font-semibold">
                                35
                            </p>
                            <p className='font-light'>Number of Courses</p>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}
