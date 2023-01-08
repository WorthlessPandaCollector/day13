const calcFloorPrice = require('./calcFloorPrice');
const openModal = require('./modal');


// this function creates elements and appends them to display NFTs in the all-nfts element
function createAndAppendElementsAndClasses(response) {

    // grabs all-nfts and sets to variable
    const allNfts = document.getElementById('all-nfts');

    // creates new row class  //main box(flex) for NFTs
    allNfts.classList.add('nft-card-row');

    // defines totalFloor for floor calc function
    let totalFloor1 = 0;

    // for loop for ownedNfts
    for (let i = 0; i < response.data.ownedNfts.length; i++) {
        const nft = response.data.ownedNfts[i];

        // create nft card element
        const nftCard = document.createElement('div');
        nftCard.classList.add('nft-card-box');
        nftCard.onclick = function () {
            openModal(nft);
        }


        // does not add cards if they do not have image information 
        // ********can add image placeholder in the future *******
        if (!nft.media[0].gateway) {
            continue;
        };

        // Creates a title for images with .title -- this can throw off the nftcard spacing
        if (nft.title === "") {
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

        // grabbing api data and adding to html for Infobox
        const nftCollection = nft.contractMetadata.openSea.collectionName;
        nftInfoTopCollection.innerHTML = `${nftCollection}`;

        const nftTitle = nft.title;
        nftInfoTopTitle.innerHTML = `${nftTitle}`;

        const nftBalance = nft.balance;
        nftInfoBottomOwner.innerHTML = `Owned: ${nftBalance}`;

        const nftFloor = nft.contractMetadata.openSea.floorPrice;
        nftInfoBottomFloor.innerHTML = `Floor Price: ${nftFloor}`;

        // appending new elements to nftInfoBox and nftCard
        nftInfoBox.appendChild(nftInfoTopTitle);
        nftInfoBox.appendChild(nftInfoTopCollection)
        nftInfoBox.appendChild(nftInfoBottomOwner);
        nftInfoBox.appendChild(nftInfoBottomFloor);
        nftCard.appendChild(nftImageContainer);
        nftCard.appendChild(nftInfoBox);
        // appends nftCard to flexbox all-nfts
        allNfts.appendChild(nftCard);

        // calculates combined floor prices for entire wallet collection
        totalFloor1 = calcFloorPrice(nftFloor, totalFloor1);

        // grab total-floor element 
        const totalFloor = document.getElementById("total-floor");
        totalFloor.innerHTML = `Total floor price: ${totalFloor1}`;
    }
}






module.exports = createAndAppendElementsAndClasses;