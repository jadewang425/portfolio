import PawCircle from '../assets/projects/paw-circle.png'
import GymGrid from '../assets/projects/gym-grid.png'
import TripPlanner from '../assets/projects/trip-planner.png'
import MemoryGame from '../assets/projects/memory-game.png'

export default function Projects () {
    return (
        <div name='projects' className="w-full md:h-screen">
            <div className='max-w-[1000px] mx-auto px-4 lg:px-14 flex flex-col justify-center w-full h-full'>
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-black">Projects</p>
                    <p className="py-4">Check out some of my recent projects</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className='shadow-lg shadow-[#040c1646] rounded-md h-[250px] relative max-w-xs overflow-hidden bg-cover bg-no-repeat'>
                        {/* <div className="group container rounded-md flex justify-center items-center mx-auto content-div h-[250px]">
                        </div> */}
                        <img 
                            src="https://i.imgur.com/1sTnVAZ.png"
                            alt="BARK Animal Rescue website Redesign"
                            className='image h-full block'
                        />
                        <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden bg-black bg-fixed opacity-0 transition duration-300 ease-in-out project-text-wrapper">
                            <span className='text-2xl font-bold tracking-wider'>
                                BARK Animal Rescue Website Redesign
                            </span>
                            <div className='pt-4'>
                                <a href="https://barkanimalrescue.netlify.app/" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/jadewang425/winter-hackathon-23" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div  style={{backgroundImage: `url(${PawCircle})`}} className="shadow-lg shadow-[#040c1646] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px]">
                        <div className='opacity-0 group-hover:opacity-100 text-center px-4'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                MERN-Stack Application
                            </span>
                            <div className='pt-8'>
                                <a href="https://paw-circle.netlify.app/" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/jadewang425/paw-circle-react" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div  style={{backgroundImage: `url(${GymGrid})`}} className="shadow-lg shadow-[#040c1646] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px]">
                        <div className='opacity-0 group-hover:opacity-100 text-center px-4'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Django & Python
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://gymgrid.onrender.com/" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/jadewang425/gym_grid" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div  style={{backgroundImage: `url(${TripPlanner})`}} className="shadow-lg shadow-[#040c1646] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px]">
                        <div className='opacity-0 group-hover:opacity-100 text-center px-4'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Express.js & MongoDB
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://tripplanner.fly.dev/" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/jadewang425/trip-planner" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div  style={{backgroundImage: `url(${MemoryGame})`}} className="shadow-lg shadow-[#040c1646] group container rounded-md flex justify-center items-center mx-auto content-div h-[250px]">
                        <div className='opacity-0 group-hover:opacity-100 text-center px-4'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                JavaScript, CSS & HTML
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://jadewang425.github.io/memory-game/" target="_blank" rel="noreferrer">
                                    <button className='text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="https://github.com/jadewang425/memory-game" target="_blank" rel="noreferrer">
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