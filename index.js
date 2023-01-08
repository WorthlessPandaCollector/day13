import axios from "axios";
import { getDefaultProvider } from "ethers";
const getAPI = require("./api.js");
const createAndAppendElementsAndClasses = require('./createAndAppendElementsAndClasses');



const submitButton = document.getElementById("submit-button");

const allTheNFTs = document.getElementById('all-nfts');


submitButton.addEventListener("click", function () {
    console.log("click click click");
    const userAddress = document.getElementById("user-address");
    console.log(userAddress.value);
    // my alchemy API info.

    getAPI(userAddress).then(response => {

        console.log(response.data);
        createAndAppendElementsAndClasses(response);
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















// // reset input 
// const resetButton = document.getElementById("reset-button");
// resetButton.addEventListener("click", function(){
//     document.getElementById("user-address").value ="";
// })

