import React from "react";

export default function MeetThePunks() {
  return (
    <div className="bg-black text-white flex flex-row justify-between my-11 py-9 px-5">

      
        <h1 className="text-2xl font-bold">Meet The Punks</h1>
      

      
        <div className="flex flex-col">
            <div className="pb-5">
                <p>
                The CryptoPunks are 24x24 pixel art images, generated <br />{" "}
                algorithmically. Most are punky-looking guys and girls, but there{" "}
                <br /> are a few rarer types mixed in: Apes, Zombies and even the
                odd <br /> Alien. Every punk has their own profile page that shows
                their <br /> attributes as well as their ownership/for-sale
                status.
                </p>
            </div>
            
            <div className="flex flex-row">
                <button className="bg-white py-2 px-4 text-black rounded-full mr-5">
                Buy a punk
                </button>
                <button className="border py-2 px-4 border-white rounded-full ">
                View full collection
                </button>
            </div>


            
        </div>
        

    </div>
  );
}
