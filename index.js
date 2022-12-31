import axios from "axios";
// we use `import axios from "axios"` which is another way of saying `const axios = require("axios")`
// it is jsut better supported in the browser!

const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function(){
    console.log("click click click");
    const userAddress = document.getElementById("user-address");
    console.log(userAddress.value);



    // my alchemy API info.
    const apiKey = "wfgshFmhSqarVVlO5sMQUE-nhymDahvY";
    const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
    const ownerAddr = userAddress.value;

    var config = {
        method: 'get',
        url: `${baseURL}?owner=${ownerAddr}`
    };

    axios(config).then(response => {
 
        console.log(response.data);
        // loop
        let loopDiv = "";
        let totalFloor1 = 0;  

            for(let i=0; i < response.data.ownedNfts.length; i++) {

                const displayNft = document.getElementById("all-nfts");
                const nft = response.data.ownedNfts[i];
                if(!nft.media[0].gateway) {
                    continue;
                };


                const nftImage = response.data.ownedNfts[i].media[0].gateway;
                console.log(nftImage);

                const link = response.data.ownedNfts[i].contract.address;
                console.log(link);
                const floorPrice = response.data.ownedNfts[i].contractMetadata.openSea.floorPrice || 0;
                totalFloor1 = totalFloor1 + floorPrice;
                console.log(floorPrice);
                loopDiv += `<div><a href = "https://opensea.io/assets/ethereum/${link}"><img src = "${nftImage}"></img></a> <br>Opensea Floor Price: ${floorPrice}</div>`;
                displayNft.innerHTML = loopDiv;
        

            }
        const totalFloor = document.getElementById("total-floor");
        totalFloor.innerHTML = `Total floor price: ${totalFloor1}`;
        console.log(totalFloor1);





})



})

const resetButton = document.getElementById("reset-button");

resetButton.addEventListener("click", function(){
    document.getElementById("user-address").value ="";
})

