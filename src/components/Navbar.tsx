import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export default function Navbar() {
  return (
      <div className="bg-black flex flex-row text-white justify-between p-3 pb-9">
        <div>
          <h1>
            <Image
              alt="home"
              src={"./home.svg"}
              width={50}
              height={20}
              className="mr-2"
            />
          </h1>
        </div>

        <div>
          <div className="flex flex-row justify-between ">
            <button>
            <p className="pr-7">About</p>
            </button>
            <button>
            <p className="pr-7">Collection</p>
            </button>
            <button>
            <p className="pr-7">FAQs</p>
            </button>
            
            <div className="pr-7">
              <ConnectButton
                accountStatus={{
                  smallScreen: "avatar",
                  largeScreen: "full",
                }}
              />
            </div>

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
      </div>
  );
}
