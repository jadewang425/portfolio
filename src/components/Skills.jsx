import Express from '../assets/skills/express-js.png'
import GitHub from '../assets/skills/github.png'
import JavaScript from '../assets/skills/javascript.png'
import MongoDB from '../assets/skills/mongo.png'
import Node from '../assets/skills/node.png'
import Python from '../assets/skills/python.png'
import React from '../assets/skills/react.png'

export default function Skills () {
    return (
        <div name='skills' className='w-full h-screen'>
            <div className='max-w-[1000px] mx-auto p-14 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-black">Skills</p>
                    <p className='py-4'>These are some of the technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c1646] hover:scale-110 duration-500 pt-4'>
                        <img className='w-20 mx-auto' src={JavaScript} alt="JS Logo" />
                        <p className='my-4'>JavaScript</p>
                    </div>
                    <div className='shadow-md shadow-[#040c1646] hover:scale-110 duration-500 pt-4'>
                        <img className='w-20 mx-auto' src={Python} alt="Python Logo" />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='shadow-md shadow-[#040c1646] hover:scale-110 duration-500 pt-4'>
                        <img className='w-20 mx-auto' src={MongoDB} alt="MongoDB Logo" />
                        <p className='my-4'>MongoDB</p>
                    </div>
                    <div className='shadow-md shadow-[#040c1646] hover:scale-110 duration-500 pt-4'>
                        <img className='w-20 mx-auto' src={Node} alt="Node.js Logo" />
                        <p className='my-4'>Node.js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c1646] hover:scale-110 duration-500 pt-4'>
                        <img className='w-20 mx-auto' src={Express} alt="Express.js Logo" />
                        <p className='my-4'>Express.js</p>
                    </div>
                    <div className='shadow-md shadow-[#040c1646] hover:scale-110 duration-500 pt-4'>
                        <img className='w-20 mx-auto' src={React} alt="React Logo" />
                        <p className='my-4'>React</p>
                    </div>
                </div>
            </div>
        </div>
    )
}