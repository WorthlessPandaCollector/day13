import axios from "axios";
import { getDefaultProvider } from "ethers";
const getAPI = require("./api.js");


const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", function(){
    console.log("click click click");
    const userAddress = document.getElementById("user-address");
    console.log(userAddress.value);



    // my alchemy API info.
    getAPI(userAddress).then(response => {
 
        console.log(response.data);
        // loop
        // let loopDiv = "";
        let totalFloor1 = 0;  
        const allNfts = document.getElementById('all-nfts');
        allNfts.classList.add('nft-card-row');

            for(let i=0; i < response.data.ownedNfts.length; i++) {

                const nft = response.data.ownedNfts[i];

                
                const nftCard = document.createElement('div');
                nftCard.classList.add('nft-card-box');

                if(!nft.media[0].gateway) {
                    continue;
                };

                if(nft.title === "") {
                    nft.title = "No Title";
                };



                // Image container
                const nftImageContainer = document.createElement('img');
                nftImageContainer.classList.add('nft-img-container');

                const nftImageURL = nft.media[0].gateway;
                nftImageContainer.src = nftImageURL;


                // Infobox container
                const nftInfoBox = document.createElement('div');
                nftInfoBox.classList.add('info-box');

                const nftInfoTopTitle = document.createElement('div');
                nftInfoTopTitle.classList.add('info-top-title');

                const nftInfoTopCollection = document.createElement('div');
                nftInfoTopCollection.classList.add('info-top-collection');

                const nftInfoBottomOwner = document.createElement('div');
                nftInfoBottomOwner.classList.add('info-bottom-owner');

                const nftInfoBottomFloor = document.createElement('div');
                nftInfoBottomFloor.classList.add('info-bottom-floor');

                const nftCollection = nft.contractMetadata.openSea.collectionName;
                nftInfoTopCollection.innerHTML = `${nftCollection}`;

                const nftTitle = nft.title;
                nftInfoTopTitle.innerHTML = `${nftTitle}`;

                const nftBalance = nft.balance;
                nftInfoBottomOwner.innerHTML = `Owned: ${nftBalance}`;

                const nftFloor = nft.contractMetadata.openSea.floorPrice;
                nftInfoBottomFloor.innerHTML = `Floor Price: ${nftFloor}`;


                // appendages
                nftInfoBox.appendChild(nftInfoTopTitle);
                nftInfoBox.appendChild(nftInfoTopCollection)
                nftInfoBox.appendChild(nftInfoBottomOwner);
                nftInfoBox.appendChild(nftInfoBottomFloor);
                nftCard.appendChild(nftImageContainer);
                nftCard.appendChild(nftInfoBox);
                allNfts.appendChild(nftCard);

                const floorPriceCalc = nftFloor || 0;
                totalFloor1 = totalFloor1 + floorPriceCalc;
                console.log(floorPriceCalc);


                // loopDiv += `<div class = "nft-stuff"><img src = "${nftImage}"></img></div> <br><div class="floorPrice">Opensea Floor Price: ${floorPrice}</div>`;
                // displayNft.innerHTML = loopDiv;
        

            }


        const totalFloor = document.getElementById("total-floor");
        totalFloor.innerHTML = `Total floor price: ${totalFloor1}`;
        console.log(totalFloor1);





})

})






// const erc20Button = document.getElementById("ERC20-button");

// erc20Button.addEventListener("click", function(){


    
//     const userAddress = document.getElementById("user-address");
//     const apiKey = "wfgshFmhSqarVVlO5sMQUE-nhymDahvY";
//     const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}`;
    
//     const config = {
//         method: "post",
//         url: baseURL,
//         data: {
//             method: "alchemy_getTokenBalances",
//             params: [`${userAddress.value}`]
//         }
//     }



//     axios(config).then((response) => {
//         console.log(response.data)

//         let loopDiv = "";
//         for (let i=0; i <response.data.result.tokenBalances.length;i++){
//             const displayTokenBalance = document.getElementById("all-ercs");
//             const ercAddress = response.data.result.tokenBalances[i].contractAddress;
//             const ercBalanace = response.data.result.tokenBalances[i].tokenBalance;
//             const options = {
//                 method: "post",
//                 url: baseURL,
//                 data:{
//                     method: "alchemy_getTokenMetadata",
//                     params: [`${ercAddress}`]
//                 }
//             }
//             axios.request(options).then(metadata => {
//                 console.log(metadata);
//                 const metaName = metadata.data.result.name;
//                 const metaSymbol = metadata.data.result.symbol;
//                 const decimals = metadata.data.result.decimals;
//                 let math = ercBalanace / Math.pow(10, decimals);
//                 let convertBalance = math.toFixed(2);
//                 console.log(metaName);

//                 loopDiv += `<div> ${metaName} |||| ${metaSymbol} <br> Contract Address: <a href="https://etherscan.io/address/${ercAddress}"> ${ercAddress}</a> -- <br> 
//                 Balance: 
//                 ${convertBalance} ${metaSymbol}
//                 <br>
//                 <br>
//                 </div>`;
//                 displayTokenBalance.innerHTML = loopDiv;

//             });

            



//         }

//     })
    
// })















// reset input 
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", function(){
    document.getElementById("user-address").value ="";
})

