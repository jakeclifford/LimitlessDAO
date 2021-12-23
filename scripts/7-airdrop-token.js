import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js"

const bundleDropModule = sdk.getBundleDropModule(
    "0xD79D7fb7A31Dc6daA61Fb31Daf367241BB1947b7",
);

const tokenModule = sdk.getTokenModule(
    "0x5a8ccbd265462123c095af9c9a9187123f946b12",
);

(async () => {
    try {
        const walletAddresses = await bundleDropModule.getAllClaimerAddresses("0")

        if (walletAddresses.length === 0) {
            console.log(
                "No NFTs have been claimed!"
            );
            process.exit(0)
        }
        const airdropTargets = walletAddresses.map((address) => {
            const randomAmount = Math.floor(Math.random() * (10000 - 100 + 1) + 1000);
            console.log("✅ Going to airdrop", randomAmount, "tokens to", address)

            const airdropTarget = {
                address,
                amount: ethers.utils.parseUnits(randomAmount.toString(), 18)
            }
            return airdropTarget
        })
        console.log("Starting Airdrop!!")
        await tokenModule.transferBatch(airdropTargets)
        console.log("✅ Successfully airdropped tokens to all the holders of the NFT!");
  } catch (err) {
    console.error("Failed to airdrop tokens", err);
  }
})()