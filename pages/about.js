import { useRouter } from 'next/router';

function About() {
    const router = useRouter();
    return (
        <div className="bg-blue-50">
            <h2
                onClick={() => router.push("/")}
                className="link text-blue-500 font-serif... font-medium text-lg border-blue
                text-center bg-blue-200 cursor-pointer py-3 ">Home</h2>
            <div className="flex items-center h-screen justify-around">

                <h1 className="max-w-md font-medium text-2xl">Welcome to the Search Engine with loads of information around the Globe.</h1>
                <div>
                    <p className=" max-w-md text-center">This is Devoloped and designed by <span className="text-xl text-blue-500 cursor-pointer">Praneeth Alluri</span> with <span className="text-red-500 text-xl">nextJS </span>
                        and <span className="text-yellow-500 text-xl">Tailwind CSS</span>  using <span className="text-green-500 text-xl ">Google API</span></p>
                </div>

            </div>
        </div>
    )
}

export default About;
