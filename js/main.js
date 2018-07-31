let bl = document.querySelector(".button-left");
let br = document.querySelector(".button-right");
let slider = document.querySelector(".slider-content");
let bigPhoto = document.querySelector(".big-photo");
let element = document.getElementsByClassName("slider-element");
let left = 0;
let clientWidth = element[0].clientWidth;
let maxWidth = clientWidth * element.length;
let rightOffset = clientWidth * (element.length - 1);

        bl.addEventListener("click", function () {
            if (left <= -maxWidth) {
                slider.style.left = '0px';
                left = 0;
                for (let i = 0; i < element.length; i++) {
                    element[i].style.left = '0px';
                }
            }
            for (let i = 0; i < element.length; i++) {
                if (Math.abs(element[i].offsetLeft + left) < 20) {
                    element[i].style.left = maxWidth + 'px';
                }
            }
            left -= clientWidth;
            slider.style.left = left + 'px';
        });
        br.addEventListener("click", function () {

            if (left >= maxWidth) {
                slider.style.left = '0px';
                left = 0;
                for (let i = 0; i < element.length; i++) {
                    element[i].style.left = '0px';
                }
            }
            for (let i = 0; i < element.length; i++) {
                if (Math.abs(element[i].offsetLeft + left - rightOffset) < 20) {
                    element[i].style.left = -maxWidth + 'px';
                }
            }
            left += clientWidth;
            slider.style.left = left + 'px';
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