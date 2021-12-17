import React from 'react'
import './Profile.css'
import { GetApp as GetAppIcon } from '@mui/icons-material';
import { motion } from "framer-motion"
import Resume from "../../Pages/Resume file/Rafsun resume.pdf"
import Rafsun from "../../component/Profile/asset/rafsun.jpeg"
import rafsun from "../../component/Profile/asset/rafsun.png"


const Profile = () => {

    return (

        <div className="profile shadow-none p-3 mb-5  rounded">
            <div className="profile-top">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: "white" }}

                >Rafsun jani</motion.h2>
                <p>a web and app developer</p>
            </div>
            <div className="profile-img">
                <img style={{ height: '150px' }} src={rafsun} alt="" />

            </div>
            <div className="profile-timeline">

                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="timeline p-4 block mb-4">
                                    <div className="tl-item">
                                        <div className="tl-dot b-warning"></div>
                                        <div className="tl-content">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.8 }}
                                                className="active name">name</motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1 }} className="tl-date  mt-1">Rafsun jani</motion.div>
                                        </div>
                                    </div>
                                    <div className="tl-item">
                                        <div className="tl-dot b-warning "></div>
                                        <div className="tl-content">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1.3 }}
                                                className="active name">location</motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1.5 }} className="tl-date mt-1">Dhaka, Bangladesh</motion.div>
                                        </div>
                                    </div>
                                    <div className="tl-item">
                                        <div className="tl-dot b-warning"></div>
                                        <div className="tl-content">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1.7 }} className="active name">email</motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1.9 }} className="tl-date mt-1">rafsun7774@gmail.com</motion.div>
                                        </div>
                                    </div>
                                    <div className="tl-item">
                                        <div className="tl-dot b-warning"></div>
                                        <div className="tl-content">
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 2 }} className="active name">Degree</motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 2.2 }} className="tl-date mt-1">BSc. in CSE</motion.div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="download-cv">
                <a class="btn-bg" rel="refference" target="_blank" href={Resume} download> Download Resume  <GetAppIcon className="icon" /></a>

            </div>
        </div>
    )
}

export default Profile
