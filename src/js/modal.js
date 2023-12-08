const modalLinks = document.querySelectorAll('.modal-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (modalLinks.length > 0) {
  for (let index = 0; index < modalLinks.length; index++) {
    const modalLinks = modalLinks[index];
    modalLinks.addEventListener("click", function (e){
      const modalName = modalLinks.getAttribute('href')
    })
  }
}