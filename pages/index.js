import Head from "next/Head";
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
        {/* avatar */}
      </header>
    </div>
  );
}
