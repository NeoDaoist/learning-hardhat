//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

/////////////////////////////////////////////////////////////////////////////////////
//                                                                                 //
//                                                                                 //
//      .oooooo.    ooooo     ooo ooooo ooooo        oooooooooo.    .oooooo..o     //
//     d8P'  `Y8b   `888'     `8' `888' `888'        `888'   `Y8b  d8P'    `Y8     //
//    888            888       8   888   888          888      888 Y88bo.          //
//    888            888       8   888   888          888      888  `"Y8888o.      //
//    888     ooooo  888       8   888   888          888      888      `"Y88b     //
//    `88.    .88'   `88.    .8'   888   888       o  888     d88' oo     .d8P     //
//     `Y8bood8P'      `YbodP'    o888o o888ooooood8 o888bood8P'   8""88888P'      //
//                                                                                 //
//                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////

contract GuildFormer {

    Guild private guild;

    struct Guild {
        string name;
        uint256 balance;
        address currentCommissioner;
        address previousCommnissioner;
        string imageURI;
        string themeSongURI;
    }

    constructor(
        string memory _name,
        uint256 _balance,
        address _currentCommissioner,
        address _previousCommissioner,
        string memory _imageURI,
        string memory _themeSongURI
    ) {
        console.log("Forming a Guild of", _name);

        guild = Guild(
            _name,
            _balance,
            _currentCommissioner,
            _previousCommissioner,
            _imageURI,
            _themeSongURI
        );
    }

    function getGuildName() public view returns (string memory) {
        return guild.name;
    }

    function setGuildName(string memory _name) public {
        console.log("Changing guild name from '%s' to '%s'", guild.name, _name);
        guild.name = _name;
    }



    //mapping(string => Guild) private guilds;

    // guilds["blacksmiths"] = Guild(
    //         "blacksmiths",
    //         1 ether,
    //         0x8626f6940e2eb28930efb4cef49b2d1f2c9c1199,
    //         0xdd2fd4581271e230360230f9337d5c0430bf44c0,
    //         "https://bafkreihs5mtuztqlhiewpuxwlrzuxf3xtqdi5i7s4b5tlnbrcxkz5gnkau.ipfs.dweb.link/",
    //         "https://bafybeidgorr7jwq4ogls3dbrwmvc4ly6ydhiiotbureo4e3any2322tjla.ipfs.dweb.link/"
    //     );
}
