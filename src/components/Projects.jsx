import PawCircle from '../assets/projects/paw-circle.png'

export default function Projects () {
    return (
        <div name='projects' className="w-full md:h-screen lg:mx-[60px]">
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-black">Projects</p>
                    <p className="py-4">Check out some of my recent projects</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div  style={{backgroundImage: `url(${PawCircle})`}} className="shadow-lg shadow-[#040c1646] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px]">
                        <div className='opacity-0 group-hover:opacity-100 text-center px-4'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                MERN-Stack Application
                            </span>
                            <div className='pt-8'>
                                <a href="https://paw-circle.netlify.app/">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/jadewang425/paw-circle-react">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div  style={{backgroundImage: `url(${PawCircle})`}} className="shadow-lg shadow-[#040c1646] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px]">
                        <div className='opacity-0 group-hover:opacity-100 text-center px-4'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                MERN-stack Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}