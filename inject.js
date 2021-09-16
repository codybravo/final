
const italic = document.getElementById('italic');
const underline = document.getElementById('underline');


// var b = document.querySelector("body");

// b.setAttribute("contenteditable", "true");




  



if(italic){
italic.addEventListener("click", () => {
  document.execCommand('italic',false,null);
})
}

if(underline){
underline.addEventListener("click", () => {
  document.execCommand('underline',false,null);
})
}