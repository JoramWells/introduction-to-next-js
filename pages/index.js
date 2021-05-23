import Head from "next/Head";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/router";
// import Avatar from "../components/Avatar";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Footer from "../components/Footer";
export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);

  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
        <Head>
          <title>Wells</title>
        </Head>
        {/* Header */}
        <header className="flex w-full justify-between p-5 text-sm text-gray-700">
          {/* left */}
          <div className="flex space-x-4 items-center">
            <p className="link">About</p>
            <p className="link">Store</p>
          </div>
          {/* right */}
          <div className="flex space-x-4 items-center">
            <p className="link">Gmail</p>
            <p className="link">Images</p>
            <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          </div>

          {/* icon */}
          {/* <Avatar className="rounded-full h-10 cursor-pointer transition duration-150 transform  hover:scale-150" url="https://yt3.ggpht.com/yti/ANoDKi6Q9l1vIxuf7fPiHUtE3wIwe7mUxG-RUlmaJw=s88-c-k-c0x00ffffff-no-rj-mo" /> */}
          {/* Avatar */}
        </header>
        <form className="flex flex-col items-center mt-44 flex-grow">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/1024px-Google_logo_%282013-2015%29.svg.png"
            height={100}
            width={300}
          />
          <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg">
            <SearchIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500" />

            <input ref={searchInputRef} type="text" className="focus:outline-none flex-grow" />
            <button onClick={search}>search</button>
            <MicrophoneIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer text-gray-500" />
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}
