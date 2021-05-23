import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header>
      <Image
        onClick={() => router.push("/")}
        height={40}
        className="cursor-pointer"
        width={120}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Google_logo_%282013-2015%29.svg/1024px-Google_logo_%282013-2015%29.svg.png"
      />
    </header>
  );
}
