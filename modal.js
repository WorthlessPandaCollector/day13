
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const closeModalButton = document.getElementById('close-modal');

function openModal(nft) {


    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-content").innerHTML = `${nft.title}`;
    
    
    const modalImage = document.getElementById('modal-img')
    const imageSRC = document.createElement('img');



    imageSRC.classList.add('img-modal');
    const modalImageURL = nft.media[0].gateway;
    imageSRC.src = modalImageURL


    modalImage.removeChild(imageSRC);
    modalImage.appendChild(imageSRC);


}

function closeModal(){
    modal.style.display="none";
}

closeModalButton.onclick = function() {
    closeModal();
}



module.exports = openModal;




    // // Modal image container
    // const modalImageContainer = document.createElement('img');
    // modalImageContainer.classList.add('modal-img-container');
    // modalImageContainer.src = nftImageURL;

    // const modalInfo = document.createElement('div');
    // modalInfo.classList.add('modal-info');




    // // append to main modal container
    // const modal = document.getElementById('modal');
    // modal.appendChild(modalImageContainer);
    // modal.appendChild(modalInfo);



// if(modal.style.display == "block") {

//     window.onclick = function closeModal() {
//     document.getElementById("modal").style.display="none";
// }

// }
// window.onclick = function closeModal(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
//   };

// function updateModal (nft) {

// }

