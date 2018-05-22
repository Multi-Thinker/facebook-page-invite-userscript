// ==UserScript==
// @name         Inviter
// @namespace    http://codeot.com
// @version      0.1
// @description  facebook invite
// @author       Talha Habib
// @email        talha@codeot.com
// @match        *://*.facebook.com/*
// ==/UserScript==

// -- start

function inviteAll(){
    console.log("firing");
for(var i=0; i<=document.querySelectorAll('._5i_q span ._42ft:not(._42fr):not(._59pe)').length;i++){
  setTimeout(Inviter,3000*i,i,document.querySelectorAll('._5i_q span ._42ft:not(._42fr):not(._59pe)').length);
 }
}
function Inviter(i,l){
     i = i+1;
     console.log("Invited "+ i +"Out of "+l);
     if(i==l){
         console.log("Trigger new");
         if(document.querySelector("a[rel='async'].pam").length==1){
             loadMore();
             console.log("Got some more");
             setTimeout(inviteAll,5000);
         }else{
             console.log("--------------Closing-----------------");
             console.log("Invited all of them");
         }
     }
     document.querySelectorAll('._5i_q span ._42ft:not(._42fr):not(._59pe)')[i].click();
}
function loadMore(){
    document.querySelector("a[rel='async'].pam").click();
}
document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.code === "KeyG") {
       console.log("Key Detected");
       inviteAll();
    }
});
// -- end

