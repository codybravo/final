// function translateDefault(char)
// {
//     let summ;
//     if (/[𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭]/.test(char))
//     {
//         summ =  "𝗔".codePointAt(0) + "A".codePointAt(0);
//         console.log(summ) 
//         console.log(char.codePointAt(0))
//         // console.log(summ - char.codePointAt(0))
//     }
//     else if(/[𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇]/.test(char))
//     {
//         summ = "𝗮".codePointAt(0) - "a".codePointAt(0) ;
//     }
//     else if(/[𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵𝟬]/.test(char))
//     {
//         summ = "𝟬".codePointAt(0) - "0".codePointAt(0) ;
//     }
    
//     return String.fromCodePoint(summ - char.codePointAt(0));
// }

// function translateBold(char)
// {
//     let diff;
//     if (/[A-Z]/.test(char))
//     {
//         diff = "𝗔".codePointAt(0) - "A".codePointAt(0);
//     }
//     else if(/[a-z]/.test(char))
//     {
//         diff = "𝗮".codePointAt(0) - "a".codePointAt(0);
//     }
//     else if(/[0-9]/.test(char))
//     {
//         diff = "𝟬".codePointAt(0) - "0".codePointAt(0);
//     }
//     return String.fromCodePoint(char.codePointAt(0) + diff);
// }

// function translateItalic(char)
// {
//     let diff;
//     if (/[A-Z]/.test(char))
//     {
//         diff = "𝘈".codePointAt(0) - "A".codePointAt(0);
//     }
//     else if(/[a-z]/.test(char))
//     {
//         diff = "𝘢".codePointAt(0) - "a".codePointAt(0);
//     }
//     else if(/[0-9]/.test(char))
//     {
//         diff = "0".codePointAt(0) - "0".codePointAt(0);
//     }
//     return String.fromCodePoint(char.codePointAt(0) + diff);
// }



// var charArray = [];
// charArray["A"] = ["𝗔", "𝘈", "𝘼", "A̶", "𝒜", "A"];
// charArray["B"] = ["𝗕", "𝘉", "𝘽", "B̶", "ℬ", "B"];
// charArray["C"] = ["𝗖", "𝘊", "𝘾", "C̶", "𝒞", "C"];
// charArray["D"] = ["𝗗", "𝘋", "𝘿", "D̶", "𝒟", "D"];
// charArray["E"] = ["𝗘", "𝘌", "𝙀", "E̶", "ℰ", "E"];
// charArray["F"] = ["𝗙", "𝘍", "𝙁", "F̶", "ℱ", "F"];
// charArray["G"] = ["𝗚", "𝘎", "𝙂", "G̶", "𝒢", "G"];
// charArray["H"] = ["𝗛", "𝘏", "𝙃", "H̶", "ℋ", "H"];
// charArray["I"] = ["𝗜", "𝘐", "𝙄", "I̶", "ℐ", "I"];
// charArray["J"] = ["𝗝", "𝘑", "𝙅", "J̶", "𝒥", "J"];
// charArray["K"] = ["𝗞", "𝘒", "𝙆", "K̶", "𝒦", "K"];
// charArray["L"] = ["𝗟", "𝘓", "𝙇", "L̶", "ℒ", "L"];
// charArray["M"] = ["𝗠", "𝘔", "𝙈", "M̶", "ℳ", "M"];
// charArray["N"] = ["𝗡", "𝘕", "𝙉", "N̶", "𝒩", "N"];
// charArray["O"] = ["𝗢", "𝘖", "𝙊", "O̶", "𝒪", "O"];
// charArray["P"] = ["𝗣", "𝘗", "𝙋", "P̶", "𝒫", "P"];
// charArray["Q"] = ["𝗤", "𝘘", "𝙌", "Q̶", "𝒬", "Q"];
// charArray["R"] = ["𝗥", "𝘙", "𝙍", "R̶", "ℛ", "R"];
// charArray["S"] = ["𝗦", "𝘚", "𝙎", "S̶", "𝒮", "S"];
// charArray["T"] = ["𝗧", "𝘛", "𝙏", "T̶", "𝒯", "T"];
// charArray["U"] = ["𝗨", "𝘜", "𝙐", "U̶", "𝒰", "U"];
// charArray["V"] = ["𝗩", "𝘝", "𝙑", "V̶", "𝒱", "V"];
// charArray["W"] = ["𝗪", "𝘞", "𝙒", "W̶", "𝒲", "W"];
// charArray["X"] = ["𝗫", "𝘟", "𝙓", "X̶", "𝒳", "X"];
// charArray["Y"] = ["𝗬", "𝘠", "𝙔", "Y̶", "𝒴", "Y"];
// charArray["Z"] = ["𝗭", "𝘡", "𝙕", "Z̶", "𝒵", "Z"];
// charArray["a"] = ["𝗮", "𝘢", "𝙖", "a̶", "𝒶", "a"];
// charArray["b"] = ["𝗯", "𝘣", "𝙗", "b̶", "𝒷", "b"];
// charArray["c"] = ["𝗰", "𝘤", "𝙘", "c̶", "𝒸", "c"];
// charArray["d"] = ["𝗱", "𝘥", "𝙙", "d̶", "𝒹", "d"];
// charArray["e"] = ["𝗲", "𝘦", "𝙚", "e̶", "ℯ", "e"];
// charArray["f"] = ["𝗳", "𝘧", "𝙛", "f̶", "𝒻", "f"];
// charArray["g"] = ["𝗴", "𝘨", "𝙜", "g̶", "ℊ", "g"];
// charArray["h"] = ["𝗵", "𝘩", "𝙝", "h̶", "𝒽", "h"];
// charArray["i"] = ["𝗶", "𝘪", "𝙞", "i̶", "𝒾", "i"];
// charArray["j"] = ["𝗷", "𝘫", "𝙟", "j̶", "𝒿", "j"];
// charArray["k"] = ["𝗸", "𝘬", "𝙠", "k̶", "𝓀", "k"];
// charArray["l"] = ["𝗹", "𝘭", "𝙡", "l̶", "𝓁", "l"];
// charArray["m"] = ["𝗺", "𝘮", "𝙢", "m̶", "𝓂", "m"];
// charArray["n"] = ["𝗻", "𝘯", "𝙣", "n̶", "𝓃", "n"];
// charArray["o"] = ["𝗼", "𝘰", "𝙤", "o̶", "ℴ", "o"];
// charArray["p"] = ["𝗽", "𝘱", "𝙥", "p̶", "𝓅", "p"];
// charArray["q"] = ["𝗾", "𝘲", "𝙦", "q̶", "𝓆", "q"];
// charArray["r"] = ["𝗿", "𝘳", "𝙧", "r̶", "𝓇", "r"];
// charArray["s"] = ["𝘀", "𝘴", "𝙨", "s̶", "𝓈", "s"];
// charArray["t"] = ["𝘁", "𝘵", "𝙩", "t̶", "𝓉", "t"];
// charArray["u"] = ["𝘂", "𝘶", "𝙪", "u̶", "𝓊", "u"];
// charArray["v"] = ["𝘃", "𝘷", "𝙫", "v̶", "𝓋", "v"];
// charArray["w"] = ["𝘄", "𝘸", "𝙬", "w̶", "𝓌", "w"];
// charArray["x"] = ["𝘅", "𝘹", "𝙭", "x̶", "𝓍", "x"];
// charArray["y"] = ["𝘆", "𝘺", "𝙮", "y̶", "𝓎", "y"];
// charArray["z"] = ["𝘇", "𝘻", "𝙯", "z̶", "𝓕", "z"];
// charArray["1"] = ["𝟭", "1", "𝟭", "1̶", "1", "1"];
// charArray["2"] = ["𝟮", "2", "𝟮", "2̶", "2", "2"];
// charArray["3"] = ["𝟯", "3", "𝟯", "3̶", "3", "3"];
// charArray["4"] = ["𝟰", "4", "𝟰", "4̶", "4", "4"];
// charArray["5"] = ["𝟱", "5", "𝟱", "5̶", "5", "5"];
// charArray["6"] = ["𝟲", "6", "𝟲", "6̶", "6", "6"];
// charArray["7"] = ["𝟳", "7", "𝟳", "7̶", "7", "7"];
// charArray["8"] = ["𝟴", "8", "𝟴", "8̶", "8", "8"];
// charArray["9"] = ["𝟵", "9", "𝟵", "9̶", "9", "9"];
// charArray["0"] = ["𝟬", "0", "𝟬", "0̶", "0", "0"];

// charArray["𝗔"] = ["𝗔", "𝘈", "𝘼", "A̶", "𝒜", "A"];
// charArray["𝗕"] = ["𝗕", "𝘉", "𝘽", "B̶", "ℬ", "B"];
// charArray["𝗖"] = ["𝗖", "𝘊", "𝘾", "C̶", "𝒞", "C"];
// charArray["𝗗"] = ["𝗗", "𝘋", "𝘿", "D̶", "𝒟", "D"];
// charArray["𝗘"] = ["𝗘", "𝘌", "𝙀", "E̶", "ℰ", "E"];
// charArray["𝗙"] = ["𝗙", "𝘍", "𝙁", "F̶", "ℱ", "F"];
// charArray["𝗚"] = ["𝗚", "𝘎", "𝙂", "G̶", "𝒢", "G"];
// charArray["𝗛"] = ["𝗛", "𝘏", "𝙃", "H̶", "ℋ", "H"];
// charArray["𝗜"] = ["𝗜", "𝘐", "𝙄", "I̶", "ℐ", "I"];
// charArray["𝗝"] = ["𝗝", "𝘑", "𝙅", "J̶", "𝒥", "J"];
// charArray["𝗞"] = ["𝗞", "𝘒", "𝙆", "K̶", "𝒦", "K"];
// charArray["𝗟"] = ["𝗟", "𝘓", "𝙇", "L̶", "ℒ", "L"];
// charArray["𝗠"] = ["𝗠", "𝘔", "𝙈", "M̶", "ℳ", "M"];
// charArray["𝗡"] = ["𝗡", "𝘕", "𝙉", "N̶", "𝒩", "N"];
// charArray["𝗢"] = ["𝗢", "𝘖", "𝙊", "O̶", "𝒪", "O"];
// charArray["𝗣"] = ["𝗣", "𝘗", "𝙋", "P̶", "𝒫", "P"];
// charArray["𝗤"] = ["𝗤", "𝘘", "𝙌", "Q̶", "𝒬", "Q"];
// charArray["𝗥"] = ["𝗥", "𝘙", "𝙍", "R̶", "ℛ", "R"];
// charArray["𝗦"] = ["𝗦", "𝘚", "𝙎", "S̶", "𝒮", "S"];
// charArray["𝗧"] = ["𝗧", "𝘛", "𝙏", "T̶", "𝒯", "T"];
// charArray["𝗨"] = ["𝗨", "𝘜", "𝙐", "U̶", "𝒰", "U"];
// charArray["𝗩"] = ["𝗩", "𝘝", "𝙑", "V̶", "𝒱", "V"];
// charArray["𝗪"] = ["𝗪", "𝘞", "𝙒", "W̶", "𝒲", "W"];
// charArray["𝗫"] = ["𝗫", "𝘟", "𝙓", "X̶", "𝒳", "X"];
// charArray["𝗬"] = ["𝗬", "𝘠", "𝙔", "Y̶", "𝒴", "Y"];
// charArray["𝗭"] = ["𝗭", "𝘡", "𝙕", "Z̶", "𝒵", "Z"];
// charArray["𝗮"] = ["𝗮", "𝘢", "𝙖", "a̶", "𝒶", "a"];
// charArray["𝗯"] = ["𝗯", "𝘣", "𝙗", "b̶", "𝒷", "b"];
// charArray["𝗰"] = ["𝗰", "𝘤", "𝙘", "c̶", "𝒸", "c"];
// charArray["𝗱"] = ["𝗱", "𝘥", "𝙙", "d̶", "𝒹", "d"];
// charArray["𝗲"] = ["𝗲", "𝘦", "𝙚", "e̶", "ℯ", "e"];
// charArray["𝗳"] = ["𝗳", "𝘧", "𝙛", "f̶", "𝒻", "f"];
// charArray["𝗴"] = ["𝗴", "𝘨", "𝙜", "g̶", "ℊ", "g"];
// charArray["𝗵"] = ["𝗵", "𝘩", "𝙝", "h̶", "𝒽", "h"];
// charArray["𝗶"] = ["𝗶", "𝘪", "𝙞", "i̶", "𝒾", "i"];
// charArray["𝗷"] = ["𝗷", "𝘫", "𝙟", "j̶", "𝒿", "j"];
// charArray["𝗸"] = ["𝗸", "𝘬", "𝙠", "k̶", "𝓀", "k"];
// charArray["𝗹"] = ["𝗹", "𝘭", "𝙡", "l̶", "𝓁", "l"];
// charArray["𝗺"] = ["𝗺", "𝘮", "𝙢", "m̶", "𝓂", "m"];
// charArray["𝗻"] = ["𝗻", "𝘯", "𝙣", "n̶", "𝓃", "n"];
// charArray["𝗼"] = ["𝗼", "𝘰", "𝙤", "o̶", "ℴ", "o"];
// charArray["𝗽"] = ["𝗽", "𝘱", "𝙥", "p̶", "𝓅", "p"];
// charArray["𝗾"] = ["𝗾", "𝘲", "𝙦", "q̶", "𝓆", "q"];
// charArray["𝗿"] = ["𝗿", "𝘳", "𝙧", "r̶", "𝓇", "r"];
// charArray["𝘀"] = ["𝘀", "𝘴", "𝙨", "s̶", "𝓈", "s"];
// charArray["𝘁"] = ["𝘁", "𝘵", "𝙩", "t̶", "𝓉", "t"];
// charArray["𝘂"] = ["𝘂", "𝘶", "𝙪", "u̶", "𝓊", "u"];
// charArray["𝘃"] = ["𝘃", "𝘷", "𝙫", "v̶", "𝓋", "v"];
// charArray["𝘄"] = ["𝘄", "𝘸", "𝙬", "w̶", "𝓌", "w"];
// charArray["𝘅"] = ["𝘅", "𝘹", "𝙭", "x̶", "𝓍", "x"];
// charArray["𝘆"] = ["𝘆", "𝘺", "𝙮", "y̶", "𝓎", "y"];
// charArray["𝘇"] = ["𝘇", "𝘻", "𝙯", "z̶", "𝓕", "z"];
// charArray["𝟭"] = ["𝟭", "1", "𝟭", "1̶", "1", "1"];
// charArray["𝟮"] = ["𝟮", "2", "𝟮", "2̶", "2", "2"];
// charArray["𝟯"] = ["𝟯", "3", "𝟯", "3̶", "3", "3"];
// charArray["𝟰"] = ["𝟰", "4", "𝟰", "4̶", "4", "4"];
// charArray["𝟱"] = ["𝟱", "5", "𝟱", "5̶", "5", "5"];
// charArray["𝟲"] = ["𝟲", "6", "𝟲", "6̶", "6", "6"];
// charArray["𝟳"] = ["𝟳", "7", "𝟳", "7̶", "7", "7"];
// charArray["𝟴"] = ["𝟴", "8", "𝟴", "8̶", "8", "8"];
// charArray["𝟵"] = ["𝟵", "9", "𝟵", "9̶", "9", "9"];
// charArray["𝟬"] = ["𝟬", "0", "𝟬", "0̶", "0", "0"];

// charArray["𝘈"] = ["𝗔", "𝘈", "𝘼", "A̶", "𝒜", "A"];
// charArray["𝘉"] = ["𝗕", "𝘉", "𝘽", "B̶", "ℬ", "B"];
// charArray["𝘊"] = ["𝗖", "𝘊", "𝘾", "C̶", "𝒞", "C"];
// charArray["𝘋"] = ["𝗗", "𝘋", "𝘿", "D̶", "𝒟", "D"];
// charArray["𝘌"] = ["𝗘", "𝘌", "𝙀", "E̶", "ℰ", "E"];
// charArray["𝘍"] = ["𝗙", "𝘍", "𝙁", "F̶", "ℱ", "F"];
// charArray["𝘎"] = ["𝗚", "𝘎", "𝙂", "G̶", "𝒢", "G"];
// charArray["𝘏"] = ["𝗛", "𝘏", "𝙃", "H̶", "ℋ", "H"];
// charArray["𝘐"] = ["𝗜", "𝘐", "𝙄", "I̶", "ℐ", "I"];
// charArray["𝘑"] = ["𝗝", "𝘑", "𝙅", "J̶", "𝒥", "J"];
// charArray["𝘒"] = ["𝗞", "𝘒", "𝙆", "K̶", "𝒦", "K"];
// charArray["𝘓"] = ["𝗟", "𝘓", "𝙇", "L̶", "ℒ", "L"];
// charArray["𝘔"] = ["𝗠", "𝘔", "𝙈", "M̶", "ℳ", "M"];
// charArray["𝘕"] = ["𝗡", "𝘕", "𝙉", "N̶", "𝒩", "N"];
// charArray["𝘖"] = ["𝗢", "𝘖", "𝙊", "O̶", "𝒪", "O"];
// charArray["𝘗"] = ["𝗣", "𝘗", "𝙋", "P̶", "𝒫", "P"];
// charArray["𝘘"] = ["𝗤", "𝘘", "𝙌", "Q̶", "𝒬", "Q"];
// charArray["𝘙"] = ["𝗥", "𝘙", "𝙍", "R̶", "ℛ", "R"];
// charArray["𝘚"] = ["𝗦", "𝘚", "𝙎", "S̶", "𝒮", "S"];
// charArray["𝘛"] = ["𝗧", "𝘛", "𝙏", "T̶", "𝒯", "T"];
// charArray["𝘜"] = ["𝗨", "𝘜", "𝙐", "U̶", "𝒰", "U"];
// charArray["𝘝"] = ["𝗩", "𝘝", "𝙑", "V̶", "𝒱", "V"];
// charArray["𝘞"] = ["𝗪", "𝘞", "𝙒", "W̶", "𝒲", "W"];
// charArray["𝘟"] = ["𝗫", "𝘟", "𝙓", "X̶", "𝒳", "X"];
// charArray["𝘠"] = ["𝗬", "𝘠", "𝙔", "Y̶", "𝒴", "Y"];
// charArray["𝘡"] = ["𝗭", "𝘡", "𝙕", "Z̶", "𝒵", "Z"];
// charArray["𝘢"] = ["𝗮", "𝘢", "𝙖", "a̶", "𝒶", "a"];
// charArray["𝘣"] = ["𝗯", "𝘣", "𝙗", "b̶", "𝒷", "b"];
// charArray["𝘤"] = ["𝗰", "𝘤", "𝙘", "c̶", "𝒸", "c"];
// charArray["𝘥"] = ["𝗱", "𝘥", "𝙙", "d̶", "𝒹", "d"];
// charArray["𝘦"] = ["𝗲", "𝘦", "𝙚", "e̶", "ℯ", "e"];
// charArray["𝘧"] = ["𝗳", "𝘧", "𝙛", "f̶", "𝒻", "f"];
// charArray["𝘨"] = ["𝗴", "𝘨", "𝙜", "g̶", "ℊ", "g"];
// charArray["𝘩"] = ["𝗵", "𝘩", "𝙝", "h̶", "𝒽", "h"];
// charArray["𝘪"] = ["𝗶", "𝘪", "𝙞", "i̶", "𝒾", "i"];
// charArray["𝘫"] = ["𝗷", "𝘫", "𝙟", "j̶", "𝒿", "j"];
// charArray["𝘬"] = ["𝗸", "𝘬", "𝙠", "k̶", "𝓀", "k"];
// charArray["𝘭"] = ["𝗹", "𝘭", "𝙡", "l̶", "𝓁", "l"];
// charArray["𝘮"] = ["𝗺", "𝘮", "𝙢", "m̶", "𝓂", "m"];
// charArray["𝘯"] = ["𝗻", "𝘯", "𝙣", "n̶", "𝓃", "n"];
// charArray["𝘰"] = ["𝗼", "𝘰", "𝙤", "o̶", "ℴ", "o"];
// charArray["𝘱"] = ["𝗽", "𝘱", "𝙥", "p̶", "𝓅", "p"];
// charArray["𝘲"] = ["𝗾", "𝘲", "𝙦", "q̶", "𝓆", "q"];
// charArray["𝘳"] = ["𝗿", "𝘳", "𝙧", "r̶", "𝓇", "r"];
// charArray["𝘴"] = ["𝘀", "𝘴", "𝙨", "s̶", "𝓈", "s"];
// charArray["𝘵"] = ["𝘁", "𝘵", "𝙩", "t̶", "𝓉", "t"];
// charArray["𝘶"] = ["𝘂", "𝘶", "𝙪", "u̶", "𝓊", "u"];
// charArray["𝘷"] = ["𝘃", "𝘷", "𝙫", "v̶", "𝓋", "v"];
// charArray["𝘸"] = ["𝘄", "𝘸", "𝙬", "w̶", "𝓌", "w"];
// charArray["𝘹"] = ["𝘅", "𝘹", "𝙭", "x̶", "𝓍", "x"];
// charArray["𝘺"] = ["𝘆", "𝘺", "𝙮", "y̶", "𝓎", "y"];
// charArray["𝘻"] = ["𝘇", "𝘻", "𝙯", "z̶", "𝓕", "z"];
// charArray["1"] = ["𝟭", "1", "𝟭", "1̶", "1", "1"];
// charArray["2"] = ["𝟮", "2", "𝟮", "2̶", "2", "2"];
// charArray["3"] = ["𝟯", "3", "𝟯", "3̶", "3", "3"];
// charArray["4"] = ["𝟰", "4", "𝟰", "4̶", "4", "4"];
// charArray["5"] = ["𝟱", "5", "𝟱", "5̶", "5", "5"];
// charArray["6"] = ["𝟲", "6", "𝟲", "6̶", "6", "6"];
// charArray["7"] = ["𝟳", "7", "𝟳", "7̶", "7", "7"];
// charArray["8"] = ["𝟴", "8", "𝟴", "8̶", "8", "8"];
// charArray["9"] = ["𝟵", "9", "𝟵", "9̶", "9", "9"];
// charArray["0"] = ["𝟬", "0", "𝟬", "0̶", "0", "0"];
 
// charArray["A̶"] = ["𝗔", "𝘈", "𝘼", "A̶", "𝒜", "A"];
// charArray["B̶"] = ["𝗕", "𝘉", "𝘽", "B̶", "ℬ", "B"];
// charArray["C̶"] = ["𝗖", "𝘊", "𝘾", "C̶", "𝒞", "C"];
// charArray["D̶"] = ["𝗗", "𝘋", "𝘿", "D̶", "𝒟", "D"];
// charArray["E̶"] = ["𝗘", "𝘌", "𝙀", "E̶", "ℰ", "E"];
// charArray["F̶"] = ["𝗙", "𝘍", "𝙁", "F̶", "ℱ", "F"];
// charArray["G̶"] = ["𝗚", "𝘎", "𝙂", "G̶", "𝒢", "G"];
// charArray["H̶"] = ["𝗛", "𝘏", "𝙃", "H̶", "ℋ", "H"];
// charArray["I̶"] = ["𝗜", "𝘐", "𝙄", "I̶", "ℐ", "I"];
// charArray["J̶"] = ["𝗝", "𝘑", "𝙅", "J̶", "𝒥", "J"];
// charArray["K̶"] = ["𝗞", "𝘒", "𝙆", "K̶", "𝒦", "K"];
// charArray["L̶"] = ["𝗟", "𝘓", "𝙇", "L̶", "ℒ", "L"];
// charArray["M̶"] = ["𝗠", "𝘔", "𝙈", "M̶", "ℳ", "M"];
// charArray["N̶"] = ["𝗡", "𝘕", "𝙉", "N̶", "𝒩", "N"];
// charArray["O̶"] = ["𝗢", "𝘖", "𝙊", "O̶", "𝒪", "O"];
// charArray["P̶"] = ["𝗣", "𝘗", "𝙋", "P̶", "𝒫", "P"];
// charArray["Q̶"] = ["𝗤", "𝘘", "𝙌", "Q̶", "𝒬", "Q"];
// charArray["R̶"] = ["𝗥", "𝘙", "𝙍", "R̶", "ℛ", "R"];
// charArray["S̶"] = ["𝗦", "𝘚", "𝙎", "S̶", "𝒮", "S"];
// charArray["T̶"] = ["𝗧", "𝘛", "𝙏", "T̶", "𝒯", "T"];
// charArray["U̶"] = ["𝗨", "𝘜", "𝙐", "U̶", "𝒰", "U"];
// charArray["V̶"] = ["𝗩", "𝘝", "𝙑", "V̶", "𝒱", "V"];
// charArray["W̶"] = ["𝗪", "𝘞", "𝙒", "W̶", "𝒲", "W"];
// charArray["X̶"] = ["𝗫", "𝘟", "𝙓", "X̶", "𝒳", "X"];
// charArray["Y̶"] = ["𝗬", "𝘠", "𝙔", "Y̶", "𝒴", "Y"];
// charArray["Z̶"] = ["𝗭", "𝘡", "𝙕", "Z̶", "𝒵", "Z"];
// charArray["a̶"] = ["𝗮", "𝘢", "𝙖", "a̶", "𝒶", "a"];
// charArray["b̶"] = ["𝗯", "𝘣", "𝙗", "b̶", "𝒷", "b"];
// charArray["c̶"] = ["𝗰", "𝘤", "𝙘", "c̶", "𝒸", "c"];
// charArray["d̶"] = ["𝗱", "𝘥", "𝙙", "d̶", "𝒹", "d"];
// charArray["e̶"] = ["𝗲", "𝘦", "𝙚", "e̶", "ℯ", "e"];
// charArray["f̶"] = ["𝗳", "𝘧", "𝙛", "f̶", "𝒻", "f"];
// charArray["g̶"] = ["𝗴", "𝘨", "𝙜", "g̶", "ℊ", "g"];
// charArray["h̶"] = ["𝗵", "𝘩", "𝙝", "h̶", "𝒽", "h"];
// charArray["i̶"] = ["𝗶", "𝘪", "𝙞", "i̶", "𝒾", "i"];
// charArray["j̶"] = ["𝗷", "𝘫", "𝙟", "j̶", "𝒿", "j"];
// charArray["k̶"] = ["𝗸", "𝘬", "𝙠", "k̶", "𝓀", "k"];
// charArray["l̶"] = ["𝗹", "𝘭", "𝙡", "l̶", "𝓁", "l"];
// charArray["m̶"] = ["𝗺", "𝘮", "𝙢", "m̶", "𝓂", "m"];
// charArray["n̶"] = ["𝗻", "𝘯", "𝙣", "n̶", "𝓃", "n"];
// charArray["o̶"] = ["𝗼", "𝘰", "𝙤", "o̶", "ℴ", "o"];
// charArray["p̶"] = ["𝗽", "𝘱", "𝙥", "p̶", "𝓅", "p"];
// charArray["q̶"] = ["𝗾", "𝘲", "𝙦", "q̶", "𝓆", "q"];
// charArray["r̶"] = ["𝗿", "𝘳", "𝙧", "r̶", "𝓇", "r"];
// charArray["s̶"] = ["𝘀", "𝘴", "𝙨", "s̶", "𝓈", "s"];
// charArray["t̶"] = ["𝘁", "𝘵", "𝙩", "t̶", "𝓉", "t"];
// charArray["u̶"] = ["𝘂", "𝘶", "𝙪", "u̶", "𝓊", "u"];
// charArray["v̶"] = ["𝘃", "𝘷", "𝙫", "v̶", "𝓋", "v"];
// charArray["w̶"] = ["𝘄", "𝘸", "𝙬", "w̶", "𝓌", "w"];
// charArray["x̶"] = ["𝘅", "𝘹", "𝙭", "x̶", "𝓍", "x"];
// charArray["y̶"] = ["𝘆", "𝘺", "𝙮", "y̶", "𝓎", "y"];
// charArray["z̶"] = ["𝘇", "𝘻", "𝙯", "z̶", "𝓕", "z"];
// charArray["1̶"] = ["𝟭", "1", "𝟭", "1̶", "1", "1"];
// charArray["2̶"] = ["𝟮", "2", "𝟮", "2̶", "2", "2"];
// charArray["3̶"] = ["𝟯", "3", "𝟯", "3̶", "3", "3"];
// charArray["4̶"] = ["𝟰", "4", "𝟰", "4̶", "4", "4"];
// charArray["5̶"] = ["𝟱", "5", "𝟱", "5̶", "5", "5"];
// charArray["6̶"] = ["𝟲", "6", "𝟲", "6̶", "6", "6"];
// charArray["7̶"] = ["𝟳", "7", "𝟳", "7̶", "7", "7"];
// charArray["8̶"] = ["𝟴", "8", "𝟴", "8̶", "8", "8"];
// charArray["9̶"] = ["𝟵", "9", "𝟵", "9̶", "9", "9"];
// charArray["0̶"] = ["𝟬", "0", "𝟬", "0̶", "0", "0"];

// charArray["𝒜"] = ["𝗔", "𝘈", "𝘼", "A̶", "𝒜", "A"];
// charArray["ℬ"] = ["𝗕", "𝘉", "𝘽", "B̶", "ℬ", "B"];
// charArray["𝒞"] = ["𝗖", "𝘊", "𝘾", "C̶", "𝒞", "C"];
// charArray["𝒟"] = ["𝗗", "𝘋", "𝘿", "D̶", "𝒟", "D"];
// charArray["ℰ"] = ["𝗘", "𝘌", "𝙀", "E̶", "ℰ", "E"];
// charArray["ℱ"] = ["𝗙", "𝘍", "𝙁", "F̶", "ℱ", "F"];
// charArray["𝒢"] = ["𝗚", "𝘎", "𝙂", "G̶", "𝒢", "G"];
// charArray["ℋ"] = ["𝗛", "𝘏", "𝙃", "H̶", "ℋ", "H"];
// charArray["ℐ"] = ["𝗜", "𝘐", "𝙄", "I̶", "ℐ", "I"];
// charArray["𝒥"] = ["𝗝", "𝘑", "𝙅", "J̶", "𝒥", "J"];
// charArray["𝒦"] = ["𝗞", "𝘒", "𝙆", "K̶", "𝒦", "K"];
// charArray["ℒ"] = ["𝗟", "𝘓", "𝙇", "L̶", "ℒ", "L"];
// charArray["ℳ"] = ["𝗠", "𝘔", "𝙈", "M̶", "ℳ", "M"];
// charArray["𝒩"] = ["𝗡", "𝘕", "𝙉", "N̶", "𝒩", "N"];
// charArray["𝒪"] = ["𝗢", "𝘖", "𝙊", "O̶", "𝒪", "O"];
// charArray["𝒫"] = ["𝗣", "𝘗", "𝙋", "P̶", "𝒫", "P"];
// charArray["𝒬"] = ["𝗤", "𝘘", "𝙌", "Q̶", "𝒬", "Q"];
// charArray["ℛ"] = ["𝗥", "𝘙", "𝙍", "R̶", "ℛ", "R"];
// charArray["𝒮"] = ["𝗦", "𝘚", "𝙎", "S̶", "𝒮", "S"];
// charArray["𝒯"] = ["𝗧", "𝘛", "𝙏", "T̶", "𝒯", "T"];
// charArray["𝒰"] = ["𝗨", "𝘜", "𝙐", "U̶", "𝒰", "U"];
// charArray["𝒱"] = ["𝗩", "𝘝", "𝙑", "V̶", "𝒱", "V"];
// charArray["𝒲"] = ["𝗪", "𝘞", "𝙒", "W̶", "𝒲", "W"];
// charArray["𝒳"] = ["𝗫", "𝘟", "𝙓", "X̶", "𝒳", "X"];
// charArray["𝒴"] = ["𝗬", "𝘠", "𝙔", "Y̶", "𝒴", "Y"];
// charArray["𝒵"] = ["𝗭", "𝘡", "𝙕", "Z̶", "𝒵", "Z"];
// charArray["𝒶"] = ["𝗮", "𝘢", "𝙖", "a̶", "𝒶", "a"];
// charArray["𝒷"] = ["𝗯", "𝘣", "𝙗", "b̶", "𝒷", "b"];
// charArray["𝒸"] = ["𝗰", "𝘤", "𝙘", "c̶", "𝒸", "c"];
// charArray["𝒹"] = ["𝗱", "𝘥", "𝙙", "d̶", "𝒹", "d"];
// charArray["ℯ"] = ["𝗲", "𝘦", "𝙚", "e̶", "ℯ", "e"];
// charArray["𝒻"] = ["𝗳", "𝘧", "𝙛", "f̶", "𝒻", "f"];
// charArray["ℊ"] = ["𝗴", "𝘨", "𝙜", "g̶", "ℊ", "g"];
// charArray["𝒽"] = ["𝗵", "𝘩", "𝙝", "h̶", "𝒽", "h"];
// charArray["𝒾"] = ["𝗶", "𝘪", "𝙞", "i̶", "𝒾", "i"];
// charArray["𝒿"] = ["𝗷", "𝘫", "𝙟", "j̶", "𝒿", "j"];
// charArray["𝓀"] = ["𝗸", "𝘬", "𝙠", "k̶", "𝓀", "k"];
// charArray["𝓁"] = ["𝗹", "𝘭", "𝙡", "l̶", "𝓁", "l"];
// charArray["𝓂"] = ["𝗺", "𝘮", "𝙢", "m̶", "𝓂", "m"];
// charArray["𝓃"] = ["𝗻", "𝘯", "𝙣", "n̶", "𝓃", "n"];
// charArray["ℴ"] = ["𝗼", "𝘰", "𝙤", "o̶", "ℴ", "o"];
// charArray["𝓅"] = ["𝗽", "𝘱", "𝙥", "p̶", "𝓅", "p"];
// charArray["𝓆"] = ["𝗾", "𝘲", "𝙦", "q̶", "𝓆", "q"];
// charArray["𝓇"] = ["𝗿", "𝘳", "𝙧", "r̶", "𝓇", "r"];
// charArray["𝓈"] = ["𝘀", "𝘴", "𝙨", "s̶", "𝓈", "s"];
// charArray["𝓉"] = ["𝘁", "𝘵", "𝙩", "t̶", "𝓉", "t"];
// charArray["𝓊"] = ["𝘂", "𝘶", "𝙪", "u̶", "𝓊", "u"];
// charArray["𝓋"] = ["𝘃", "𝘷", "𝙫", "v̶", "𝓋", "v"];
// charArray["𝓌"] = ["𝘄", "𝘸", "𝙬", "w̶", "𝓌", "w"];
// charArray["𝓍"] = ["𝘅", "𝘹", "𝙭", "x̶", "𝓍", "x"];
// charArray["𝓎"] = ["𝘆", "𝘺", "𝙮", "y̶", "𝓎", "y"];
// charArray["𝓕"] = ["𝘇", "𝘻", "𝙯", "z̶", "𝓕", "z"];
// charArray["1"] = ["𝟭", "1", "𝟭", "1̶", "1", "1"];
// charArray["2"] = ["𝟮", "2", "𝟮", "2̶", "2", "2"];
// charArray["3"] = ["𝟯", "3", "𝟯", "3̶", "3", "3"];
// charArray["4"] = ["𝟰", "4", "𝟰", "4̶", "4", "4"];
// charArray["5"] = ["𝟱", "5", "𝟱", "5̶", "5", "5"];
// charArray["6"] = ["𝟲", "6", "𝟲", "6̶", "6", "6"];
// charArray["7"] = ["𝟳", "7", "𝟳", "7̶", "7", "7"];
// charArray["8"] = ["𝟴", "8", "𝟴", "8̶", "8", "8"];
// charArray["9"] = ["𝟵", "9", "𝟵", "9̶", "9", "9"];
// charArray["0"] = ["𝟬", "0", "𝟬", "0̶", "0", "0"];

// const reformatIt = (theText, textType) => {
//   console.log(theText,"hello world");
//   var theText = [...theText]  
//   console.log(theText)
//   var c = "";
//   var reformatted = "";
//   for (var x = 0; x < theText.length; x++) {
//     c = theText[x]
//     console.log("reformating", c);
//     if (c in charArray) {
//         console.log("reformated single text", charArray[c][textType]);
//       reformatted += charArray[c][textType];
//     } else {
//       reformatted += c;
//     }
//     console.log("reformated text joining", reformatted);
//   }
//   console.log("reformated word done", reformatted);

//   console.log("pasted");
//   return reformatted;
// };
// 𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵𝟬

// charArray["𝒜"] = charArray["𝗔"] = charArray["𝘈"] = charArray["𝘈"] =
// charArray["ℬ"] = charArray["𝗕"] = charArray["𝘉"] = charArray["𝘉"] =
// charArray["𝒞"] = charArray["𝗖"] = charArray["𝘊"] = charArray["𝘊"] =
// charArray["𝒟"] = charArray["𝗗"] = charArray["𝘋"] = charArray["𝘋"] =
// charArray["ℰ"] = charArray["𝗘"] = charArray["𝘌"] = charArray["𝘌"] =
// charArray["ℱ"] = charArray["𝗙"] = charArray["𝘍"] = charArray["𝘍"] =
// charArray["𝒢"] = charArray["𝗚"] = charArray["𝘎"] = charArray["𝘎"] =
// charArray["ℋ"] = charArray["𝗛"] = charArray["𝘏"] = charArray["𝘏"] =
// charArray["ℐ"] = charArray["𝗜"] = charArray["𝘐"] = charArray["𝘐"] =
// charArray["𝒥"] = charArray["𝗝"] = charArray["𝘑"] = charArray["𝘑"] =
// charArray["𝒦"] = charArray["𝗞"] = charArray["𝘒"] = charArray["𝘒"] =
// charArray["ℒ"] = charArray["𝗟"] = charArray["𝘓"] = charArray["𝘓"] =
// charArray["ℳ"] = charArray["𝗠"] = charArray["𝘔"] = charArray["𝘔"] =
// charArray["𝒩"] = charArray["𝗡"] = charArray["𝘕"] = charArray["𝘕"] =
// charArray["𝒪"] = charArray["𝗢"] = charArray["𝘖"] = charArray["𝘖"] =
// charArray["𝒫"] = charArray["𝗣"] = charArray["𝘗"] = charArray["𝘗"] =
// charArray["𝒬"] = charArray["𝗤"] = charArray["𝘘"] = charArray["𝘘"] =
// charArray["ℛ"] = charArray["𝗥"] = charArray["𝘙"] = charArray["𝘙"] =
// charArray["𝒮"] = charArray["𝗦"] = charArray["𝘚"] = charArray["𝘚"] =
// charArray["𝒯"] = charArray["𝗧"] = charArray["𝘛"] = charArray["𝘛"] =
// charArray["𝒰"] = charArray["𝗨"] = charArray["𝘜"] = charArray["𝘜"] =
// charArray["𝒱"] = charArray["𝗩"] = charArray["𝘝"] = charArray["𝘝"] =
// charArray["𝒲"] = charArray["𝗪"] = charArray["𝘞"] = charArray["𝘞"] =
// charArray["𝒳"] = charArray["𝗫"] = charArray["𝘟"] = charArray["𝘟"] =
// charArray["𝒴"] = charArray["𝗬"] = charArray["𝘠"] = charArray["𝘠"] =
// charArray["𝒵"] = charArray["𝗭"] = charArray["𝘡"] = charArray["𝘡"] =
// charArray["𝒶"] = charArray["𝗮"] = charArray["𝘢"] = charArray["𝘢"] =
// charArray["𝒷"] = charArray["𝗯"] = charArray["𝘣"] = charArray["𝘣"] =
// charArray["𝒸"] = charArray["𝗰"] = charArray["𝘤"] = charArray["𝘤"] =
// charArray["𝒹"] = charArray["𝗱"] = charArray["𝘥"] = charArray["𝘥"] =
// charArray["ℯ"] = charArray["𝗲"] = charArray["𝘦"] = charArray["𝘦"] =
// charArray["𝒻"] = charArray["𝗳"] = charArray["𝘧"] = charArray["𝘧"] =
// charArray["ℊ"] = charArray["𝗴"] = charArray["𝘨"] = charArray["𝘨"] =
// charArray["𝒽"] = charArray["𝗵"] = charArray["𝘩"] = charArray["𝘩"] =
// charArray["𝒾"] = charArray["𝗶"] = charArray["𝘪"] = charArray["𝘪"] =
// charArray["𝒿"] = charArray["𝗷"] = charArray["𝘫"] = charArray["𝘫"] =
// charArray["𝓀"] = charArray["𝗸"] = charArray["𝘬"] = charArray["𝘬"] =
// charArray["𝓁"] = charArray["𝗹"] = charArray["𝘭"] = charArray["𝘭"] =
// charArray["𝓂"] = charArray["𝗺"] = charArray["𝘮"] = charArray["𝘮"] =
// charArray["𝓃"] = charArray["𝗻"] = charArray["𝘯"] = charArray["𝘯"] =
// charArray["ℴ"] = charArray["𝗼"] = charArray["𝘰"] = charArray["𝘰"] =
// charArray["𝓅"] = charArray["𝗽"] = charArray["𝘱"] = charArray["𝘱"] =
// charArray["𝓆"] = charArray["𝗾"] = charArray["𝘲"] = charArray["𝘲"] =
// charArray["𝓇"] = charArray["𝗿"] = charArray["𝘳"] = charArray["𝘳"] =
// charArray["𝓈"] = charArray["𝘀"] = charArray["𝘴"] = charArray["𝘴"] =
// charArray["𝓉"] = charArray["𝘁"] = charArray["𝘵"] = charArray["𝘵"] =
// charArray["𝓊"] = charArray["𝘂"] = charArray["𝘶"] = charArray["𝘶"] =
// charArray["𝓋"] = charArray["𝘃"] = charArray["𝘷"] = charArray["𝘷"] =
// charArray["𝓌"] = charArray["𝘄"] = charArray["𝘸"] = charArray["𝘸"] =
// charArray["𝓍"] = charArray["𝘅"] = charArray["𝘹"] = charArray["𝘹"] =
// charArray["𝓎"] = charArray["𝘆"] = charArray["𝘺"] = charArray["𝘺"] =
// charArray["𝓕"] = charArray["𝘇"] = charArray["𝘻"] = charArray["𝘻"] =
// charArray["1"] = charArray["𝟭"] = charArray["1"] = charArray["1"] =
// charArray["2"] = charArray["𝟮"] = charArray["2"] = charArray["2"] =
// charArray["3"] = charArray["𝟯"] = charArray["3"] = charArray["3"] =
// charArray["4"] = charArray["𝟰"] = charArray["4"] = charArray["4"] =
// charArray["5"] = charArray["𝟱"] = charArray["5"] = charArray["5"] =
// charArray["6"] = charArray["𝟲"] = charArray["6"] = charArray["6"] =
// charArray["7"] = charArray["𝟳"] = charArray["7"] = charArray["7"] =
// charArray["8"] = charArray["𝟴"] = charArray["8"] = charArray["8"] =
// charArray["9"] = charArray["𝟵"] = charArray["9"] = charArray["9"] =
// charArray["0"] = charArray["𝟬"] = charArray["0"] = charArray["0"] =
// "𝒜"
// "ℬ"
// "𝒞"
// "𝒟"
// "ℰ"
// "ℱ"
// "𝒢"
// "ℋ"
// "ℐ"
// "𝒥"
// "𝒦"
// "ℒ"
// "ℳ"
// "𝒩"
// "𝒪"
// "𝒫"
// "𝒬"
// "ℛ"
// "𝒮"
// "𝒯"
// "𝒰"
// "𝒱"
// "𝒲"
// "𝒳"
// "𝒴"
// "𝒵"
// "𝒶"
// "𝒷"
// "𝒸"
// "𝒹"
// "ℯ"
// "𝒻"
// "ℊ"
// "𝒽"
// "𝒾"
// "𝒿"
// "𝓀"
// "𝓁"
// "𝓂"
// "𝓃"
// "ℴ"
// "𝓅"
// "𝓆"
// "𝓇"
// "𝓈"
// "𝓉"
// "𝓊"
// "𝓋"
// "𝓌"
// "𝓍"
// "𝓎"
// "𝓕"
// "1"
// "2"
// "3"
// "4"
// "5"
// "6"
// "7"
// "8"
// "9"
// "0"

// "run_at": "document_end"

// $(document).on("selectionchange", moveToolbar);

// const moveToolbar = (e) => {
//   const selection = document.getSelection();
//   const coordinates = getSelectionCoordinates(selection);

//   if (coordinates && selection.type === TYPE_RANGE) {
//     const toolbarX = coordinates.width / 2 + coordinates.x;
//     updateActionStatus(selection);

//     $toolbar.style.setProperty("--top", `${coordinates.y}px`);
//     $toolbar.style.setProperty("--left", `${toolbarX}px`);
//     $toolbar.style.display = "block";
//   } else {
//     $toolbar.style.display = "none";
//   }
// };
// const getSelectionCoordinates = (selection) => {
//   const r = selection.getRangeAt(0);
//   const clip = r.getClientRects();

//   if (!clip.length) return false;

//   const { x, y, width } = clip[0];
//   return { x, y, width };
// };

// const updateActionStatus = (selection) => {
//   const actions = ["bold"];
//   const cssText = getCssText(selection);

//   actions.forEach((action) => {
//     const isActive = cssText.includes(action);
//     toggleActionState(action, isActive);
//   });
// };

