import sdk from "./1-initialize-sdk.js";

const tokenModule = sdk.getTokenModule(
    "0x5a8ccbd265462123c095af9c9a9187123f946b12"
);

(async () => {
    try {
        console.log(
            "Roles that exist right now,",
            await tokenModule.getAllRoleMembers()
        );

        await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
        console.log(
            "Roles after revoking oursleves",
            await tokenModule.getAllRoleMmebers()
        );
        console.log("✅ Successfully revoked our superpowers from the ERC-20 contract");
    } catch (error) {
        console.error("failed to revoke oursleves from the DAO treasurty, error")
    }
})();