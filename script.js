var buttn=document.querySelector(".btn");
var text=document.querySelector(".text");
console.log(buttn);

var state=0;
buttn.addEventListener("click", function(){
    console.log("clicked on button ");
    if(state==0){
        state=1;
        text.innerHTML="friend";
        buttn.innerHTML="remove friend";
    }
    else {
        state=0;
        text.innerHTML="stranger";
        buttn.innerHTML="add friend";
    }
});