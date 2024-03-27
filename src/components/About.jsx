import JJ from '../assets/pets/jj.png'
import PP from '../assets/pets/pp.png'
import Socks from '../assets/pets/socks.png'


export default function About () {
    return (
        <div name='about' className="w-full h-screen">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full px-4 lg:px-14 grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8">
                        <p className="text-4xl font-bold inline border-b-4 border-black"> About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full px-4 lg:px-14 grid sm:grid-cols-2 gap-8">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi, I'm Jade, nice to meet you.</p>
                    </div>
                    <div className="flex flex-col gap-2 text-justify">
                        <div>
                            <p>In my journey in software development, I am deeply passionate about leveraging technology to solve complex problems and improve people’s lives. I strive to write clean, efficient code that is scalable and maintainable, always seeking to learn and apply the latest industry best practices and technologies.</p>
                            <p>Prior to my career pivot, I spent over 6 years working in e-commerce and operations for luxury brands. It was during this time that I discovered my passion for programming and decided to enroll into a 12-week software engineering bootcamp to pursue a career in tech industry. <br/></p>
                        </div>
                        <div>
                            <p>Beyond work, I am a proud cat mom of 3:<br/></p>
                            <div className="flex m-4 justify-between text-center text-white text-xl">
                                <div style={{backgroundImage: `url(${JJ})`}} className="h-[100px] w-[100px] flex justify-center group content-div rounded-lg hover:bg-yellow-500 hover:rounded-full">
                                    <div className='flex self-center opacity-0 group-hover:opacity-100'>
                                        <p>JJ</p>
                                    </div>
                                </div>
                                <div style={{backgroundImage: `url(${PP})`}} className="h-[100px] w-[100px] flex justify-center group content-div rounded-lg hover:bg-yellow-950 hover:rounded-full">
                                    <div className='flex self-center opacity-0 group-hover:opacity-100'>
                                        <p>Princess</p>
                                    </div>
                                </div>
                                <div style={{backgroundImage: `url(${Socks})`}} className="h-[100px] w-[100px] flex justify-center group content-div rounded-lg hover:bg-gray-400 hover:rounded-full">
                                    <div className='flex self-center opacity-0 group-hover:opacity-100'>
                                        <p>Socks</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>Despite my furry responsibilities, I find time to escape the city and enjoy some fresh air exploring hiking trails in Upstate New York. Message me for my personal favorite spots!</p>
                        </div>
                        <div>
                            <p>I am thrilled to see what the future holds for my skills and endeavors!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}