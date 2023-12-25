import React from 'react'
import ReactTyped from "react-typed";
import Button from "../components/Buttons"
import vinitResume from "../assets/vinitResume.pdf"
import profile1 from "../assets/profile_1.jpg"

import { useEffect, useRef, useState } from 'react'

const Homepage = () => {
    const Services = [
        { "Title": "UI/UX DESIGNER", "Description": "Crafting compelling and user-centric designs is my forte. With a keen eye for aesthetics and a passion for seamless user experiences, I bring creativity and functionality together to deliver impactful UI/UX solutions." },
        { "Title": "WEB DEVELOPER", "Description": "I excel in web design, merging creativity with functionality to craft visually appealing and user-centric websites. My passion lies in delivering seamless online experiences that captivate audiences and elevate brands." }
    ]
    useEffect(() => {
        document.body.style.backgroundColor = "#03072A";
    }, [])

    const [userDetails, setUserDetails] = useState({})
    return (
        <div className='h-dvh mt-60 '>
            {/* Home ME */}
            <div className='flex w-3/5 justify-center'>
                <div className='w-3/5'>
                    <div className='w-[45rem]'>
                        <div className='ml-10 text-5xl font-medium tracking-wider text-slate-500'>
                            <div>HI, I'M Vinit!</div>
                            <div> Creative
                                <ReactTyped className='text-slate-300' strings={[" DEVELOPER", " CODER"]} typeSpeed={100} loop />
                            </div>
                        </div>
                        <div className='ml-10 text-left mt-8  text-base font-medium tracking-wider text-slate-300'>
                            As a budding talent in the realms of frontend and backend development, I blend creativity with technical prowess to sculpt digital experiences. Eager to infuse innovation into code, I bring fresh perspectives and a hunger to learn, making me a dynamic force poised to shape the future of web development.
                        </div>
                        <div className='mt-6 ml-10'>
                            <a href={vinitResume} download={"Vinit S Patil CV"} target="_blank" rel="noopener noreferrer">
                                <Button variant="default" label={"Download CV"} size="lg" color='yellow' />
                            </a>
                            {/* <a href='vin.jpg'></a> */}
                        </div>

                    </div>
                    <div >
                        <img src={profile1} className='h-96 w-80' />
                    </div>
                </div>
            </div>
            {/* ABOUT ME */}
            <div>
                <div className='ml-10 mt-6 text-3xl font-medium tracking-wider text-green-700'>ABOUT ME</div>
                <div className='ml-10 w-1/2 ml-10 mt-6 text-2xl font-medium tracking-wider text-green-700'>Code artisan sculpting seamless experiences with React.js and Node.js magic.</div>
                <div className='text-xl ml-10 mt-6 text-green-100 w-1/2'>Hello! I am a third-year student pursuing Computer Engineering at R. C. Patel Institute of Technology. My journey in the field of technology has been dynamic and exciting. I specialize in both frontend and backend development, with a focus on creating seamless and responsive applications using React.js for the frontend and Node.js for the backend.
                </div>
            </div>
            <div className='mt-10'>
                <div className='text-indigo-300 text-center text-3xl font-semibold'>MY SERVICES</div>
                <div className='mt-6 text-indigo-300 text-xl text-center font-medium '>Elevating digital experiences through bespoke UI/UX design and web development excellence</div>
                {/* <div className='mt-6 text-green-700 flex justify-evenly'> */}
                {/* <div className='h-72 w-[30rem] bg-zinc-900'> */}
                <div className='mt-6 text-white flex justify-evenly'>
                    {
                        Services.map((Element) =>
                            <div className='h-72 w-[30rem] bg-slate-800 '>
                                <div className='text-center mt-10 text-xl font-medium font-sans '>{Element.Title}</div>
                                <div>
                                    <div className='flex justify-center'>
                                        <div className='w-10/12 text-center'>
                                            <div className='mt-6  text-lg text-justify font-serif'> {Element.Description}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Homepage