export default function About () {
    return (
        <div name='about' className="w-full h-screen lg:mx-[60px]">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-black"> About</p>
                    </div>
                    <div></div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Hi, I'm Jade, nice to meet you.</p>
                    </div>
                    <div>
                        <p>I am a passionate software engineer specialized in frontend development. I enjoy creating aesthetic pleasing and user-friendly web interfaces. <br/><br/>I am a collaborative problem-solver that previously worked in e-commerce for luxury brands. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}