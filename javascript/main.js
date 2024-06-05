const toggleDisplay = document.querySelector(".toggle-left-drop-down");
const leftOverflow = document.querySelector(".left-overflow");
const changeInboxMsg = document.querySelector(".change-inbox-msg");

const emailsTab = document.querySelectorAll(".emails");
const mainContent = document.querySelector(".main-content");
const emailContent = document.querySelector(".email-content");

// const primaryMail = document.querySelector(".primary-mail");
// const promotionMail = document.querySelector(".promotion-mail");
// const socialMail = document.querySelector(".social-mail");


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

// Code to show email details below here

emailsTab.forEach(div => {
div.addEventListener("click",()=>{
  mainContent.innerHTML = `
  <div class="main-mail">
  <div class="mail-top-sec">
      <div class="mail-top-sec-left">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
          <i class="fa fa-archive" aria-hidden="true"></i>
          <i class="fa fa-info-circle" aria-hidden="true"></i>
          <i class="fa fa-trash-alt" aria-hidden="true"></i>
          <span>|</span>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <i class="fa fa-folder-plus" aria-hidden="true"></i>
          <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
      </div>
      <div class="mail-top-sec-right">
          <p>5 of 941</p>
          <span>
              <i class="fa fa-angle-left" aria-hidden="true"></i>
              <i class="fa fa-angle-right" aria-hidden="true"></i>
          </span>
      </div>
  </div>
  <div class="middle-mail-content">
          <div class="middle-left">
              <div class="user-icon">
                  <i class="fa fa-user" aria-hidden="true"></i>
              </div>
          </div>
          <div class="middle-center">
              <div class="mid-center-top">
              <p class="middle-center-header">You are transferring/withdrawing on Satoshi</p>
              <span>Inbox <i class="fa fa-times" aria-hidden="true"></i></span>
              </div>
              <p class="mid-user-det">
                  <span>Satoshi</span> <span class="span2"> < support@btcs.globalsupport > </span>
                  <br>
                  <p class="to-me">to me <i class="fa fa-caret-down" aria-hidden="true"></i></p>
              </p>
              <p class="general-mid-text code">Email verification code: 440226</p>
              <p class="general-mid-text code">Be cautious if you are not operating your own account, and pay attention to the account risk to prevent hacking!</p>
              <p class="general-mid-text code">Thank you for using Satoshi</p>
              <ul>
                  <li class="general-mid-text">- A Mysterious APP</li>
                  <li class="general-mid-text">- Crypto World First Stop</li>
                  <li class="general-mid-text">- Using by Everyone</li>
              </ul>
              <p class="general-mid-text code">Official Website</p>
              <a class="general-mid-text" href="#">https://www.satoshiapp.xyz</a>
              <div class="reply-forward-btns">
                  <button class="reply-btn"><i class="fa fa-reply" aria-hidden="true"></i>Reply</button>
                  <button class="forward-btn"><i class="fa fa-forward" aria-hidden="true"></i>Forward</button>
                  <div class="emote-circle">
                      <i class="far fa-grin" aria-hidden="true"></i>
                  </div>
              </div>
          </div>
          <div class="middle-right">
              <div class="print-tab">
                  <span>
                      <i class="fa fa-print" aria-hidden="true"></i>
                      <i class="fa fa-external-link-alt" aria-hidden="true"></i>
                  </span>
              </div>
              <div class="other-options">
                  <p class="mail-date-time">May 14, 2024, 6:29 AM</p>
                  <span>
                      <i class="far fa-star" aria-hidden="true"></i>
                      <i class="far fa-grin" aria-hidden="true"></i>
                      <i class="fa fa-reply" aria-hidden="true"></i>
                      <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                  </span>
              </div>
          </div>
  </div>
</div>
  `
});
});

// code to show email details above here