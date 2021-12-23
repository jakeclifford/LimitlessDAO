import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xD79D7fb7A31Dc6daA61Fb31Daf367241BB1947b7",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "You are Limitless",
        description: "This NFT grants the holder Access to the LimitlessDAO, a place where they can discover their unlimited potential",
        image: readFileSync("scripts/assets/LIMITLESS.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()