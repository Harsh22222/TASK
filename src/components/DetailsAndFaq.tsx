import React from 'react';

export default function DetailsAndFaq(){
    return(
        <div className='bg-black text-white my-5 py-9 px-5 my-11'>
            <h1 className='text-3xl font-extrabold pb-6'>Details and FAQ</h1>
            
            <div className='pt-5'>
                <div className='flex flex-row justify-between border-t border-white px-3 py-5'>
                    <p>Where are the images for the punks stored?</p>

                    <p>When originally released, the actual images of the punks were too large to store on <br />the blockchain, so we took a hash of the composite image of all the punks and <br /> embeded it into the contract. You can verify that the punks being managed by the <br /> Ethereum contract are the True Official Genuine CryptoPunks™ by calculating an <br /> SHA256 hash on the cryptopunks image and comparing it to the hash stored in the <br /> contract.Since then, due to some clever compression ideas and some help from <br /> friends of the punks we have managed to put the entire image and attribute data <br /> fully on chain. You can read more about the mechanisms and details of the process in <br /> the <a href="" className='underline'> announcement blog post</a> . </p> 
                </div>

                <div className='flex flex-row justify-between border-t border-white px-3 py-5'>
                    <p>Are the punks an ERC-721 token?</p>

                    <p>No. The CryptoPunks pre-date the ERC-721 standard and are a custom contract, <br /> that means it does not comply with any standards. They are almost an <a className='underline' href="">ERC20 token</a>. <br /> We support the methods that provide your balance so you can watch CryptoPunks <br /> as a token in your wallet and see how many you own. None of the other methods <br />are the same since you are not transferring a simple balance, but need to reference <br /> which specific Punk you want to work with. </p> 
                </div>

                <div className='flex flex-row justify-between border-t border-white px-3 py-5'>
                    <p>Where does the market data on this site come from?</p>

                    <p>The prices, bids and sales you see on this site are loaded from the Cryptopunks contract <br /> on the Ethereum blockchain. Because the Cryptopunks pre-date the ERC-721 standard <br /> (and all third party NFT marketplaces) we also needed to write a market so the punks <br /> could be transacted. We have no control over the contract governing this market, and  <br /> have no access to any additional data beyond what the blockchain provides. In fact <br /> anyone else could write a web front end for it.</p>
                </div>

                <div className='flex flex-row justify-between border-t border-white px-3 py-5'>

                    <p>Do you charge any fees for transactions?</p>
                    
                    <p>No. We charge no fees for Cryptopunks transacted through the built-in market beyond <br /> the ones charged by Ethereum (gas).The contract source and more technical details are <br /> available <a href="" className='underline'>on Github</a>.</p>

                </div>



            </div>

        </div>

    )
}