import sdk from "./1-initialize-sdk.js"

const appModule = sdk.getAppModule(
    "0x131753581087daf08F5714267F68654754617331"
);

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            name: "LimitlessDAO Proposals",
            votingTokenAddress: "0x5a8ccbd265462123c095af9c9a9187123f946b12",
            proposalStartWaitTimeInSeconds: 0,
            proposalVotingTimeInSeconds: 24 * 60 * 60,
            votingQuorumFraction: 0,
            minimumNumberOfTokensNeededToPropose: "0",
        });

        console.log("✅ Successfully deployed vote module, address:",
        voteModule.address,)

    }catch (err) {
        console.log("Failed to deploy vote module", err)
    }
})()