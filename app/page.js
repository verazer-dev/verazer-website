"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-center px-4">
      <div>
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/logo.png" // place your logo in /public/logo.png
            alt="Logo"
            width={250}
            height={250}
            className="mx-auto"
          />
        </div>

        {/* Coming Soon Text */}
        <h1 className="text-3xl font-bold text-[#e9554d] mb-4">
          Coming Soon
        </h1>
        <p className="text-gray-700 text-lg max-w-md mx-auto">
          We’re working hard to launch our website. Stay tuned!
        </p>
      </div>
    </div>
  );
}
