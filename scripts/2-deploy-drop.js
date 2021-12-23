import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x131753581087daf08F5714267F68654754617331");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "LimitlessDAO Geneisis",
      description: "This NFT grants the holder Access to the LimitlessDAO, a place where they can discover their unlimited potential",
      image: readFileSync("scripts/assets/2.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()