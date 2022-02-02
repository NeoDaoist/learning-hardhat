const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GuildFormer", function () {

  it("Should be able to form new Guild", async function() {
    const name = "Blacksmiths";
    const balance = 1;
    const addr1 = "0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199";
    const addr2 = "0xdd2fd4581271e230360230f9337d5c0430bf44c0";
    const imageURI = "imageURI";
    const themeSongURI = "themeSongURI";

    const GuildFormer = await ethers.getContractFactory("GuildFormer");
    const guild = await GuildFormer.deploy(
      name,
      balance,
      addr1,
      addr2,
      imageURI,
      themeSongURI
    );
    await guild.deployed();

    expect(await guild.getGuildName()).to.equal(name);
  });



  // it("Should return the new greeting once it's changed", async function () {
  //   const Greeter = await ethers.getContractFactory("Greeter");
  //   const greeter = await Greeter.deploy("Hello, world!");
  //   await greeter.deployed();

  //   expect(await greeter.greet()).to.equal("Hello, world!");

  //   const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

  //   // wait until the transaction is mined
  //   await setGreetingTx.wait();

  //   expect(await greeter.greet()).to.equal("Hola, mundo!");
  // });

});
