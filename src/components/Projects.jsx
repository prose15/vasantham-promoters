'use client'

import { currentProjects, futhureProjects, pastProjects, projectType } from '@/utils/constants'
import Image from 'next/image'
import { useState } from 'react'

const Projects = () => {
    const [currentTab,setCurrentTab] = useState(0)
    const handleCurrentTab = (index) =>{
        console.log(index);
        setCurrentTab(index)
    }

  return (
    <section id='projects'>
        <div className='mobile-width lg:screen-width bg-gray-600 bg-opacity-10'>
            <div className='flex gap-2 justify-center'>
            {projectType.map((type,index)=><button className={` rounded-md w-44  font-semibold transition delay-300 ease-in-out ${currentTab === index ? 'bg-secondaryBackground text-black  px-6' : 'bg-gray-600 px-6 py-3 text-white'}`} key={index} onClick={()=>handleCurrentTab(index)}>{type.name}</button>)}
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 my-12'>
                <RenderCorrectProject currentTab={currentTab}/>
            </div>
        </div>
    </section>
  )
}

export default Projects

const RenderCorrectProject = ({currentTab}) =>{
    switch(currentTab){
        case 0: return <CurrentProject/>
        case 1: return <PastProject/>
        case 2: return <FutureProject/>
        default: return <CurrentProject/>
    }
}

const CurrentProject = () =>{
 return (
<>
{currentProjects.map((project,index)=><Card key={index} project={project}/>)}
</> 
)
}

const PastProject = () =>{
    return (
    <>
    {pastProjects.map((project,index)=><Card key={index} project={project}/>)}
    </>
)}

const FutureProject = () =>{
    return(
    <>
    {futhureProjects.map((project,index)=><Card key={index} project={project}/>)}
    </>
)}

const Card = ({project}) =>{
    return(
    <div className='w-full bg-white rounded-md flex flex-col'>
        <Image src={project?.img_url} alt='current-projects' width={1000} height={1000} className='w-full rounded-t-md'/>
        <div className='flex flex-col gap-4 text-lg items-start mx-4 font-semibold my-4'>
            <div className='flex gap-2 items-end'>
                <Image src={'/images/projects/location.png'} width={1000} height={1000} className='w-6'/>
                <p>{project?.location}</p>
            </div>

            <div className='flex gap-2 items-end'>
                <Image src={'/images/projects/price-tag.png'} width={1000} height={1000} className='w-6'/>
                <p>{project?.price}</p>
            </div>
            
            <div className='flex gap-2 items-end'>
                <Image src={'/images/projects/plotting.png'} width={1000} height={1000} className='w-6'/>
                <p>{project?.plot_size}</p>
            </div>            
        </div>
    </div>)}