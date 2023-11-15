export default function Contact () {
    return (
        <div name='contact' className="w-full h-screen flex justify-center items-center p-14 mx-auto">
            <form method='POST' action="https://getform.io/f/97dba2eb-5a04-4955-b636-5a25ee210848" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8 mt-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-black">Contact</p>
                    <p className="py-4">Contact me through the form below or send me an email at jadewang425@gmail.com</p>
                </div>
                <input className="p-2 bg-gray-100" type="text" placeholder="Name" name="name" />
                <input className="my-4 p-2 bg-gray-100" type="email" placeholder="Email" name="email" />
                <textarea className="p-2 bg-gray-100" id="" rows="10" placeholder="Message" name="message"></textarea>
                <button className="border-2 border-black px-4 py-3 my-8 mx-auto hover:text-white hover:bg-black">Send!</button>
            </form>
        </div>
    )
}