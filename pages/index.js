import Head from "next/Head";
import Avatar from "../components/Avatar";
export default function Home() {
  return (
    <div>
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
        </div>
        {/* icon */}
        <Avatar className="rounded-full h-10 cursor-pointer transition duration-150 transform  hover:scale-150" url="https://yt3.ggpht.com/yti/ANoDKi6Q9l1vIxuf7fPiHUtE3wIwe7mUxG-RUlmaJw=s88-c-k-c0x00ffffff-no-rj-mo" />
        {/* Avatar */}
      </header>
    </div>
  );
}
