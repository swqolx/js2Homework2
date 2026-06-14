const sliderDiv = document.querySelector(".slider")
const sliderImage = document.querySelector(".slider__image")
const sliderInput = document.querySelector(".slider__input")


sliderInput.addEventListener("input", _.throttle(sliderEvent1,200))
function sliderEvent1(event){
    sliderImage.style.width = sliderInput.value + "%"
    sliderDiv.style.maxWidth = 300 + "px"
}



