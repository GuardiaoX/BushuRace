const kanji = {
    id : 0,
    shape : "国",
    radicals : ["囗","王","丶"]
}
const kanji1 = {
    id : 1,
    shape : "右",
    radicals : ["一","ノ","口"]
}
const kanji2 = {
    id : 2,
    shape : "円",
    radicals : ["一","｜","亠","冂"]
}

kanjiList = [kanji, kanji1, kanji2]

bushuRace()

function r(max) {
  return Math.floor(Math.random() * max);
}

function bushuRace(){
    console.log(kanjiList[r(3)])
}


function radicalCheck(kanji, radical) {
    if(kanji.radicals.includes(radical)){
        return true;
    }else{
        return false
    }
}
