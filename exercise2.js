const squareBox = document.querySelector("#box")

document.addEventListener("mousemove" , _.debounce(evetBox,100))

function evetBox(event){
 squareBox.style.left = event.pageX + 'px';
  squareBox.style.top = event.pageY + 'px';
}