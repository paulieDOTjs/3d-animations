const cube = document.querySelector(".cube");
const radioGroup = document.querySelector(".radio-group");
let currentClass = "";

function changeSide() {
  const checkedRadio = radioGroup.querySelector(":checked");
  const showClass = "show-" + checkedRadio.value;
  if (currentClass) {
    cube.classList.remove(currentClass);
  }
  cube.classList.add(showClass);
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener("change", changeSide);
