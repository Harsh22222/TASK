import React from "react";
import Image from "next/image";

export default function FeaturedIn() {
  return (
    <div className="bg-black text-white my-9">
      <h1 className="flex justify-center text-2xl font-semibold mb-9">Featured in</h1>

      <div className="flex flex-row justify-evenly">
        {/* 1 */}
      <div className="border border-white rounded-lg mt-3">
            <div className="border-b p-3">
                <div>
                <h3 className="font-extrabold pb-3">Mashable</h3>
                <p>
                This ethereum-based project <br /> could change how we think <br /> about digital
                art
                </p>
                </div>
            </div>

            <div className="flex flex-row justify-between p-3">
            Read article
            <button>
                <Image
                alt="Redirect"
                src={"./Redirect.svg"}
                width={20}
                height={20}
                />
            </button>
            </div>
        </div>

        {/* 2 */}
        <div className="border border-white rounded-lg mt-3 ">
            <div className="border-b p-3">
                <div>
                <h3 className="font-extrabold pb-3">Mashable</h3>
                <p>
                This ethereum-based project <br /> could change how we think <br /> about digital
                art
                </p>
                </div>
            </div>

            <div className="flex flex-row justify-between p-3">
            Read article
            <button>
                <Image
                alt="Redirect"
                src={"./Redirect.svg"}
                width={20}
                height={20}
                />
            </button>
            </div>
        </div>
        {/* 3 */}
        <div className="border border-white rounded-lg mt-3 ">
            <div className="border-b p-3">
                <div>
                <h3 className="font-extrabold pb-3">Mashable</h3>
                <p>
                This ethereum-based project <br /> could change how we think <br /> about digital
                art
                </p>
                </div>
            </div>

            <div className="flex flex-row justify-between p-3">
            Read article
            <button>
                <Image
                alt="Redirect"
                src={"./Redirect.svg"}
                width={20}
                height={20}
                />
            </button>
            </div>
        </div>


        </div>

    </div>
  );
}
