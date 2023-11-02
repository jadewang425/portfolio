import { FaBars, FaTimes } from 'react-icons/fa'

export default function NavBar() {
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
            <div>NavBar Logo</div>
            {/* menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>


            {/* Hamburger */}
            <div className='hidden'>
                <FaBars />
            </div>
            {/* Mobile menu */}
            <ul className='hidden'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>

            {/* Social Icons */}
            <div className='hidden'></div>
        </div>
    )
}