import React from 'react'
import funky from '../assets/funky-boys.jpg'
import CE from '../assets/certi-email.png'
const Projects = () => {
    const ProjectList = [
        { "Title": "Funky Boys Men's and Women's Wear Store", "Description": "It is a desktop application, simulation to eCommerce Store. To manage customer history, track payments, generate bill amount and send emails.", "Technologies": "Java, MySQL", "Images": funky },
        { "Title": "Certificate Generator and Email Sender", "Description": "It is a desktop application. It collects data from excel file or MySQL database as per our requirements and generate certificates in PNG as well as JPEG format. It will also automatically send generated certificates to appropriate student’s emails id", "Technologies": "Java, MySQL", "Images": CE },
        { "Title": "Solution and version", "Description": "It is a responsive web application all desktop and mobile devices, In front-end we used React JS and in a backend is built in Node JS. Its web app where user can log in, also we have our visualization tool, where user can build its own visualization in various graph format.", "Technologies": "React JS, Node Js, MySQL, JSON, REST API, GitHub", "Images": funky },
    ]
    return (
        <div className='bg-slate-900	'>
            <div className=' text-white text-center text-5xl font-semibold'>Projects</div>


            <div>
                {
                    ProjectList.map((Element) =>
                        <div>
                            <div className='ml-10 flex justify-around'>
                                <div className='w-10/12'>
                                    <div className='mt-20 text-3xl text-amber-500'>{Element.Title}</div>
                                    <span className='text-white text-xl mt-4 text-yellow-600'>Technology: </span>
                                    <span className='text-white text-xl mt-4 '>{Element.Technologies}</span>
                                    {/* <div className='w-11/12'> */}
                                    <div className='text-white text-xl mt-9 w-11/12'>{Element.Description}</div>
                                </div>
                                <img className='ml-80 h-96' src={Element.Images} />

                                {/* </div> */}
                                < div >

                                </div>

                            </div>
                        </div>
                    )
                }
            </div >

        </div >
    )
}
export default Projects