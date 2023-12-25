import React from 'react'
import ReactTyped from "react-typed";
import Button from "../components/Buttons"

import { useEffect, useRef, useState } from 'react'

const Homepage = () => {

    const [userDetails, setUserDetails] = useState({})
    return (
        <div className='bg-zinc-950 h-dvh'>
            <div>
                <div className='ml-10 text-5xl font-medium tracking-wider text-slate-500'>
                    <div>HI, I'M Vinit!</div>
                    <div> Creative
                        <ReactTyped className='text-slate-300' strings={[" DEVELOPER", " CODER"]} typeSpeed={100} loop />
                    </div>
                </div>
                <div className='ml-10 text-left mt-8 w-1/2 text-xl font-medium tracking-wider text-slate-300'>As a budding talent in the realms of frontend and backend development, I blend creativity with technical prowess to sculpt digital experiences. Eager to infuse innovation into code, I bring fresh perspectives and a hunger to learn, making me a dynamic force poised to shape the future of web development.
                </div>
                <div className='mt-6 ml-10'>
                    <Button
                        variant="default"
                        label={"Download CV"}
                        size="lg"
                        color='yellow'
                    />
                    <a href='vin.jpg'></a>
                </div>
                {/* ABOUT ME */}
                <div>
                    <div className='ml-10 mt-6 text-3xl font-medium tracking-wider text-green-700'>ABOUT ME</div>
                    <div className='ml-10 w-1/2 ml-10 mt-6 text-2xl font-medium tracking-wider text-green-700'>Code artisan sculpting seamless experiences with React.js and Node.js magic.</div>
                    <div className='text-xl ml-10 mt-6 text-green-100 w-1/2'>Hello! I am a third-year student pursuing Computer Engineering at R. C. Patel Institute of Technology. My journey in the field of technology has been dynamic and exciting. I specialize in both frontend and backend development, with a focus on creating seamless and responsive applications using React.js for the frontend and Node.js for the backend.
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Homepage