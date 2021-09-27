import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from '../components/Footer';
import { useRef } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function Home() {
  const searchInputRef = useRef(null);
  const router = useRouter();


  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <Head>
        <title>Explore engine.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <header className="flex w-full p-5 justify-between items-center
      text-sm text-gray-700
      ">
        <div className=" space-x-4">
          <p
            onClick={() => router.push("/about")}
            className="link text-lg rounded-full py-1 px-3 bg-blue-100">About</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p
            onClick={() => router.push("/gmail")}
            className="link rounded-full bg-blue-100 py-1 px-3 text-lg">Gmail</p>

          {/* Iocn */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full
          hover:bg-gray-100 cursor-pointer" />

          {/* avatar */}
          <Avatar url="https://louisville.edu/enrollmentmanagement/images/person-icon/image" />
        </div>
      </header>

      {/* body */}
      <form className="flex flex-col items-center mt-30
      flex-grow w-4/5 sm:mt-40">
        <h1
          onClick={() => router.push("/about")}
          className=" font-mono... text-5xl border-blue 
        rounded-full p-2 px-5 pb-5 mb-7 bg-blue-500 cursor-pointer">explore.it</h1>
        <div className="flex w-full mt-5 hover:shadow-lg
        focus-within:shadow-lg max-w-md rounded-full border border-blue-200 
        px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl
        ">
          <SearchIcon className="h-5 ml-3 text-blue-500 " />
          <input
            placeholder="travel here! in order to learn about it."
            ref={searchInputRef}
            type="text" className="flex-grow bg-blue-50 outline-none pl-2" />
          <MicrophoneIcon className="h-5 text-blue-500" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center
        mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button
            onClick={search}
            className="btn text-blue-500 text-lg" >Search Here.!</button>
        </div>
      </form>

      {/* footer */}
      <Footer />
    </div>
  )
}
