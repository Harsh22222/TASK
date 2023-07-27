import React from "react";
import Image from "next/image";

export default function MeetThePunks() {
    return(
        <div className="bg-black text-white flex flex-row justify-evenly border-b rounded-2xl py-9 mt-11">
            
            
            <div className="flex flex-col">
                {/* 1 */}
                <div className="bg-[#638596] p-3 rounded-lg my-2">
                Punks with a blue background are not for sale <br /> and have no current bids.
                </div>
                {/* 2 */}
                <div className="border border-white p-3 rounded-lg my-2">
                Punks with a red background are <br /> available for sale by their owner.
                </div>
                {/* 3 */}
                <div className="border border-white p-3 rounded-lg my-2">
                Punks with a purple background have <br /> an active bid on them.
                </div>
            </div>

            <Image
                alt="NFT"
                src={"./NFT.svg"}
                width={400}
                height={400}
                className="mr-5"
            />

        </div>
    )
}