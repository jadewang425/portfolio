import { HiArrowNarrowRight } from 'react-icons/hi'
export default function Home() {
    return (
        <div name='home' className='w-full h-screen'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p>Hello! My name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold'>Jade Wang</h1>
                <h2 className='text-4xl sm:text-7xl font-bold'>I'm a full-stack developer.</h2>
                <p className='py-4 max-w-[700px]'>I'm passionate in fron-end development with a 7-year background in business and operations in luxury brands.</p>
                <div>
                    <button className='border-black border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:text-white'>Check Out My Projects <HiArrowNarrowRight className='ml-3'/></button>
                </div>
            </div>
        </div>
    )
}