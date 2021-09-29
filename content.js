// const { get } = require("jquery");

const insertElement = document.getElementsByClassName("q5bimw55 rpm2j7zs k7i0oixp gvuykj2m j83agx80 cbu4d94t ni8dbmo4 eg9m0zos l9j0dhe7 du4w35lb ofs802cu pohlnb88 dkue75c7 mb9wzai9 l56l04vs r57mb794 kh7kg01d c3g1iek1 buofh1pr");

let html =
`
<br>
<div id="test-danish">
  <div id="test-tooltip" class="tooltiptext"> 
  <button id="bold" type="button" class="btn command" data-command="b">B</button>
  <button type="button" class="btn command" data-command="h2">H2</button>
  <button type="button" class="btn command" data-command="h3">H3</button>
  <button type="button" class="btn command" data-command="h4">H4</button>
  <button type="button" class="btn command" data-command="h5">H5</button>
  <button type="button" class="btn command" data-command="h6">H6</button>
  <button type="button" class="btn command" data-command="p">p</button>
  <button type="button" class="btn command" data-command="ul">ul</button>
  <button type="button" class="btn command" data-command="li">li</button>
  <button type="button" class="btn command" data-command="span">span</button>
  </div>
</div>
<br>

`;
var range;
var ran;

document.arrive(`[aria-label="Post"]`, function (e) {
  console.log("Create post is now opened");
  if(insertElement)
  {
    insertElement[2].insertAdjacentHTML("afterend", html);
  }
});

document.arrive('#test-danish',() => {
  
  document.addEventListener("selectionchange", function (e) 
  {
    document.onmouseup = function()
    {
      if(document.getSelection().toString().length !== 0 && document.getSelection().toString() !="" ) 
      {
        ran = document.getSelection().toString()
        range = window.getSelection().getRangeAt(0); 
        console.log(document.getSelection().toString());
        console.log(range.toString(),"variable");
        
      }  
    }
  });

  const editControls = document.querySelector("#bold");
  editControls.addEventListener("click", function(event) 
  {
    const command = (event.target !== undefined && event.target.getAttribute("data-command") !== null) ? 
            event.target.getAttribute("data-command"): "clicked";
    if(command === "clicked" ) return;
    
    console.log("Selected command: " + command);
    let tempText = range.toString()
    // let oldContent = document.createTextNode(tempText);
    // console.log("d1",range,range.toString())
    console.log(tempText,"Text Selected");
    
    tempText = tempText.replace(/[A-Za-z]/g, translate);
    console.log(tempText,"kudos");

    let newElement = document.createElement(command);
    newElement.append(tempText);
    range.deleteContents();
    range.insertNode(newElement);

  });
  
});

// function replaceSelectedText(range,replacementText) {
//   range.text = replacementText;
//   console.log(range.text)
// }


// let text = "This is a text: ABC";
function translate(char)
{
    let diff;
    if (/[A-Z]/.test(char))
    {
        diff = "𝗔".codePointAt(0) - "A".codePointAt(0);
    }
    else
    {
        diff = "𝗮".codePointAt(0) - "a".codePointAt(0);
    }
    return String.fromCodePoint(char.codePointAt(0) + diff);
}
// let newText = text.replace (/[A-Za-z]/g, translate);
// console.log (text);
// console.log (newText);

// editControls.addEventListener("click", function(event) {
//   const command = (event.target !== undefined && event.target.getAttribute("data-command") !== null) ? 
//           event.target.getAttribute("data-command"): null;
//   if(command === null ) return;
//   console.log("Selected command: " + command);

//   if(document.getSelection().toString().length === 0) {
//     console.log("Please select some text before editing the content.");
//     return;
//   }
// 
// var range = window.getSelection().getRangeAt(0);
// const oldContent = document.createTextNode(range.toString());
// const newElement = document.createElement(command);
// newElement.append(oldContent);
// range.deleteContents();
// range.insertNode(newElement);
// });
  

// onClick="(function(){
//   document.execCommand('italic',false,null);
//   alert(window.getSelection());
//   return false;
// })();return false;"

// onClick="(function(){
//   document.execCommand('underline',false,null);
//   alert(window.getSelection());
//   return false;
// })();return false;"





// injecting notification block

// if(less){
  
//   for(let i=0; i < less.length; i++) {
//     console.log(less.length, "hello world");
//     less[i].addEventListener("click",(event) => 
//     {
//       console.log("clicked");
//       setTimeout(() => {
          // if(bess)
          // {
          //   console.log("Exists!");
          //   for(let j=0; j < bess.length; j++)
          //   {
          //     bess[j].insertAdjacentHTML("afterend", html);  
              
          //   } 
            
          // }
//       //     if(contEdit)
//       //     {
//       //       console.log(contEdit.length,"Exists constEdit!");
//       //       for(let j=0; j < contEdit.length; j++)
//       //       {
//       //         contEdit[j].contentEditable = "true"  
//       //       }
//       //     }
//       },2000)
//     })
//   }
  
// }

// function myTimer() {
  
//   if(document.querySelector('#hes')){
//     addEventListener('click',()=>{

//       const contEdit = document.getElementsByClassName("notranslate _5rpu");
//       contEdit[0].contentEditable = "true"
//       foo()
      
//       console.log("prinf(hello world)");
//     })
//     console.log("button discovered")
//     clearInterval(myVar);
//     // document.execCommand('bold',false,null);
//   }else{
//     console.log("no button discovered")
//   }
// }
// const myVar = setInterval(myTimer,3000);
// function foo() {
//   var selObj = window.getSelection();
//   console.log(selObj);
  

  
//   // do stuff with the range
// }




