const less = document.getElementsByClassName("m9osqain a5q79mjw gy2v8mqq jm1wdb64 k4urcfbm qv66sw1b");
const bess = document.getElementsByClassName("q5bimw55 rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 eg9m0zos l9j0dhe7 du4w35lb ofs802cu pohlnb88 dkue75c7 mb9wzai9 l56l04vs r57mb794 kh7kg01d c3g1iek1 buofh1pr");

const contEdit = document.getElementsByClassName("rq0escxv buofh1pr df2bnetk hv4rvrfc dati1w0a l9j0dhe7 k4urcfbm du4w35lb gbhij3x4")
const cess = document.getElementsByClassName("rq0escxv buofh1pr df2bnetk hv4rvrfc dati1w0a l9j0dhe7 k4urcfbm du4w35lb gbhij3x4")
const  tess = document.getElementById("test-tooltip");

let html =
`
<br>
<div id="test-danish">
  <span id="test-tooltip" class="tooltiptext"> 
    <button onClick="(function(){
      document.execCommand('bold',false,null);
      alert(window.getSelection().getRangeAt(0));
      return false;
  })();return false;" type="button" id="bold">B</button>
    <button onClick="(function(){
      document.execCommand('italic',false,null);
      alert(window.getSelection().);
      return false;
  })();return false;" type="button" id="italic" >I</button>
    <button onClick="(function(){
      document.execCommand('underline',false,null);
      alert(window.getSelection());
      return false;
  })();return false;" type="button" id="underline">U</button>
    <button type="button" id="h1">H!</button>
    <button type="button" id="h2">H2</button>
    <button type="button" id="quote">"</button>
    <button type="button" id="sort">sort</button>
    <button type="button" id="unsort">unsort</button>
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
            console.log("Exists!");
            for(let j=0; j < bess.length; j++)
            {
              bess[j].insertAdjacentHTML("afterend", html);  
            } 
          }
          if(contEdit)
          {
            console.log(contEdit.length,"Exists constEdit!");
            for(let j=0; j < contEdit.length; j++)
            {
              contEdit[j].contentEditable = "true"  
            }
          }
      },2000)
    })
  }
  
}




