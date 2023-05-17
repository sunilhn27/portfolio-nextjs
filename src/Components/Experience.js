import Link from 'next/link'
import React from 'react'

function Experience() {


  const Details = ({ position, company, companyLink, time, address, work }) => {
    return (
      <li className='flex flex-col my-8 mx-auto items-center justify-between w-[70%] space-y-4 text-sm md:text-xl'>
        <div>
          <h3 ><span className='text-sm md:text-xl font-bold'>{position}</span>&nbsp; <Link href={companyLink} target='_blank' className='text-cyan-300'>@ {company}</Link> </h3>
          <span>
            {time} |{address}
          </span>
          <p>
            {work}
          </p>
        </div>

      </li>
    )

  }

  return (
    <div className='flex flex-row gap-3 '>
{/* 
      <div className='border-1 h-3 bg-white flex flex-col'></div> */}


      <div className='w-[100%] md:w-[60%] mx-auto  text-white flex flex-col'>

        <div className='md:flex-row '>

          <div>
            <ul>
              <Details position="QA Consultant" company="Oneclick LCA PVt Ltd" companyLink="https://www.oneclicklca.com/" time="2022- Present" address="Bangalore, India" work="SDET (Software Development Engineer in Test) in testing is an IT professional who can work equally" />
            </ul>
          </div>

          <div>
            <ul>
              <Details position="Lead Automation Engineer" company="Nasdaq Pvt Ltd" companyLink="https://www.nasdaq.com/" time="2022- 2023" address="Bangalore, India" work="SDET (Software Development Engineer in Test) in testing is an IT professional who can work equally" />
            </ul>
          </div>
          <div>
            <ul>
              <Details position="Senior Test Engineer" company="Qualitrix Pvt Ltd" companyLink="https://qualitrix.com/" time="2018- 2022" address="Bangalore, India" work="SDET (Software Development Engineer in Test) in testing is an IT professional who can work equally" />
            </ul>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Experience
