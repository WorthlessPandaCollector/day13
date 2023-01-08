
function calcFloorPrice(nftFloor, totalFloor1){
    const floorPriceCalc = nftFloor || 0;
    totalFloor1 = totalFloor1 + floorPriceCalc;
    console.log(floorPriceCalc);
    return totalFloor1;
    }


module.exports=calcFloorPrice;