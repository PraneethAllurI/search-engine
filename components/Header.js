import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from "react"
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
        if (!term) return;
        router.push(`/search?term=${term}`);
    }


    return (
        <header className="sticky top-0 pt-2 md:pt-0 bg-white">
            <div className="flex w-full p-0 items-center lg:p-2">
                <h1
                    onClick={() => router.push("/")}
                    className=" font-mono... text-sm md:text-xl border-blue 
        rounded-full p-2 px-5 mx-2 bg-blue-500 cursor-pointer">explore.it</h1>
                <form className="flex flex-grow border-2 px-6 py-3 border-blue-200  rounded-full shadow-lg
            max-w-3xl items-center ">
                    <input type="text"
                        defaultValue={router.query.term}
                        className="flex-grow w-full focus:outline-none "
                        ref={searchInputRef}
                    />
                    <XIcon className="h-7 sm:mr-3 text-blue-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() => (searchInputRef.current.value = " ")} />
                    <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex 
                    text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer" />
                    <button
                        hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar
                    className="ml-auto"
                    url="https://louisville.edu/enrollmentmanagement/images/person-icon/image" />
            </div>

            {/* <HeaderOptions /> */}
        </header>
    )
}

export default Header
