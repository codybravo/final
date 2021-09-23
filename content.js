let html =
  `
<div class="wrapper">
        <div class="btn bold">𝗕</div>
        <div class="btn italic">𝑰</div>
        <div class="btn underline">U̲</div>
        <div class="btn strikeThrough">S̶</div>
        <div class="btn cursive">𝓒</div> 
        <div class="btn smallCaps">Sᴍᴀʟʟ</div> 
        <div class="btn outline">𝔽</div> 
        <div class="btn upsideDown">∩</div> 
        <div class="btn yellow">Y</div> 
        <div class="btn red">R</div> 
        <div class="btn blue">B</div> 
</div>    
</div>
`;
$("body").arrive(`[aria-label="Emoji"]`, function (e) {
  $(e)
    .parent()
    .append(html)
});

// $("body").arrive(`[aria-label="Post"]`, function (e) {
//   console.log("Create post is now opened");
//   $(e)
//     .parent()
//     .append(
//       `<div class="make_it_bold" style="background: red; cursor: pointer;">𝗕OLD</div>
//       <div class="make_it_italic" style="background: red; cursor: pointer;">𝘐TALIC</div>
//       <div class="make_it_cursive" style="background: red; cursor: pointer;">𝒞URSIVE</div>`
//     );
// });
const all_characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵𝟬𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃"

const normal_character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
const normal_character_array = [...normal_character]

const textFormatOption = (type) => {
  console.log("here clicked");
  console.log("dfgdfg", selectedObj,selectedObj.toString());
  restoreSelection(selectedObj);
  console.log("dan1", selectedObj,selectedObj.toString());
  if ($(`[aria-label="Post"]`).length) {
    var stringSelected = document.getSelection().toString();
    var tempArray = [...stringSelected]
    if (stringSelected) {
      var reformatedText
      console.log(stringSelected)
      reformatedText = ""
      switch(type) {
        case 0:
          for (let i=0; i < tempArray.length; i++){
            reformatedText += normalToBold(specialToNormal([...all_characters],tempArray[i],type));
          }
          break;
        case 1:
          for (let i=0; i < tempArray.length; i++){
            reformatedText += normalToItalic(specialToNormal([...all_characters],tempArray[i],type));
          }
          break;
        case 2:
          for (let i=0; i < tempArray.length; i++){
            reformatedText += normalToCursive(specialToNormal([...all_characters],tempArray[i],type));
          }
          break;
        default:
          for (let i=0; i < tempArray.length; i++){
            reformatedText += specialToNormal([...all_characters],tempArray[i],type);
          }    
      }
      
      console.log(reformatedText,"reformation done");

      const blob = new Blob([reformatedText], {
        type: "text/plain",
      });
      let cpData = [
        new ClipboardItem({
          "text/plain": blob,
        }),
      ];

      navigator.clipboard.write(cpData).then(
        function () {
          restoreSelection(selectedObj);
          setTimeout(() => {
            console.log("pasting");
            document.execCommand("paste");
          }, 500);
        },
        function (error) {
          console.error("Unable to paste the data. Error:");
          console.log(error);
        }
      );
    }
  }
};

function specialToNormal(inputArray,element,type) {
  let diff;
  let alphabet = "";
  let alpha_index = "";
  if(inputArray.includes(element)){
    alpha_index = inputArray.indexOf(element);
    
    if(alpha_index < 62){
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - 0);
      return alphabet
      // converting 𝗔 to A - a
    }else if (alpha_index >= 62 && alpha_index < 88){
      if(type === 0){
        diff = 0;
      }else{
        diff = 120211
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet
    }else if(alpha_index >= 88 && alpha_index < 114){
      if(type === 0){
        diff = 0;
      }else{
        diff = 120205
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet
    }else if(alpha_index >= 114 && alpha_index < 124){
      if(type === 0){
        diff = 0;
      }else{
        diff = 120764
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet
      // converting 𝗔 to A - a
    }else if(alpha_index >= 124 && alpha_index < 150){
      if(type === 1){
        diff = 0;
      }else{
        diff = 120263;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet
    }else if(alpha_index >= 150 && alpha_index < 176){
      if(type === 1){
        diff = 0;
      }else{
        diff = 120257;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet
      // converting 𝗔 to A - a
    }else if(alpha_index >= 176 && alpha_index < 202){
      if(type === 2){
        diff = 0;
      }else{
        diff = 119951;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet
    }else if(alpha_index >= 202 && alpha_index < 228){
      if(type === 2){
        diff = 0;
      }else{
        diff = 119945;
      }
      alphabet = String.fromCodePoint(inputArray[alpha_index].codePointAt(0) - diff);
      return alphabet    
    }else{
      alphabet = element
      return alphabet
    }
  }
}
 
function normalToBold(norAlpha){
  let alphabet = "";
  let alpha_index = "";
  if(normal_character_array.includes(norAlpha)){
    alpha_index = normal_character_array.indexOf(norAlpha);
    if(alpha_index < 26){
      let alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120211);
      return alphabet
    }else if(alpha_index >= 26 && alpha_index < 52){
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120205);
      return alphabet
    }else if(alpha_index >= 52 && alpha_index < 62){
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120764);
      return alphabet
    }
  }else{
    return specialToNormal([...all_characters],norAlpha,9)
  }
}

function normalToItalic(norAlpha){
  let alphabet = "";
  let alpha_index = "";
  if(normal_character_array.includes(norAlpha)){
    alpha_index = normal_character_array.indexOf(norAlpha);
    if(alpha_index < 26){
      let alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120263);
      return alphabet
    }else if(alpha_index >= 26 && alpha_index < 52){
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 120257);
      return alphabet
    }else if(alpha_index >= 52 && alpha_index < 62){
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 0);
      return alphabet
    }
  }else{
    return specialToNormal([...all_characters],norAlpha,9)
  }
}

function normalToCursive(norAlpha){
  let alphabet = "";
  let alpha_index = "";
  if(normal_character_array.includes(norAlpha)){
    alpha_index = normal_character_array.indexOf(norAlpha);
    if(alpha_index < 26){
      let alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 119951);
      return alphabet
    }else if(alpha_index >= 26 && alpha_index < 52){
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 119945);
      return alphabet
    }else if(alpha_index >= 52 && alpha_index < 62){
      alphabet = String.fromCodePoint(norAlpha.codePointAt(0) + 0);
      return alphabet
    }
  }else{
    return specialToNormal([...all_characters],norAlpha,9)
  }
}

$(document).on("click", ".bold", () => {
  textFormatOption(0);
});

$(document).on("click", ".italic", () => {
  textFormatOption(1);
});
$(document).on("click", ".cursive", () => {
  textFormatOption(2);
});
// $(document).on("click", ".strikeThrough", () => {
//   textFormatOption(4);
// });
// $(document).on("click", ".upsideDown", () => {
//   textFormatOption(5);
// });
// $(document).on("click", ".underline", () => {
//   textFormatOption(6);
// });
// $(document).on("click", ".outline", () => {
//   textFormatOption(7);
// });
// $(document).on("click", ".smallCaps", () => {
//   textFormatOption(8);
// });

// $(document).on("click", ".make_it_bold", () => {
//   textFormatOption(0)
// });

// $(document).on("click", ".make_it_italic", () => {
//   textFormatOption(1);
// });

// $(document).on("click", ".make_it_cursive", () => {
//   textFormatOption(2);
// });

function saveSelection() {
  if (window.getSelection) {
    sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      return sel.getRangeAt(0);
    }
  } else if (document.selection && document.selection.createRange) {
    return document.selection.createRange();
  }
  return null;
}

function restoreSelection(range) {
  if (range) {
    if (window.getSelection) {
      sel = window.getSelection(); 
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (document.selection && range.select) {
      range.select();
    }
  }
}

var selectedObj = "";

$(document).on("selectionchange", function (e) {
  if ($(`[aria-label="Post"]`).length) {
    var stringSelected = window.getSelection().toString();
    if (stringSelected) {
      selectedObj = saveSelection();
    }
  }
});
