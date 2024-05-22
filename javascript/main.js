const toggleDisplay = document.querySelector(".toggle-left-drop-down");
const leftOverflow = document.querySelector(".left-overflow");
const changeInboxMsg = document.querySelector(".change-inbox-msg");

let toggle = true;

toggleDisplay.addEventListener("click", () => {
  if (toggle == true) {
    leftOverflow.style.height = "320px";
    leftOverflow.style.overflowY = "scroll";
    toggle = false;
    changeInboxMsg.textContent="Less";
  }

  else if(toggle == false){
    leftOverflow.style.height = "225px";
    leftOverflow.style.overflowY = "hidden";
    toggle = true;
    changeInboxMsg.textContent="more";
  }
});
