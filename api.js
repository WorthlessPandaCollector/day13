import axios from "axios";


function getAPI(userAddress) {
    const apiKey = "wfgshFmhSqarVVlO5sMQUE-nhymDahvY";
    const baseURL = `https://eth-mainnet.g.alchemy.com/nft/v2/${apiKey}/getNFTs/`;
    const ownerAddr = userAddress.value;

    var config = {
        method: 'get',
        url: `${baseURL}?owner=${ownerAddr}`
    };


    return new Promise(resolve =>
        {
            axios(config).then(response =>
                resolve(response));
        })
}

module.exports = getAPI;

