import React from 'react'

const Projects = () => {
    const ProjectList = [
        { "Title": "Funky Boys Men's and Women's Wear Store", "Description": "It is a desktop application, simulation to eCommerce Store. To manage customer history, track payments, generate bill amount and send emails.", "Technologies": "Java, MySQL", "Images": "" },
        { "Title": "Certificate Generator and Email Sender", "Description": "It is a desktop application. It collects data from excel file or MySQL database as per our requirements and generate certificates in PNG as well as JPEG format. It will also automatically send generated certificates to appropriate student’s emails id", "Technologies": "Java, MySQL", "Images": "" },
        { "Title": "Solution and version", "Description": "It is a responsive web application all desktop and mobile devices, In front-end we used React JS and in a backend is built in Node JS. Its web app where user can log in, also we have our visualization tool, where user can build its own visualization in various graph format.", "Technologies": "React JS, Node Js, MySQL, JSON, REST API, GitHub", "Images": "" },
    ]
    return (
        <div>
            <div className='text-white text-center text-5xl font-semibold'>Projects</div>

            <div>
                {
                    ProjectList.map((Element) =>
                        <div className='ml-10'>
                            <div className='mt-20 text-3xl text-amber-500'>{Element.Title}</div>
                            <div className='w-1/2'>
                                <div className='text-white text-xl mt-9'>{Element.Description}</div>
                                <div className='text-white text-xl mt-4 text-amber-300'>Technology:</div>
                                <div className='text-white text-xl mt-4 '>{Element.Technologies}</div>
                            </div>

                        </div>
                    )
                }
            </div>

        </div >
    )
}
export default Projects