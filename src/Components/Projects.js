import Image from 'next/image'
import React from 'react'
import Project1 from '../image/project1.png'
import Project2 from '../image/project2.png'
import Project3 from '../image/project3.png'

function Projects() {
    return (
        <div className=' md:space-y-0 flex flex-col md:flex-row md:justify-between'>
            {/* width={150} height={150} */}
            <div className='flex flex-col w-10/12 md:w-1/3 mx-auto items-center shadow-2xl p-4 '>
                <Image className='p-2' width={500} src={Project1} alt="img1"/>
                <div className='text-white flex flex-col justify-center items-center space-y-2'>
                    <h5 className="card-title text-2xl">Todo App</h5>
                    <p className="card-text text-center">This Application will take Daily Todo activitiesTo make a vertical line, use border-left or border-right property. The height property is used to set the height of border </p>
                    <a href={"https://www.google.com"} rel="noreferrer" target="_blank" className="">Read More...</a>
                </div>
            </div>
            <div className='flex flex-col w-10/12 md:w-1/3 mx-auto items-center shadow-2xl p-4 '>
                <Image className='p-2' width={500}  src={Project2} alt="img1"/>
                <div className='text-white flex flex-col justify-center items-center space-y-2'>
                    <h5 className="card-title text-2xl">Todo App</h5>
                    <p className="card-text text-center">This Application will take Daily Todo activitiesTo make a vertical line, use border-left or border-right property. The height property is used to set the height of border </p>
                    <a href={"https://www.google.com"} rel="noreferrer" target="_blank" className="">Read More...</a>
                </div>
            </div>

            <div className='flex flex-col w-10/12 md:w-1/3 mx-auto items-center shadow-2xl p-4 '>
                <Image className='p-2' width={310} height={50} src={Project3} alt="img1"/>
                <div className='text-white flex flex-col justify-center items-center space-y-2'>
                    <h5 className="card-title text-2xl ">Todo App</h5>
                    <p className="card-text text-center">This Application will take Daily Todo activitiesTo make a vertical line, use border-left or border-right property. The height property is used to set the height of border </p>
                    <a href={"https://www.google.com"} rel="noreferrer" target="_blank" className="">Read More...</a>
                </div>
            </div>

        </div>
    )
}

export default Projects
