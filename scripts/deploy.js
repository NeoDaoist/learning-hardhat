// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { EtherscanProvider } = require("@ethersproject/providers");
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // Create Guild vars
  const name = "Blacksmiths";
  const balance = 1;
  const addr1 = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199";
  const addr2 = "0xdd2fd4581271e230360230f9337d5c0430bf44c0";
  const imageURI = "imageURI";
  const themeSongURI = "themeSongURI";

  // We get the contract to deploy
  const GuildFormer = await hre.ethers.getContractFactory("GuildFormer");
  const guild = await GuildFormer.deploy(
    name,
    balance,
    addr1,
    addr2,
    imageURI,
    themeSongURI
  );

  await guild.deployed();

  console.log("Guild formed at:", guild.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
