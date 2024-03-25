import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
import Headshot from '../assets/portfolio_pic.jpg'

export default function Home() {
    return (
        <div name='home' className='w-full h-screen'>
            <div className='max-w-[1000px] mx-auto px-4 lg:px-14 flex flex-col justify-center h-full'>
                <img src={Headshot} alt="Jade" className='w-[130px] mb-4 rounded-full'/>
                <p>Hello! My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold'>Jade Wang</h1>
                <h2 className='text-4xl sm:text-7xl font-bold'>I'm a full-stack developer.</h2>
                <p className='py-4 max-w-[700px]'>I'm passionate about learning emerging technologies and problem-solving complex issues. Proven track record of collaborating effectively with multi-functional teams to implement new technologies and troubleshooting. </p>
                <div>
                    <Link to='projects' smooth={true} duration={500}>
                        <button className='border-black border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:text-white'>
                            Check Out My Projects <HiArrowNarrowRight className='ml-3'/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}