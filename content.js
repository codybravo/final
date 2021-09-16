const less = document.getElementsByClassName("m9osqain a5q79mjw gy2v8mqq jm1wdb64 k4urcfbm qv66sw1b");
const bess = document.getElementsByClassName("q5bimw55 rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 eg9m0zos l9j0dhe7 du4w35lb ofs802cu pohlnb88 dkue75c7 mb9wzai9 l56l04vs r57mb794 kh7kg01d c3g1iek1 buofh1pr");


const cess = document.getElementsByClassName("rq0escxv buofh1pr df2bnetk hv4rvrfc dati1w0a l9j0dhe7 k4urcfbm du4w35lb gbhij3x4")
const  tess = document.getElementById("test-tooltip");

// const less = document.getElementsByClassName("ihqw7lf3");
// const less = document.getElementsByClassName("rz4wbd8a");
// const less = document.getElementsByClassName("discj3wi");
// const less = document.getElementsByClassName("dhix69tm");
// const less = document.getElementsByClassName("wkznzc2l");

let html =
`
<br>
<div id="test-danish">
  <span id="test-tooltip" class="tooltiptext"> 
    <button type="button" id="bold">B</button>
    <button id="italic" >I</button>
    <button id="underline">U</button>
    <button id="h1">H!</button>
    <button id="h2">H2</button>
    <button id="quote">"</button>
    <button id="sort">sort</button>
    <button id="unsort">unsort</button>
  </span>
</div>
<br>

`;

  


// injecting notification block

if(less){
  
  for(let i=0; i < less.length; i++) {
    console.log(less.length, "hello world");
    less[i].addEventListener("click",(event) => 
    {
      console.log("clicked");
      setTimeout(() => {
          if(bess)
        {
          console.log(bess,"Exists!");
          for(let j=0; j < bess.length; j++)
          {
            bess[j].insertAdjacentHTML("afterend", html);
          }

        }
        if(document.getElementById('bold')){
        document.getElementById('bold').addEventListener("click", () => {
          document.execCommand('bold',false,null);
          console.log("hello man")
        })
      }
      },2000)
    })
  }
}



// if(less) {
// less.insertAdjacentHTML("afterbegin", html);
// }

