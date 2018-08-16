let bl = document.querySelector(".button-left");
let br = document.querySelector(".button-right");
let bigPhoto = document.querySelector(".big-photo");
let element = document.getElementsByClassName("slider-element");

        for (let i = 0; i < element.length; i++) {
            element[i].style.order = i + "";
          }

        bl.addEventListener("click", function () {
        for (let i = 0; i < element.length; i++) {
                if (element[i].style.order === "0"){
                    element[i].style.order = (element.length - 1) + "";
                } else {
                    element[i].style.order = (parseInt(element[i].style.order) - 1) + "";
                }
            }
        });
        br.addEventListener("click", function () {

        for (let i = 0; i < element.length; i++) {
                if (element[i].style.order === (element.length - 1) + ""){
                    element[i].style.order = "0";
                } else {
                    element[i].style.order = (parseInt(element[i].style.order) + 1) + "";
                }
            }
        });
        for (let i = 0; i < element.length; i++) {
            element[i].addEventListener("click", function(e) {
                let target = e.target;
                target.parentNode.classList.toggle('active');
                for (let j = 0; j < element.length; j++) {
                    if (element[j] !== target.parentNode && element[j].classList.contains('active')){
                        element[j].classList.remove('active');
                    }
                }


                bigPhoto.innerHTML = "<img class='clip-circle' src = 'img/photo-" + target.id + ".jpg'>";
            });
}