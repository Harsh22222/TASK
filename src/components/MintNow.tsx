import React from "react";

export default function MintNow() {
  return (
    <div className="bg-black mt-9 py-9">
      <h2 className="flex justify-center text-2xl">
        The project that inspired the modern{" "}
        <b className="pl-1"> CryptoArt movement </b>
      </h2>

      <div className="pt-5">
        <p className="flex justify-center">
          10,000 unique collectible characters with proof of ownership stored{" "}
        </p>
        <p className="flex justify-center">on the Ethereum blockchain.</p>
      </div>

      <div className="mt-5 flex justify-center">
        <button className="py-2 px-3 bg-white rounded-full text-black hover:bg-[#f1f5f9] hover:text-[#0f172a] hover-text-transform:uppercase ">
          Mint now
        </button>
      </div>
    </div>
  );
}
