import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div>

      <div className="bg-black text-white p-3 flex flex-row justify-between pt-7 pb-12 mt-9 mb-11 border-b border-white ">
        <div className="text-2xl text-extrabold">
            
          <h3>CryptoPunks</h3>
        </div>

        <div className="flex flex-row justify-between">
        <button className="pr-3">Buy a Punk</button>
          <button className="pl-3">View Full Collection</button>
        </div>

        <div className="flex flex-row">
          <div className="pr-7">
            <button>
              <Image
                alt="twitter"
                src={"./twitter.svg"}
                width={20}
                height={17}
                className="mt-2"
              />
            </button>
          </div>
          <div>
            <button>
              <Image
                alt="twitter"
                src={"./discord.svg"}
                width={20}
                height={17}
                className="mt-2"
              />
            </button>
          </div>
        </div>
      </div>
    
    <div className="flex flex-row justify-between pt-9 pb-5 px-7 mt-11">
        <p>© 2021 CryptoPunks. All right reserved.</p>
        <button>Privacy Policy</button>
        <button>Terms of Service</button>
        <button>Cookies Settings</button>
    </div>

    </div>
  );
}
