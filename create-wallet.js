const { ethers } = require("ethers");
const fs = require("fs");
require("dotenv").config();

async function main() {
  const WALLET_PASSWORD = process.env.WALLET_PASSWORD;
  const wallet = ethers.Wallet.createRandom();
  const encryptedWallet = await wallet.encrypt(WALLET_PASSWORD);

  console.log("Generating wallet...");
  fs.writeFileSync("./encrypted_wallet.json", encryptedWallet);
  console.log(
    `
    A wallet has been generated and saved in this folder as "encrypted_wallet.josn".
    Please make some backups of it and save them somewhere safe.
    If you lose it you won't get access to your wallet in any way.
    Please remember the password used. Without it is not possible to decrypt the json file.
    `
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
