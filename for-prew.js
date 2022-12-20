let total = document.querySelectorAll(".email-prew");
var modal = document.querySelector(".modal");
var closeModal = document.querySelector(".close-modal");
let overlay = document.querySelector(".modal-overlay");

document.querySelector(".complited-count").textContent = total.length;

let emails = document.querySelectorAll(".email-prew-inner");
emails.forEach(function (email) {
   email.addEventListener("click", function () {
      overlay.classList.add("overlay-active");
      if (!modal.classList.contains("modal-will-active")) {
         modal.classList.add("modal-will-active");
      }
      setTimeout(function () {
         modal.classList.add("visible");
      }, 10);
      let src = email.querySelector("iframe").getAttribute("src");
      console.log(src);
      modal.querySelector("iframe").setAttribute("src", src);
      if (document.body.clientHeight > window.innerHeight) {
         document.body.style.overflow = "hidden";
         document.body.style.paddingRight = getScrollbarWidth() + "px";
      }
   });
});

function getScrollbarWidth() {
   const outer = document.createElement("div");
   outer.style.visibility = "hidden";
   outer.style.overflow = "scroll";
   outer.style.msOverflowStyle = "scrollbar";
   document.body.appendChild(outer);
   const inner = document.createElement("div");
   outer.appendChild(inner);
   const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
   outer.parentNode.removeChild(outer);
   return scrollbarWidth;
}

function hideModal() {
   if (modal.classList.contains("visible")) {
      modal.classList.remove("visible");
      overlay.classList.remove("overlay-active");
      if (document.body.clientHeight > window.innerHeight) {
         setTimeout(function () {
            modal.classList.remove("modal-will-active");
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = 0 + "px";
         }, 150);
      }
   }
}

modal.addEventListener("click", function (e) {
   e.preventDefault();
});

modal.addEventListener("click", function (event) {
   if (event.target !== event.currentTarget) return;
   hideModal();
});

closeModal.addEventListener("click", function (e) {
   hideModal();
});

document.onkeydown = function (evt) {
   evt = evt || window.event;
   if (evt.keyCode == 27) {
      hideModal();
   }
};
