import React from 'react'
import ReactTyped from "react-typed";
import Button from "../components/Buttons"
import vin from '../assets/ff.jpg'

import { useEffect, useRef, useState } from 'react'

const Homepage = () => {
    const Services = [
        { "Title": "UI/UX DESIGNER", "Description": "Crafting compelling and user-centric designs is my forte. With a keen eye for aesthetics and a passion for seamless user experiences, I bring creativity and functionality together to deliver impactful UI/UX solutions." },
        { "Title": "WEB DEVELOPER", "Description": "" }
    ]
    const [userDetails, setUserDetails] = useState({})
    return (
        <div className='bg-zinc-950'>
            <div className=' ml-10'>
                <div>
                    <div className=' text-5xl font-medium tracking-wider text-slate-500'>
                        <div>HI, I'M Vinit!</div>
                        <div> Creative
                            <ReactTyped className='text-slate-300' strings={[" DEVELOPER", " CODER"]} typeSpeed={100} loop />
                        </div>
                    </div>
                    <div className=' text-left mt-8 w-1/2 text-xl font-medium tracking-wider text-slate-300'>As a budding talent in the realms of frontend and backend development, I blend creativity with technical prowess to sculpt digital experiences. Eager to infuse innovation into code, I bring fresh perspectives and a hunger to learn, making me a dynamic force poised to shape the future of web development.
                    </div>
                    <div className='mt-6'>
                        <Button
                            variant="default"
                            label={"Download CV"}
                            size="lg"
                            color='yellow'
                        />
                        <img href='vin'></img>
                    </div>
                </div>
                {/* ABOUT ME */}
                <div>
                    <div className=' mt-6 text-3xl font-medium tracking-wider text-green-700'>ABOUT ME</div>
                    <div className=' w-1/2 0 mt-6 text-2xl font-medium tracking-wider text-green-700'>Code artisan sculpting seamless experiences with React.js and Node.js magic.</div>
                    <div className='text-xl  mt-6 text-green-100 w-1/2'>Hello! I am a third-year student pursuing Computer Engineering at R. C. Patel Institute of Technology. My journey in the field of technology has been dynamic and exciting. I specialize in both frontend and backend development, with a focus on creating seamless and responsive applications using React.js for the frontend and Node.js for the backend.
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='text-green-700 text-center text-3xl'>MY SERVICES</div>
                    <div className='mt-6 text-green-700 text-xl text-center'>Elevating digital experiences through bespoke UI/UX design and web development excellence</div>
                    <div className='mt-6 text-green-700 flex justify-evenly'>
                        <div className='h-96 w-[30rem] bg-zinc-900'>

                            <div className='text-center mt-10 text-xl '>UI/UX DESIGN</div>
                            <div className='flex justify-center'>
                                <div className='w-10/12 text-center'>
                                    <div className='mt-6  text-lg text-justify'>Crafting compelling and user-centric designs is my forte. With a keen eye for aesthetics and a passion for seamless user experiences, I bring creativity and functionality together to deliver impactful UI/UX solutions.</div>
                                </div>
                            </div>
                        </div>
                        <div className='h-96 w-80 bg-zinc-900'>
                            <div className='text-center mt-10 text-xl'>WEB DEVELOPEMENT</div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default Homepage