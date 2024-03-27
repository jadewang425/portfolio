import { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Resume from '../assets/Jade_Resume.pdf'
import Logo from '../assets/logo_sm.png'

export default function NavBar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-white nav-bar">
            <div>
                <Link to="home" smooth={true} duration={500} className='cursor-pointer'>
                    <img src={Logo} alt="logo" className='w-[60px]' />
                </Link>
            </div>
            {/* menu */}
            <div className='hidden md:flex'>
                <div className='self-center'>
                    <Link to="home" smooth={true} duration={500} className='hover:border-b-4 nav-item'>
                        Home
                    </Link>
                </div>
                <div className='self-center'>
                    <Link to="about" smooth={true} duration={500} className='hover:border-b-4 nav-item'>
                        About
                    </Link>
                </div>
                <div className='self-center'>
                    <Link to="skills" smooth={true} duration={500} className='hover:border-b-4 nav-item'>
                        Skills
                    </Link>
                </div>
                <div className='self-center'>
                    <Link to="projects" smooth={true} duration={500} className='hover:border-b-4 nav-item'>
                        Projects
                    </Link>
                </div>
                <div className='self-center'>
                    <Link to="contact" smooth={true} duration={500} className='hover:border-b-4 nav-item '>
                        Contact
                    </Link>
                </div>
            </div>


            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars />: <FaTimes />}
            </div>
            {/* Mobile menu */}
            <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center'}>
                <li className='py-4 text-4xl hover:border-b-4'>
                    <Link to="home" smooth={true} duration={500} onClick={handleClick}>
                        Home
                    </Link>
                </li>
                <li className='py-4 text-4xl hover:border-b-4'>
                    <Link to="about" smooth={true} duration={500} onClick={handleClick}>
                        About
                    </Link>
                </li>
                <li className='py-4 text-4xl hover:border-b-4'>
                    <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
                        Skills
                    </Link>
                </li>
                <li className='py-4 text-4xl hover:border-b-4'>
                    <Link to="projects" smooth={true} duration={500} onClick={handleClick}>
                        Projects
                    </Link>
                </li>
                <li className='py-4 text-4xl hover:border-b-4'>
                    <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0 text-white'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#64aef9]'>
                        <a href="https://www.linkedin.com/in/jade-c-w/" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full'>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-400'>
                        <a href="https://github.com/jadewang425" target="_blank" rel="noreferrer" className='flex justify-between items-center w-full'>
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-400'>
                        <a href="mailto:jadewang425@gmail.com" className='flex justify-between items-center w-full'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-yellow-500'>
                        <a href={Resume} target="_blank" rel="noreferrer noopener" className='flex justify-between items-center w-full'>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}