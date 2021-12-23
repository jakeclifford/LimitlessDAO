import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js"

const voteModule = sdk.getVoteModule(
    "0xd6b82447F080d2124Cb817272fd53D9879076ff0"
);

const tokenModule = sdk.getTokenModule(
    "0x5a8ccbd265462123c095af9c9a9187123f946b12"
);

(async () => {
    try {
        const amount = 420000;
        await voteModule.propose(
            "should the DAO mint an additional " + amount + " tokens into the tresury?",
            [
                {
                    nativeTokenValue: 0,
                    transactionData: tokenModule.contract.interface.encodeFunctionData(
                        "mint",
                        [
                            voteModule.address,
                            ethers.utils.parseUnits(amount.toString(), 18),
                        ]
                    ),
                    toAddress: tokenModule.address
                },
            ]
        );
        console.log("✅ Successfully created proposal to mint tokens")
    } catch (error) {
        console.error("failed to create first propasal", error);
        process.exit(1);
    }

    try {
        const amount = 6900;
        await voteModule.propose(
            "Should the DAO transfer " +
            amount + " tokens from the treasury to " +
            process.env.WALLET_ADDRESS  + " for being awsome?",
            [
                {
                    nativeTokenValue: 0,
                    transactionData: tokenModule.contract.interface.encodeFunctionData(
                        "transfer",
                        [
                            process.env.WALLET_ADDRESS,
                            ethers.utils.parseUnits(amount.toString(), 18),
                        ]
                    ),
                    toAddress: tokenModule.address
                }
            ]
        )
        console.log(
            "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!");
    } catch (error) {
        console.error("failed to create first proposal", error)
    }
})()