import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x131753581087daf08F5714267F68654754617331");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "Limitless",
            symbol: "LMTLSS",
        });
        console.log(
            "Successfully deployed token module, address:",
            tokenModule.address,
        )
    } catch (error) {
    console.error("failed to deploy token module", error);
    }
})();